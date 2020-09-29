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
    bytelist = client.smembers('active_players')
    stringlist = [x.decode('utf-8') for x in bytelist]
    players = get_players()
    for key, value in players.items():
        if key in stringlist:
            if value['position'] != "DEF":
                set_position_player(value)
                continue
            else:
                set_defense(value)
                continue


def set_position_player(info):
    position = info['position']
    set_title = "sleeper_" + str(position)
    set_body = f"{info['full_name']}, Team: {info['team']}"
    client.sadd(set_title, set_body)


def set_defense(info):
    position = info['position']
    set_title = "sleeper_" + str(position)
    client.sadd(set_title, info['team'])


print(time.ctime())
schedule.every().thursday.at("16:02").do(set_players)


while True:
    try:
        schedule.run_pending()
        time.sleep(1)
    except Exception as identifier:
        print(identifier)
        time.sleep(1)
