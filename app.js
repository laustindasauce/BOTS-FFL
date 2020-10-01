const axios = require('axios')

const mw_roster_div = document.getElementById('midwestRosters')
const w_roster_div = document.getElementById('westRosters')
const ne_roster_div = document.getElementById('northeastRosters')
const se_roster_div = document.getElementById('southeastRosters')

const mw_roster_btn = document.getElementById('mwbtn')
const w_roster_btn = document.getElementById('wbtn')
const ne_roster_btn = document.getElementById('nebtn')
const se_roster_btn = document.getElementById('sebtn')

const mw_roster_value = document.getElementById('Midwest')
const se_roster_value = document.getElementById('Southeast')
const ne_roster_value = document.getElementById('Northeast')
const w_roster_value = document.getElementById('West')

const BASE_URL = 'https://guldentech.com'

const getLeagueLeaders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl`);
        
        // Midwest
        document.getElementById("mw1").innerHTML = response.data.StandingsMw1
        document.getElementById("mw2").innerHTML = response.data.StandingsMw2
        document.getElementById("mw3").innerHTML = response.data.StandingsMw3
        document.getElementById("mw4").innerHTML = response.data.StandingsMw4
        document.getElementById("mw5").innerHTML = response.data.StandingsMw5
        document.getElementById("mw6").innerHTML = response.data.StandingsMw6
        document.getElementById("mw7").innerHTML = response.data.StandingsMw7
        document.getElementById("mw8").innerHTML = response.data.StandingsMw8
        document.getElementById("mw9").innerHTML = response.data.StandingsMw9
        document.getElementById("mw10").innerHTML = response.data.StandingsMw10
        document.getElementById("mw11").innerHTML = response.data.StandingsMw11
        document.getElementById("mw12").innerHTML = response.data.StandingsMw12

        document.getElementById("mw_p1").innerHTML = response.data.PointsMw1
        document.getElementById("mw_p2").innerHTML = response.data.PointsMw2
        document.getElementById("mw_p3").innerHTML = response.data.PointsMw3
        document.getElementById("mw_p4").innerHTML = response.data.PointsMw4
        document.getElementById("mw_p5").innerHTML = response.data.PointsMw5
        document.getElementById("mw_p6").innerHTML = response.data.PointsMw6
        document.getElementById("mw_p7").innerHTML = response.data.PointsMw7
        document.getElementById("mw_p8").innerHTML = response.data.PointsMw8
        document.getElementById("mw_p9").innerHTML = response.data.PointsMw9
        document.getElementById("mw_p10").innerHTML = response.data.PointsMw10
        document.getElementById("mw_p11").innerHTML = response.data.PointsMw11
        document.getElementById("mw_p12").innerHTML = response.data.PointsMw12

        // Northeast
        document.getElementById("ne1").innerHTML = response.data.StandingsNe1
        document.getElementById("ne2").innerHTML = response.data.StandingsNe2
        document.getElementById("ne3").innerHTML = response.data.StandingsNe3
        document.getElementById("ne4").innerHTML = response.data.StandingsNe4
        document.getElementById("ne5").innerHTML = response.data.StandingsNe5
        document.getElementById("ne6").innerHTML = response.data.StandingsNe6
        document.getElementById("ne7").innerHTML = response.data.StandingsNe7
        document.getElementById("ne8").innerHTML = response.data.StandingsNe8
        document.getElementById("ne9").innerHTML = response.data.StandingsNe9
        document.getElementById("ne10").innerHTML = response.data.StandingsNe10
        document.getElementById("ne11").innerHTML = response.data.StandingsNe11
        document.getElementById("ne12").innerHTML = response.data.StandingsNe12

        document.getElementById("ne_p1").innerHTML = response.data.PointsNe1
        document.getElementById("ne_p2").innerHTML = response.data.PointsNe2
        document.getElementById("ne_p3").innerHTML = response.data.PointsNe3
        document.getElementById("ne_p4").innerHTML = response.data.PointsNe4
        document.getElementById("ne_p5").innerHTML = response.data.PointsNe5
        document.getElementById("ne_p6").innerHTML = response.data.PointsNe6
        document.getElementById("ne_p7").innerHTML = response.data.PointsNe7
        document.getElementById("ne_p8").innerHTML = response.data.PointsNe8
        document.getElementById("ne_p9").innerHTML = response.data.PointsNe9
        document.getElementById("ne_p10").innerHTML = response.data.PointsNe10
        document.getElementById("ne_p11").innerHTML = response.data.PointsNe11
        document.getElementById("ne_p12").innerHTML = response.data.PointsNe12

        // Southeast
        document.getElementById("se1").innerHTML = response.data.StandingsSe1
        document.getElementById("se2").innerHTML = response.data.StandingsSe2
        document.getElementById("se3").innerHTML = response.data.StandingsSe3
        document.getElementById("se4").innerHTML = response.data.StandingsSe4
        document.getElementById("se5").innerHTML = response.data.StandingsSe5
        document.getElementById("se6").innerHTML = response.data.StandingsSe6
        document.getElementById("se7").innerHTML = response.data.StandingsSe7
        document.getElementById("se8").innerHTML = response.data.StandingsSe8
        document.getElementById("se9").innerHTML = response.data.StandingsSe9
        document.getElementById("se10").innerHTML = response.data.StandingsSe10
        document.getElementById("se11").innerHTML = response.data.StandingsSe11
        document.getElementById("se12").innerHTML = response.data.StandingsSe12

        document.getElementById("se_p1").innerHTML = response.data.PointsSe1
        document.getElementById("se_p2").innerHTML = response.data.PointsSe2
        document.getElementById("se_p3").innerHTML = response.data.PointsSe3
        document.getElementById("se_p4").innerHTML = response.data.PointsSe4
        document.getElementById("se_p5").innerHTML = response.data.PointsSe5
        document.getElementById("se_p6").innerHTML = response.data.PointsSe6
        document.getElementById("se_p7").innerHTML = response.data.PointsSe7
        document.getElementById("se_p8").innerHTML = response.data.PointsSe8
        document.getElementById("se_p9").innerHTML = response.data.PointsSe9
        document.getElementById("se_p10").innerHTML = response.data.PointsSe10
        document.getElementById("se_p11").innerHTML = response.data.PointsSe11
        document.getElementById("se_p12").innerHTML = response.data.PointsSe12

        // West
        document.getElementById("w1").innerHTML = response.data.StandingsW1
        document.getElementById("w2").innerHTML = response.data.StandingsW2
        document.getElementById("w3").innerHTML = response.data.StandingsW3
        document.getElementById("w4").innerHTML = response.data.StandingsW4
        document.getElementById("w5").innerHTML = response.data.StandingsW5
        document.getElementById("w6").innerHTML = response.data.StandingsW6
        document.getElementById("w7").innerHTML = response.data.StandingsW7
        document.getElementById("w8").innerHTML = response.data.StandingsW8
        document.getElementById("w9").innerHTML = response.data.StandingsW9
        document.getElementById("w10").innerHTML = response.data.StandingsW10
        document.getElementById("w11").innerHTML = response.data.StandingsW11
        document.getElementById("w12").innerHTML = response.data.StandingsW12

        document.getElementById("w_p1").innerHTML = response.data.PointsW1
        document.getElementById("w_p2").innerHTML = response.data.PointsW2
        document.getElementById("w_p3").innerHTML = response.data.PointsW3
        document.getElementById("w_p4").innerHTML = response.data.PointsW4
        document.getElementById("w_p5").innerHTML = response.data.PointsW5
        document.getElementById("w_p6").innerHTML = response.data.PointsW6
        document.getElementById("w_p7").innerHTML = response.data.PointsW7
        document.getElementById("w_p8").innerHTML = response.data.PointsW8
        document.getElementById("w_p9").innerHTML = response.data.PointsW9
        document.getElementById("w_p10").innerHTML = response.data.PointsW10
        document.getElementById("w_p11").innerHTML = response.data.PointsW11
        document.getElementById("w_p12").innerHTML = response.data.PointsW12

        console.log(response.data)

    } catch (e) {
        console.error(e);
    }
};

const getMidwestTeams = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl/teams/midwest`);

        // Midwest team names for drop down
        document.getElementById("Mteam1").innerHTML = response.data.Team1
        document.getElementById("Mteam2").innerHTML = response.data.Team2
        document.getElementById("Mteam3").innerHTML = response.data.Team3
        document.getElementById("Mteam4").innerHTML = response.data.Team4
        document.getElementById("Mteam5").innerHTML = response.data.Team5
        document.getElementById("Mteam6").innerHTML = response.data.Team6
        document.getElementById("Mteam7").innerHTML = response.data.Team7
        document.getElementById("Mteam8").innerHTML = response.data.Team8
        document.getElementById("Mteam9").innerHTML = response.data.Team9
        document.getElementById("Mteam10").innerHTML = response.data.Team10
        document.getElementById("Mteam11").innerHTML = response.data.Team11
        document.getElementById("Mteam12").innerHTML = response.data.Team12
        // team names for div
        document.getElementById("MP1").innerHTML = response.data.Team1
        document.getElementById("MP2").innerHTML = response.data.Team2
        document.getElementById("MP3").innerHTML = response.data.Team3
        document.getElementById("MP4").innerHTML = response.data.Team4
        document.getElementById("MP5").innerHTML = response.data.Team5
        document.getElementById("MP6").innerHTML = response.data.Team6
        document.getElementById("MP7").innerHTML = response.data.Team7
        document.getElementById("MP8").innerHTML = response.data.Team8
        document.getElementById("MP9").innerHTML = response.data.Team9
        document.getElementById("MP10").innerHTML = response.data.Team10
        document.getElementById("MP11").innerHTML = response.data.Team11
        document.getElementById("MP12").innerHTML = response.data.Team12

        console.log(response.data)

    } catch (e) {
        console.error(e);
    }
};

const getWestTeams = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl/teams/west`);

        // West team names for drop down
        document.getElementById("Wteam1").innerHTML = response.data.Team1
        document.getElementById("Wteam2").innerHTML = response.data.Team2
        document.getElementById("Wteam3").innerHTML = response.data.Team3
        document.getElementById("Wteam4").innerHTML = response.data.Team4
        document.getElementById("Wteam5").innerHTML = response.data.Team5
        document.getElementById("Wteam6").innerHTML = response.data.Team6
        document.getElementById("Wteam7").innerHTML = response.data.Team7
        document.getElementById("Wteam8").innerHTML = response.data.Team8
        document.getElementById("Wteam9").innerHTML = response.data.Team9
        document.getElementById("Wteam10").innerHTML = response.data.Team10
        document.getElementById("Wteam11").innerHTML = response.data.Team11
        document.getElementById("Wteam12").innerHTML = response.data.Team12
        // team names for div
        document.getElementById("WP1").innerHTML = response.data.Team1
        document.getElementById("WP2").innerHTML = response.data.Team2
        document.getElementById("WP3").innerHTML = response.data.Team3
        document.getElementById("WP4").innerHTML = response.data.Team4
        document.getElementById("WP5").innerHTML = response.data.Team5
        document.getElementById("WP6").innerHTML = response.data.Team6
        document.getElementById("WP7").innerHTML = response.data.Team7
        document.getElementById("WP8").innerHTML = response.data.Team8
        document.getElementById("WP9").innerHTML = response.data.Team9
        document.getElementById("WP10").innerHTML = response.data.Team10
        document.getElementById("WP11").innerHTML = response.data.Team11
        document.getElementById("WP12").innerHTML = response.data.Team12

        console.log(response.data)

    } catch (e) {
        console.error(e);
    }
};

const getNortheastTeams = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl/teams/northeast`);

        // Northeast team names for drop down
        document.getElementById("Nteam1").innerHTML = response.data.Team1
        document.getElementById("Nteam2").innerHTML = response.data.Team2
        document.getElementById("Nteam3").innerHTML = response.data.Team3
        document.getElementById("Nteam4").innerHTML = response.data.Team4
        document.getElementById("Nteam5").innerHTML = response.data.Team5
        document.getElementById("Nteam6").innerHTML = response.data.Team6
        document.getElementById("Nteam7").innerHTML = response.data.Team7
        document.getElementById("Nteam8").innerHTML = response.data.Team8
        document.getElementById("Nteam9").innerHTML = response.data.Team9
        document.getElementById("Nteam10").innerHTML = response.data.Team10
        document.getElementById("Nteam11").innerHTML = response.data.Team11
        document.getElementById("Nteam12").innerHTML = response.data.Team12
        // Team names for div
        document.getElementById("NP1").innerHTML = response.data.Team1
        document.getElementById("NP2").innerHTML = response.data.Team2
        document.getElementById("NP3").innerHTML = response.data.Team3
        document.getElementById("NP4").innerHTML = response.data.Team4
        document.getElementById("NP5").innerHTML = response.data.Team5
        document.getElementById("NP6").innerHTML = response.data.Team6
        document.getElementById("NP7").innerHTML = response.data.Team7
        document.getElementById("NP8").innerHTML = response.data.Team8
        document.getElementById("NP9").innerHTML = response.data.Team9
        document.getElementById("NP10").innerHTML = response.data.Team10
        document.getElementById("NP11").innerHTML = response.data.Team11
        document.getElementById("NP12").innerHTML = response.data.Team12

        console.log(response.data)

    } catch (e) {
        console.error(e);
    }
};

const getSoutheastTeams = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl/teams/southeast`);

        // Southeast team names for drop down
        document.getElementById("Steam1").innerHTML = response.data.Team1
        document.getElementById("Steam2").innerHTML = response.data.Team2
        document.getElementById("Steam3").innerHTML = response.data.Team3
        document.getElementById("Steam4").innerHTML = response.data.Team4
        document.getElementById("Steam5").innerHTML = response.data.Team5
        document.getElementById("Steam6").innerHTML = response.data.Team6
        document.getElementById("Steam7").innerHTML = response.data.Team7
        document.getElementById("Steam8").innerHTML = response.data.Team8
        document.getElementById("Steam9").innerHTML = response.data.Team9
        document.getElementById("Steam10").innerHTML = response.data.Team10
        document.getElementById("Steam11").innerHTML = response.data.Team11
        document.getElementById("Steam12").innerHTML = response.data.Team12
        // Team names for div
        document.getElementById("SP1").innerHTML = response.data.Team1
        document.getElementById("SP2").innerHTML = response.data.Team2
        document.getElementById("SP3").innerHTML = response.data.Team3
        document.getElementById("SP4").innerHTML = response.data.Team4
        document.getElementById("SP5").innerHTML = response.data.Team5
        document.getElementById("SP6").innerHTML = response.data.Team6
        document.getElementById("SP7").innerHTML = response.data.Team7
        document.getElementById("SP8").innerHTML = response.data.Team8
        document.getElementById("SP9").innerHTML = response.data.Team9
        document.getElementById("SP10").innerHTML = response.data.Team10
        document.getElementById("SP11").innerHTML = response.data.Team11
        document.getElementById("SP12").innerHTML = response.data.Team12

        console.log(response.data)

    } catch (e) {
        console.error(e);
    }
};

function hideRosters() {
    se_roster_div.style.display = "none"
    mw_roster_div.style.display = "none"
    ne_roster_div.style.display = "none"
    w_roster_div.style.display = "none"
}

function show_mw_roster() {
    var num = mw_roster_value.value
    if (num == 0) {
        alert('Please select a team')
        return
    }
    var id = "M" + String(num)
    mw_roster_div.style.display = "block"
    document.getElementById(id).style.display = "block"
    mw_roster_value.value = 0
}

function show_se_roster() {
    var num = se_roster_value.value
    if (num == 0) {
        alert('Please select a team')
        return
    }
    var id = "S" + String(num)
    se_roster_div.style.display = "block"
    document.getElementById(id).style.display = "block"
    se_roster_value.value = 0
}

function show_ne_roster() {
    var num = ne_roster_value.value
    if (num == 0) {
        alert('Please select a team')
        return
    }
    var id = "N" + String(num)
    ne_roster_div.style.display = "block"
    document.getElementById(id).style.display = "block"
    ne_roster_value.value = 0
}

function show_w_roster() {
    var num = w_roster_value.value
    if (num == 0) {
        alert('Please select a team')
        return
    }
    var id = "W" + String(num)
    w_roster_div.style.display = "block"
    document.getElementById(id).style.display = "block"
    w_roster_value.value = 0
}

// This is to set up our leaders on each load of site
function main() {
    // console.log("Welcome to BOTSFFL github pages")
    getLeagueLeaders()
    hideRosters()
    getMidwestTeams()
    getNortheastTeams()
    getSoutheastTeams()
    getWestTeams()
    mw_roster_btn.addEventListener('click', function () {
        show_mw_roster()
    })
    se_roster_btn.addEventListener('click', function () {
        show_se_roster()
    })
    ne_roster_btn.addEventListener('click', function () {
        show_ne_roster()
    })
    w_roster_btn.addEventListener('click', function () {
        show_w_roster()
    })
}

main()