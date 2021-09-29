/* const data = require('../server/frontend_data_gps.json');
console.log(data); */

// initialize the map on the "map" div with a given center and zoom
let map = new L.Map('map', {
  zoom: 6,
  minZoom: 3,
});

// create a new tile layer
let tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,
{
    attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
    maxZoom: 18
});

// add the layer to the map
map.addLayer(layer);

let trajectory = [[-23.963214, -46.28054], [-23.96325, -46.280544],
[ -23.96319, -46.280536], [ -23.963218, -46.280566], [ -23.962782, -46.278824],
[ -23.962299, -46.276578],
[ -23.962701, -46.276151],
[ -23.96197, -46.273192],
[ -23.962278, -46.273007],
[ -23.967683, -46.271715],
[ -23.96945, -46.272499],
[ -23.969783, -46.272075],
[ -23.969396, -46.26827]];

map.fitBounds(trajectory);

let marker = L.Marker.movingMarker(trajectory,
    [3000, 3000, 3000, 4000, 3000, 3000, 3000, 3000, 4000, 3000, 4000, 3000, 4000, 3000], {autostart: true}).addTo(map);
L.polyline(trajectory, {color: 'red'}).addTo(map);


marker.on('end', function() {
    marker.bindPopup('<b>Destino final !</b>', {closeOnClick: false})
    .openPopup();
});

