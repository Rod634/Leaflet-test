var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicm9kNjM0IiwiYSI6ImNrZm44eTBubTFrNmQycWt1OGRndHI2NG8ifQ.L5n7sAghrZORJBCpFsAecw'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
var marker = L.marker([57.5, -0.09]).addTo(mymap);