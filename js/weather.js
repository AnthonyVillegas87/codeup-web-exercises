
$(document).ready(() => {
    "use strict";

    //start
    let day = document.getElementById('day');
    let week = document.getElementById('week');
    // let startCoordinates = {lat:29.4419,lon:-98.479};

    // Map Box
    mapboxgl.accessToken = MAPBOX_API_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.47987660309634, 29.441973866341172],
        zoom: 12

    });
    document.querySelector('#button').addEventListener('click', () => {
        let location = document.querySelector('#location').value;
        geocode(location, MAPBOX_API_TOKEN).then((result) => {
            marker.setLngLat(result);
            map.flyTo({
                center: result,
            })
            weather({lon: result[0], lat: result[1]})

        });
    });
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.47987660309634, 29.441973866341172])
        .addTo(map);

    geocode(marker, MAPBOX_API_TOKEN).then((result) => {
        marker.on('dragend', () => {
            marker.getLngLat(result)
            weather({lon: result[0], lat: result[1]})

        })
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
        let icon =  city.weather[0].icon;
        return `
                <div class="card bg-info text-white mb-3 ml-2 text-center">
                    <div class="card-body">
                        <h4 class="card-title">${currentDay}</h4>
                            <li class="card-text">${date.toLocaleString()}</li>                   
                            <li class="card-text">${city.weather[0].description}</li>
                            <li class="card-text">Temp: ${city.temp}&#176</li>
                            <li class="card-text">Feels like: ${city.feels_like}&#176</li>
                            <li class="card-text">Humidity: ${city.humidity}%</li>
                            <div class="weather-icon"><img src="icons/icons/${icon}.png" /></div>
                    </div>
               `
    }
    //for weekly weather
    function weeklyWeather(city) {
        let html = '';
        city.forEach((daily) => {
            let currentDay = new Date(daily.dt * 1000).toLocaleDateString('en', {weekday:'long'});
            let date = new Date(daily.dt * 1000);
            let icon =  daily.weather[0].icon;
            html +=
                `                                           
                        <div class="card bg-info text-white mb-3 ml-1 text-center">
                            <div class="card-body">
                                <h4 class="card-title">${currentDay}</h4>
                                <li class="card-text">${date.toLocaleString()}</li>
                                <li class="card-text">${daily.weather[0].description}</li>
                                <li class="card-text">High: ${daily.temp.day}&#176</li>
                                <li class="card-text">Low: ${daily.temp.eve}&#176</li>
                                <li class="card-text">Humidity: ${daily.humidity}%</li>
                                <div class="weather-icon"><img src="icons/icons/${icon}.png"></div>
                            </div>
                        </div>
                `
        })
         return  html
    }

});

