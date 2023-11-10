const api_key = "at_3FXP8NDl6NT9Wh9RE6gkSr73ko5Uk"; // Replace with your actual API key



const searchButton = document.getElementById('searchButton');
const ipInput = document.getElementById('ipInput');
const ipAddressBox = document.getElementById('ipAddress');
const locationInfo = document.getElementById('location');
const timeZone = document.getElementById('timeZone');
const ISP = document.getElementById('ISP');
searchButton.addEventListener('click', () => {

    const inputValue = ipInput.value;
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(inputValue)) {  
            getInfoFromIp(inputValue); 
        }  
        else{
            getInfoFromDomain(inputValue);
        }
   
});

// Get IP information and update the map
async function getInfoFromIp(ipAddress) {
    try {
        const response = (await fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ipAddress}`));
        const data =await response.json();

        console.log("data fetched ",data);

        ipAddressBox.innerHTML = data.ip;
        console.log("ip addresss is changed ",ipAddressBox,data.ip);
        locationInfo.innerHTML = data.location.city +" "+data.location.region+" "+data.location.country;
        ISP.innerHTML = data.isp;
        timeZone.innerHTML=data.location.timezone;

        createMap(data.location.lat,data.location.lng,data.location.city);

        
    } catch (error) {
        console.error(error);
        ipAddress.innerHTML = '<p>Unable to retrieve IP information.</p>';
    }
}

async function getInfoFromDomain(domainAddress) {
    try {
        const response = (await fetch(`https://geo.ipify.org/api/v1?apiKey=${api_key}&domain=${domainAddress}`));
        const data =await response.json();

        console.log("data fetched ",data);

        ipAddressBox.innerHTML = data.ip;
        console.log("ip addresss is changed ",ipAddressBox,data.ip);
        locationInfo.innerHTML = data.location.city +" "+data.location.region+" "+data.location.country;
        ISP.innerHTML = data.isp;
        timeZone.innerHTML=data.location.timezone;

        createMap(data.location.lat,data.location.lng,data.location.city);

        
    } catch (error) {
        console.error(error);
        ipAddress.innerHTML = '<p>Unable to retrieve IP information.</p>';
    }
}


// Show the user's IP address by default
getInfoFromIp('');
