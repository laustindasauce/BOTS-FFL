# Fantasy Football Twitter Bot

Python run twitter bot that uses Tweepy API as well as the Sleeper.app API. Sleeper.app is the app used for the fantasy football league. This bot will tweet out information relative to the league. Such as, the leagues current standings, the matchup results for the week and more. 

## Redis 

This program uses Redis as the database to store any data we want to keep track of. Redis works nicely with Python and is quick and easy. Using it in this script to keep track of teams' points and wins. 

## Docker

Docker is used for running this program 24/7 and fully automating this bot. At the beginning of the season you can set it up and never touch the script again.

## Install Found in twitter-bot repo
* [Twitter Developer](https://github.com/abspen1/twitter-bot#twitter-developer-set-up)
* [Redis](https://github.com/abspen1/twitter-bot#redis-setup)
* [Docker](https://github.com/abspen1/twitter-bot#build--push)
