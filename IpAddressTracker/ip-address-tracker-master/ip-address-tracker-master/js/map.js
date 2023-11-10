

function createMap(latitude,longitude,city) {
    
    document.getElementById('mapBox').innerHTML =  "<div id='map' style='width: 100%; height: 100%;'></div>";
    var map = L.map('map').setView([latitude, longitude], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { 
  attribution: "© OpenStreetMap contributors", 
  maxZoom: 20, 
  minZoom: 2, 
  tileSize: 512, 
  zoomOffset: -1, 
}).addTo(map); 
    var marker = L.marker([latitude, longitude]).addTo(map);
    var popup = marker.bindPopup(`<b>${city}</b>`);
    popup.openPopup();
}
