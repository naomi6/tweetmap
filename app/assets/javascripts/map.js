var geocoder;
var map;
var marker;

function initialize(lat, lng){
    geocoder = new google.maps.Geocoder();
    latlng = new google.maps.LatLng(lat, lng);
    
    var options = {
        center: latlng,
        zoom: 12,
        mapTypeId:google.maps.MapTypeId.SATELLITE,
        mapTypeControl:false,
        minZoom:1,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false,   
    };
    
    
    map = new google.maps.Map(document.getElementById("map_canvas"), options);
    /*
    var map_style = {};
        map_style.google_maps_customization_style = [
            {
                stylers:[
                    { invert_lightness:true },
                    { weight:1 },
                    { saturation:-100 },
                    { lightness:-40 }
                ]
            },
            {
                elementType:"labels",
                stylers:[
                    { visibility:"simplified" }
                ]
            }
        ];

        var Soft = function () {
            this.Soft = function () {
                map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                map.setOptions({styles:map_style.google_maps_customization_style});
            }
        }


        
        map.setOptions({styles:map_style.google_maps_customization_style});
    */
    map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    
    var marker1type = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 3,
          fillOpacity: 1,
          fillColor: "#f5b644",
          strokeWeight: 0
        };
    var marker2type = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 3,
          fillOpacity: 1,
          fillColor: "#68def8",
          strokeWeight: 0
        };   
    
    marker = new google.maps.Marker({map: map, position: latlng});
   /*
    marker = new google.maps.Marker({
        position: latlng,
        icon: marker2type,
        draggable: false,
        map: map
      });
    */      
    
    /*
    $.get(window.location, function(tweets) {
        for (var tweet in tweets){
            var latlng = new google.maps.LatLng(tweets["latitude"],tweets["longitude"]);
            marker = new google.maps.Marker({
                position: latlng,
                icon: marker2type,
                draggable: false,
                map: map
              });
        }
        
    });*/
  
}
