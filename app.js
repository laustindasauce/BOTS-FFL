const axios = require('axios')

const BASE_URL = 'https://guldentech.com'

const getLeagueLeaders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl`);
        
        document.getElementById("mw1").innerHTML = response.data.Standings1
        document.getElementById("mw2").innerHTML = response.data.Standings2
        document.getElementById("mw3").innerHTML = response.data.Standings3
        document.getElementById("mw4").innerHTML = response.data.Standings4
        document.getElementById("mw5").innerHTML = response.data.Standings5
        document.getElementById("mw6").innerHTML = response.data.Standings6
        document.getElementById("mw7").innerHTML = response.data.Standings7
        document.getElementById("mw8").innerHTML = response.data.Standings8
        document.getElementById("mw9").innerHTML = response.data.Standings9
        document.getElementById("mw10").innerHTML = response.data.Standings10
        document.getElementById("mw11").innerHTML = response.data.Standings11
        document.getElementById("mw12").innerHTML = response.data.Standings12
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