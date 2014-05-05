// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([25.6467299,-100.3235918], 16);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([25.646698, -100.323562]).addTo(map)
    .bindPopup('7 p. m. cada miércoles (quincenal),<br> en <a href="http://www.elcowork.com/" target="_blank">El Cowork</a>')
    .openPopup();
