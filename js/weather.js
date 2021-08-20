$(document).ready(() => {
    "use strict";

    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_API_TOKEN,
        lat: 29.44,
        lon: -98.5,
        exclude: 'minutely,hourly,alerts',
        units: 'imperial',
        language: 'en'
    }).done((data) => {
        weather(data);

    }).fail((error) => {
        console.log(error);
    });

    //let date = new Date(data.daily.dt * 1000).toDateString();



    function weather(data) {
        //let arr = Object.values(data.daily)
        console.log(data)
        $('#search').on('click', () => {
            Object.data.forEach((data) => {
                 $('li').append(`<div><ul><li>${data.dt}</li><li>${data.temp}</li><li>${data.feels_like}</li><li>${data.weather.main}</li><li>${data.weather.icon}</li></ul></div>`)
            });
        });

    }




    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.47987660309634, 29.441973866341172],
        zoom: 6
    });



});