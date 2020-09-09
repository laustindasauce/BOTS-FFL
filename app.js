const axios = require('axios')

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

// This is to set up our leaders on each load of site
function main() {
    // console.log("Welcome to BOTSFFL github pages")
    getLeagueLeaders()
}

main()