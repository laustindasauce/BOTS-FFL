# [Webpage](https://austinspencer.works/Fantasy-Twitter/)

The website is built with HTML/CSS/JavaScript. This was a fun site to build since I know there will be people actually visiting this site weekly. I chose to display everything by league. Right now that includes the standings, point leaders, rosters, and trending players(new). All of the data being displayed is stored on Redis database and is recieved through get requests to [my back-end server](https://github.com/abspen1/go-backend). Each time the page is loaded all of the data is pulled, I could maybe do this more efficiently, especially for the rosters. Since I am pulling the data and it isn't even visible unless it is clicked. What I could do instead is only pull the data once the league is actually clicked on.

## Notes
This would be much easier using Vue because I could do this exact webpage with a fraction of the HTML code. It's honestly ridiculous how long the HTML script is. But, I'm in way too deep to convert it to Vue. So here we are..
* Should add Sleeper's trending players section 
    * Could have top 10 added/dropped 24 hours and weekly
* I could limit back-end work by only getting the roster data when the team is actually clicked
    * This would be done by using the name and sending post request with the name which will return the roster for that team

#### Checkout [BOTS FFL](https://twitter.com/BOTSFFL) twitter profile :smiley: