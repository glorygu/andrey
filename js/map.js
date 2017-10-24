function myMap() {
	var myCenter = new google.maps.LatLng(9.928123, -84.241516);
    var mapOptions = {
        center: new google.maps.LatLng(9.928123, -84.241516),
        zoom: 18
    };
	var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
	var marker = new google.maps.Marker({position:myCenter});
  	marker.setMap(map);
}

