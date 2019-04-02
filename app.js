console.log("Hola");
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })



document.getElementById("zoneButton").addEventListener("click",function(){

    document.getElementById("buttonZoneuno").innerHTML=` <img src="img/Group 4.png"></img>`
});

/**
 * Moves the map to display over Berlin
 *
 *   A HERE Map instance within the application

function moveMapToBerlin(map){
    map.setCenter({lat:52.5159, lng:13.3777});
    map.setZoom(14);
}
 
function moveMapToRecoleta(map){
    map.setCenter({lat:-70.64183014680742, lng:-33.41910835167864});
    map.setZoom(14);
  }
  function addMarkersToMap(map) {
    var parisMarker = new H.map.Marker({lat:-70.64183014680742, lng:-33.41910835167864});
    map.addObject(parisMarker);
  
  }
*/

