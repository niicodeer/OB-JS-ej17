let markers, map;
// Initialize and add the map
function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };
    
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(new google.maps.Marker({
        position: {
            lat: -31.413805416830876,
            lng: -64.50300123776994,
        },
        map,
        title: "Villa Carlos Paz",
        })
    );
    markers.push(new google.maps.Marker({
        position: { 
            lat: -41.123095699707754,
            lng: -71.36945052031368,
        }, 
        map,
        title: "Teleférico Cerro Otto"
        })
    );
    markers.push(new google.maps.Marker({
        position: { 
            lat: -34.603588755062056, 
            lng: -58.381548945266246,
        }, 
        map,
        title: "Obelisco"
        })
    );
}

window.initMap = initMap;