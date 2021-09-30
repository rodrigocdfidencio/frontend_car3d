const { courses } = data;

const routeSelected = document.getElementById("routes");

let latitude = '';
let longitude = '';
let trajectory = [];
let velocity = [];
let route = '0';
let direction = [];

var carIcon = L.icon({
   iconUrl: '../src/assets/car_up.png',
   iconSize: [22, 35],
});

// create opttion
for(course in courses) {
   option = new Option(courses[course].gps[0].address, course);
   routeSelected.options[routeSelected.options.length] = option;
}

// initialize the map on the "map" div with a given center and zoom
let map = new L.Map('map', {
zoom: 6,
minZoom: 3,
});

// create a new tile layer
let tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
layer = new L.TileLayer(tileUrl,{maxZoom: 18});

// add the layer to the map
map.addLayer(layer);

function setMarker(){
   marker = L.Marker.movingMarker(trajectory, velocity, {icon: carIcon, autostart: true, keepAtCenter: true}).addTo(map);

   marker.on('end', function() {
      marker.bindPopup('<b>Destino final !</b>', {closeOnClick: false})
      .openPopup();
});
}

function updateCordinates() {
   for (index = 1; index < courses[route].gps.length; index += 1) {
      latitude = courses[route].gps[index].latitude;
      longitude = courses[route].gps[index].longitude;
      speed = Math.ceil(9000 - (courses[route].gps[index].speed * 100));
      trajectory.push([latitude, longitude]);
      velocity.push(speed);
   }
}

function updateRoute() {
   route = routeSelected.value;
   changeRoute();
}

function changeRoute() {
   if(marker) {
      marker.stop();
      map.removeLayer(marker);
      trajectory = [],
      velocity = [];
      updateCordinates();
      setMarker();
   }
      updateCordinates();
}
let marker = '';
changeRoute();

map.fitBounds(trajectory);

setMarker();


routeSelected.addEventListener('change', updateRoute);