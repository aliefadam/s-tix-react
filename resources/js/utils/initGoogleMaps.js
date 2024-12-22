const initGoogleMaps = ({ setData, locationFromDatabase = null }) => {
    let map;
    let markers = [];
    let searchBox;

    async function initMap() {
        const defaultLocation = {
            lat: -6.2,
            lng: 106.816666,
        }; // Jakarta, Indonesia

        const center =
            (await getCoordinatesFromUrl(locationFromDatabase)) ||
            defaultLocation;
        const { Map } = await google.maps.importLibrary("maps");
        map = new Map(document.getElementById("map"), {
            center: center,
            zoom: 8,
            mapTypeControl: false,
        });

        const input = document.getElementById("pac-input");
        const { SearchBox } = await google.maps.importLibrary("places");
        searchBox = new SearchBox(input);

        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        document.getElementById("google-map").classList.remove("hidden");

        map.addListener("bounds_changed", () => {
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            const placeId = places[0]?.place_id;

            if (places.length == 0) {
                return;
            }

            clearMarkers();

            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                const marker = new google.maps.Marker({
                    map: map,
                    title: place.name,
                    position: place.geometry.location,
                });

                markers.push(marker);

                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }

                if (placeId) {
                    const mapsLink = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
                    setData((prevData) => ({
                        ...prevData,
                        maps_link: mapsLink,
                    }));
                } else {
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode(
                        {
                            location: place.geometry.location,
                        },
                        function (results, status) {
                            if (status === "OK" && results[0]) {
                                const mapsLink = `https://www.google.com/maps/place/?q=${results[0].formatted_address}`;
                                setData((prevData) => ({
                                    ...prevData,
                                    maps_link: mapsLink,
                                }));
                            }
                        }
                    );
                }
            });
            map.fitBounds(bounds);
        });

        map.addListener("click", function (event) {
            const placeId = event.placeId;
            const clickedLocation = event.latLng;
            const lat = clickedLocation.lat();
            const lng = clickedLocation.lng();

            if (placeId) {
                const mapsLink = `https://www.google.com/maps/place/?q=place_id:${placeId}`;
                setData((prevData) => ({
                    ...prevData,
                    maps_link: mapsLink,
                }));
            } else {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode(
                    {
                        location: {
                            lat: lat,
                            lng: lng,
                        },
                    },
                    function (results, status) {
                        if (status === "OK" && results[0]) {
                            const placeName = results[0].formatted_address;
                            const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                placeName
                            )}`;
                            setData((prevData) => ({
                                ...prevData,
                                maps_link: mapsLink,
                            }));
                        }
                    }
                );
            }

            placeMarker(clickedLocation);
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

export default initGoogleMaps;
