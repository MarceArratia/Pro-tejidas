/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 
function moveMapToRecoleta(map){
    map.setCenter({lat:-70.64183014680742, lng:-33.41910835167864});
    map.setZoom(14);
  }
  function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:-70.64183014680742, lng:-33.41910835167864});
    map.addObject(parisMarker);
  
  }
*/