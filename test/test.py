"""Testing for our FFL BOT
"""

import json
import os
# import redis
import requests
# import schedule
import time
import tweepy

########## OS Environment Variables ###########

'''
Environment Variables: USER_ID, LEAGUE_ID, REDIS_PASS, CONSUMER_KEY, CONSUMER_SECRET, KEY, SECRET
'''
# Sleeper.app Credentials
user = os.getenv("USER_ID")
league = os.getenv("LEAGUE_ID")

# Twitter Developer Account Credentials
consumer_key = os.getenv("CONSUMER_KEY")
consumer_secret = os.getenv("CONSUMER_SECRET")
key = os.getenv("KEY")
secret = os.getenv("SECRET")

########## Global Variables ###########

# Twitter Developer Account Settings
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(key, secret)
auth.secure = True
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)


def follow_specific_user(user):
    api.create_friendship(user)
    print(f"Now following {user}")


def send_working_message(follower):
    to_string = "Hello! I am working :)"
    api.send_direct_message(follower, to_string)


def send_error_message(follower):
    try:
        to_string = "I errored out.. going to sleep for 2 hours.."
        api.send_direct_message(follower, to_string)
        print("Sent dm to follower since we errored out.")
    except tweepy.TweepError as e:
        if e.reason[:13] != "[{'code': 139" or e.reason[:13] != "[{'code': 226" or e.reason[:13] != "[{'code': 429":
            print(e.reason)
        time.sleep(10*60)
        send_error_message(441228378)


def main():
    print("Beginning our test")
    # follow_specific_user(441228378)
    # send_working_message(441228378)
    year = str(time.ctime())[-4:]
    print(year)
    
if __name__ == "__main__":
    main()
