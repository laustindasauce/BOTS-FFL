import json
import os
import redis
import requests
import schedule
import time
import tweepy

# Twitter Developer Account Credentials
consumer_key = os.getenv("CONSUMER_KEY")
consumer_secret = os.getenv("CONSUMER_SECRET")
key = os.getenv("KEY")
secret = os.getenv("SECRET")

# Twitter Developer Account Settings
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(key, secret)
auth.secure = True
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

client = redis.Redis(host=os.getenv("REDIS_HOST"), port=6379, db=10,
                     password=os.getenv("REDIS_PASS"))

url = "https://api.sleeper.app/v1/players/nfl"

def get_players():
    r = requests.get(url)
    return json.loads(r.content)

'''
For a faster runtime I should take the byte string from redis and turn it into a string locally
bytelist = client.smembers('active_players')
stringlist=[x.decode('utf-8') for x in bytelist]
then instead of using the sismember we can use if key in stringlist:
should make run time significantly faster..
'''
def set_players():
    # bytelist = client.smembers('active_players')
    # stringlist = [x.decode('utf-8') for x in bytelist]
    players = get_players()
    i = 0
    for key, value in players.items():
        i += 1
        if i % 1000 == 0:
            print(f"{i} players added to database!")
        if value['position'] != "DEF":
            i = set_position_player(key, value, i)
            continue
        else:
            i = set_defense(key, value, i)
            continue
    print(f"Total of {i} players added to database")


def set_position_player(id, info, i):
    position = info['position']
    hash_title = str(id)
    hash_key = f"{info['full_name']}, Team: {info['team']}"
    try:
        client.hset(hash_title, hash_key, position)
        return i
    except Exception:
        return i-1


def set_defense(id, info, i):
    position = info['position']
    hash_title = str(id)
    try:
        client.hset(hash_title, info["team"], position)
        return i
    except Exception:
        return i-1


def clear_vars():
    client.delete('active_players')


def set_team_names():
    team_list = []
    bytelist = client.smembers('midwest_teams')
    mw = [x.decode('utf-8') for x in bytelist]
    i =0
    for team in mw:
        i += 1
        title = "mw_team_" + str(i)
        client.set(title, team)
    team_list.append(mw)
    bytelist = client.smembers('northeast_teams')
    ne = [x.decode('utf-8') for x in bytelist]
    i = 0
    for team in ne:
        i += 1
        title = "ne_team_" + str(i)
        client.set(title, team)
    team_list.append(ne)
    bytelist = client.smembers('southeast_teams')
    se = [x.decode('utf-8') for x in bytelist]
    i = 0
    for team in se:
        i += 1
        title = "se_team_" + str(i)
        client.set(title, team)
    team_list.append(se)
    bytelist = client.smembers('west_teams')
    w = [x.decode('utf-8') for x in bytelist]
    i = 0
    for team in w:
        print(team)
        i += 1
        title = "w_team_" + str(i)
        client.set(title, team)
    team_list.append(w)


def get_trending(type, hours, limit):
    url = f"https://sleeper.app/v1/players/nfl/trending/{type}?lookback_hours={hours}&limit={limit}"
    r = requests.get(url)
    return json.loads(r.content)


def send_add_tweet(content):
    content = "Looking for some last minute waiver pickups? Here are sleeper's top trending players based on adds in the past 5 days.\n\n" + content
    content = content + "#BOTS2020"
    api.update_status(content)


def send_drop_tweet(content):
    content = "Sleeper's top 3 dropped players today\n\n" + content
    content = content + "#BOTS2020"
    print(content)


def trending():
    add = get_trending("add", 120, 3)
    to_string = ""
    i = 0
    for item in add:
        i += 1
        hash = client.hgetall(item["player_id"])
        for key, value in hash.items():
            key = key.decode("utf-8")
            value = value.decode("utf-8")
            if i == 1:
                position = "1st:"
            elif i == 2:
                position = "2nd:"
            else:
                position = "3rd:"
            to_string += f"{position} {key}, {value}\n"
    send_add_tweet(to_string)
    # drop = get_trending("drop", 24, 3)
    # i = 0
    # to_string = ""
    # for item in drop:
    #     i += 1
    #     hash = client.hgetall(item["player_id"])
    #     for key, value in hash.items():
    #         key = key.decode("utf-8")
    #         value = value.decode("utf-8")
    #         if i == 1:
    #             position = "1st:"
    #         elif i == 2:
    #             position = "2nd:"
    #         else:
    #             position = "3rd:"
    #         to_string += f"{position} {key}, Position: {value}\n"
    # send_drop_tweet(to_string)


print(time.ctime())
set_players()
set_team_names()


schedule.every().day.at("16:00").do(set_players)
schedule.every().day.at("18:15").do(set_team_names)
schedule.every().friday.at("18:00").do(trending)


while True:
    try:
        schedule.run_pending()
        time.sleep(1)
    except Exception as identifier:
        print(identifier)
        time.sleep(1)
