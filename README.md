# Fantasy Football Twitter Bot

Python run twitter bot that uses Tweepy API as well as the Sleeper.app API. Sleeper.app is the app used for the fantasy football league. This bot will tweet out information relative to the league. Such as, the leagues current standings, the matchup results for the week and more. 

## Specific Leagues

Split the seperate leagues into seperate scripts.. could combine them all into one but didn't want to at the moment since having seperate is easier.
To combine I would need to possibly create a list with the seperate league IDs.. I also would need to switch the redis database with each switch of the IDs. So most likely I would create a dictionary with the ID : redis database

## Test

Just a script that I use to test the functions. I will run test code within this script before implementing into our actual script.

## Redis 

This program uses Redis as the database to store any data we want to keep track of. Redis works nicely with Python and is quick and easy. Using it in this script to keep track of teams' points and wins. 

## Docker

Docker is used for running this program 24/7 and fully automating this bot. At the beginning of the season you can set it up and never touch the script again.

## Install Found in twitter-bot repo
* [Twitter Developer](https://github.com/abspen1/twitter-bot#twitter-developer-set-up)
* [Redis](https://github.com/abspen1/twitter-bot#redis-setup)
* [Docker](https://github.com/abspen1/twitter-bot#build--push)

#### Checkout [BOTS FFL](https://twitter.com/BOTSFFL) twitter profile :smiley:
