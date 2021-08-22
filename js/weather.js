
$(document).ready(() => {
    "use strict";


    let day = document.getElementById('day');
    let week = document.getElementById('week')

    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.47987660309634, 29.441973866341172],
        zoom: 6

    });
    const marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([-98.47987660309634, 29.441973866341172])
        //.setPopup(memorialPopup)
        .addTo(map);
    marker.on('dragend', () => {
        document.querySelector('#coordinates').innerHTML = marker.getLngLat()
    })


    //start
    let startCoordinates = {lat:29.4419,lon:-98.479}
     weather(startCoordinates);

    document.getElementById('button').addEventListener('click', function() {



        weather(startCoordinates);
    })

// for data retrieval
    function weather(obj) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&exclude=minutely&units=imperial&appid=${WEATHER_API_TOKEN}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                day.innerHTML = currentWeather(data.current)
                week.innerHTML = weeklyWeather(data.daily)
            })


    }

    // for current weather
    function currentWeather(city) {
        let currentDay = new Date(city.dt * 1000).toLocaleDateString('en', {weekday:'long'});
        let date = new Date(city.dt * 1000);
        let iconCode = "https://openweathermap.org/img/w/" + city.weather[0].icon + ".png";

        return `
                <div class="card bg-info text-white mb-3 text-center">
                    <div class="card-body">
                        <h4 class="card-title">${currentDay}</h4>
                            <li class="card-text">${date.toLocaleString()}</li>                   
                            <li class="card-text">${city.weather[0].description}</li>
                            <li class="card-text">${city.temp}&#176</li>
                            <li class="card-text">${city.feels_like}</li>
                            <li class="card-text">${city.humidity}%</li>
<!--                            <img src="">${iconCode}</li>                    -->
                    </div>
               `
    }
    //for weekly
    function weeklyWeather(city) {
        let html = '';

        city.forEach((daily) => {
            let currentDay = new Date(daily.dt * 1000).toLocaleDateString('en', {weekday:'long'});
            let date = new Date(daily.dt * 1000);
            html +=  `<div class=" row-cols-5">
            <div class="card-deck ">
                <div class="card bg-info text-white mb-3 text-center">
                    <div class="card-body">
                        <h4 class="card-title">${currentDay}</h4> 
                            <li class="card-text">${date.toLocaleString()}</li>
                            <li class="card-text">${daily.weather[0].description}</li>
                            <li class="card-text">${daily.temp}&#176</li>
                            <li class="card-text">${daily.feels_like}</li>
                            <li class="card-text">${daily.humidity}%</li>
                            <li class="card-text">${daily.weather[0].icon}</li>
                    </div>
                </div>`

        })
         return  html
    }
// Geocode function
    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function(data) {
                return data.features[0].center;
            });
    }




//(`https://api.openweathermap.org/data/2.5/weather?APPID=${WEATHER_API_TOKEN}&q=${inputValue.value}`)













});