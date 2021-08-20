$(document).ready(() => {
    "use strict";

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_API_TOKEN,
        lat: 29.4252,
        lon: -98.4916,
        exclude: 'minutely,hourly,alerts',
        units: 'imperial',
        language: 'en'
    }).done((data) => {
        console.log(data);
    }).fail((error) => {
        console.log(error);
    });

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.47987660309634, 29.441973866341172],
        zoom: 15
    });


});