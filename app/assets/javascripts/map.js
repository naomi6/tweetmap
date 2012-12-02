var geocoder;
var map;
var marker;

function initialize(lat, lng){
    geocoder = new google.maps.Geocoder();
    latlng = new google.maps.LatLng(lat, lng);
    
    var options = {
        center: latlng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById("map_canvas"), options);
    marker = new google.maps.Marker({map: map, position: latlng});
    /*

    if(get_all){
        $.get('/tweets', function(tweets)) {
            for(var tweet in tweets) {
                var latlng = new google.maps.LatLng(tweets[tweet]['location']['latitude'], tweets[tweet]['location']['longitude']);
                var user_marker = new google.maps.Marker({
                    map: map,
                    position:
                })
            }
        }
    */
}
