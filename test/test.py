"""Testing for our FFL BOT
"""

import json
import math
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


def create_message():
    message = "Total point leaders through week 6: \n1st: I have a Kittle cock:     1711\n2nd: Coach Ky's Guys:     1682\n3rd: The Sage’s Hog Farm:     1667\n4th: Mike Ditka’s Juice Box Boys:     1644\n5th: Ass and TDs:     1519\n6th: Alvin & the Chipmunks:     1468\n7th: Montgunna Bust a Nut:     1379\n8th: The Bopping Sers:     1359"
    message = message + "\nWeek 8 results:\nI have a Kittle cock def. The Bopping Sers: 191 - 103\nMike Ditka’s Juice Box Boys def. Montgunna Bust a Nut: 170 - 111\nThe Sage’s Hog Farm def. Alvin & the Chipmunks: 151 - 106\nAss and TDs def. Coach Ky's Guys: 115 - 106"
    return message


def tweet_message(message):
    # print(message)
    message_length = len(message)
    print(message_length)
    if message_length > 280:
        num_tweets = math.ceil(message_length / 280)
        new_message = message[:280]
        j = 1
        while j < num_tweets:
            i = 280
            while new_message[-1] != "\n":
                i -= 1
                new_message = message[:i]
            send(new_message)
            message_length = message_length - i
            send(message[-message_length:])
            j += 1


def send_tweet(message, num, total):
    message_length = len(message)
    if message_length > 274:
        new_message = message[:274]
        i = 274
        while new_message[-1] != "\n":
            i -= 1
            new_message = message[:i]
        send_tweet(new_message, num, total)
        message_length = message_length - i
        num += 1
        send_tweet(message[-message_length:], num, total)
    else:
        if total > 1:
            message = f"({num}/{total})\n" + message
        
        print(message)



def send(message):
    print(message)


def main():
    print("Beginning our test")
    # follow_specific_user(441228378)
    # send_working_message(441228378)
    year = str(time.ctime())[-4:]
    print(year)
    message = create_message()
    message = message + "\n\n#BOTS2020"
    num_tweets = math.ceil(len(message) / 274)
    send_tweet(message, 1, num_tweets)
    
if __name__ == "__main__":
    main()
