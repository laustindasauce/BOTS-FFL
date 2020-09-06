const axios = require('axios')

const northEast_div = document.getElementById("northeast")
const southEast_div = document.getElementById("southeast")

const BASE_URL = 'https://guldentech.com'

const getLeagueLeaders = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/austinapi/botsffl`);

        northEast_div.innerHTML = response.data.Standings
        southEast_div.innerHTML = response.data.Points

        console.log(response.data)

    } catch (e) {
        console.error(e);
    }
};

// This is to set up our leaders on each load of site
function main() {
    console.log("Welcome to BOTSFFL github pages")
    getLeagueLeaders()
}

main()