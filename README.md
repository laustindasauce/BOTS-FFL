# Fantasy Football Twitter Bot [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fabspen1%2FFantasy-Twitter&count_bg=%23808080&title_bg=%23306998&icon=python.svg&icon_color=%23FFD43B&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

Python run twitter bot that uses Tweepy API as well as the Sleeper.app API. Sleeper.app is the app used for the fantasy football league. This bot will tweet out information relative to the league. Such as, the leagues current standings, the matchup results for the week and more. Now there is data available on the [website](https://austinspencer.works/Fantasy-Twitter/)!

## Specific Leagues

Split the seperate leagues into seperate scripts.. could combine them all into one but didn't want to at the moment since having seperate is easier.
To combine I would need to possibly create a list with the seperate league IDs.. I also would need to switch the Redis database with each switch of the IDs. So most likely I would create a dictionary with the ID : Redis database

## Players

This is a helper script that will run and pull the huge dataset of players sleeper.app has. It'll then save the ones that are actually active players in our league on Redis. There is some code in the specific leagues scripts that will work with this data to create hashes of each team name with all of their active players, deleted and re-created weekly.


## Website

The website is built with HTML/CSS/JavaScript. This was a fun site to build since I know there will be people actually visiting this site weekly. I chose to display everything by league. Right now that includes the standings, point leaders, and the rosters(new). All of the data being displayed is stored on Redis database and is recieved through get requests to [my back-end server](https://github.com/abspen1/go-backend). Each time the page is loaded all of the data is pulled, I could maybe do this more efficiently, especially for the rosters. Since I am pulling the data and it isn't even visible unless it is clicked. What I could do instead is only pull the data once the league is actually clicked on.


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
* [Cloud Deployent](https://github.com/abspen1/twitter-bot#google-cloud-terminal-commands)

#### Checkout [BOTS FFL](https://twitter.com/BOTSFFL) twitter profile :smiley:
