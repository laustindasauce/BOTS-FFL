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
                set_position_player(key, value)
                continue
            else:
                set_defense(key, value)
                continue


def set_position_player(id, info):
    position = info['position']
    hash_title = str(id)
    hash_key = f"{info['full_name']}, Team: {info['team']}"
    client.hset(hash_title, hash_key, position)


def set_defense(id, info):
    position = info['position']
    hash_title = str(id)
    client.hset(hash_title, info['team'], position)


def clear_vars():
    client.delete('active_players')


print(time.ctime())
schedule.every().thursday.at("16:02").do(set_players)


while True:
    try:
        schedule.run_pending()
        time.sleep(1)
    except Exception as identifier:
        print(identifier)
        time.sleep(1)
