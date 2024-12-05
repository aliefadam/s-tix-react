const showGoogleMaps = (maps_link) => {
    let map;
    let markers = [];
    let searchBox;
    const urlMapFromDatabase = maps_link;

    async function initMap() {
        const defaultLocation = {
            lat: -6.2,
            lng: 106.816666,
        }; // Lokasi default: Jakarta, Indonesia

        const center =
            (await getCoordinatesFromUrl(urlMapFromDatabase)) ||
            defaultLocation;

        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(document.getElementById("map"), {
            center: center,
            zoom: 12,
        });

        const input = document.getElementById("pac-input");
        const { SearchBox } = await google.maps.importLibrary("places");
        searchBox = new SearchBox(input);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener("bounds_changed", () => {
            searchBox.setBounds(map.getBounds());
        });

        if (center !== defaultLocation) {
            placeMarker(center);
        }
    }

    async function getCoordinatesFromUrl(url) {
        if (!url) return null;

        const placeIdMatch = url.match(/place_id:([^&]+)/);
        if (placeIdMatch) {
            const placeId = placeIdMatch[1];
            return getCoordinatesFromPlaceId(placeId);
        }

        const latLngMatch = url.match(/query=(-?\d+\.\d+),(-?\d+\.\d+)/);
        if (latLngMatch) {
            return {
                lat: parseFloat(latLngMatch[1]),
                lng: parseFloat(latLngMatch[2]),
            };
        }

        return null;
    }

    async function getCoordinatesFromPlaceId(placeId) {
        const geocoder = new google.maps.Geocoder();
        return new Promise((resolve) => {
            geocoder.geocode(
                {
                    placeId: placeId,
                },
                function (results, status) {
                    if (status === "OK" && results[0].geometry.location) {
                        resolve({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                        });
                    } else {
                        resolve(null);
                    }
                }
            );
        });
    }

    function placeMarker(location) {
        clearMarkers();

        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });
        markers.push(marker);
    }

    function clearMarkers() {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    initMap();
};

export default showGoogleMaps;
