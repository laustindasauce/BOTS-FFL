import json
import os
import redis
import requests
import schedule
import time

client = redis.Redis(host="10.10.10.1", port=6379, db=10,
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
        i += 1
        title = "w_team_" + str(i)
        client.set(title, team)
    team_list.append(w)
    # for team in team_list:
        # for t in team:
        #     print(client.hgetall(t))
        #     print("\n")


print(time.ctime())
schedule.every().thursday.at("16:02").do(set_players)
schedule.every().thursday.at("18:15").do(set_team_names)


while True:
    try:
        schedule.run_pending()
        time.sleep(1)
    except Exception as identifier:
        print(identifier)
        time.sleep(1)
