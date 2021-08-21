
$(document).ready(() => {
    "use strict";
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

    let day = document.getElementById('day');
    let week = document.getElementById('week')


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
        return `
                <div class="card bg-info text-white mb-3 text-center">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <h4 class="card-title">${city.city}</h4>
                        <ul>
                            <li class="card-text">${city.dt}</li>
                            <li class="card-text">${city.weather[0].description}</li>
                            <li class="card-text">${city.temp}</li>
                            <li class="card-text">${city.feels_like}</li>
                            <li class="card-text">${city.humidity}</li>
                            <li class="card-text">${city.weather[0].icon}</li>
                        </ul>
                    </div>
               `
    }
//for weekly
    function weeklyWeather(city) {
        let html = '';
        city.forEach((daily) => {
            html +=  `<div class=" row-cols-5">
            <div class="card-deck ">
                <div class="card bg-info text-white mb-3 text-center">
                    <div class="card-header"></div>
                    <div class="card-body">
                        <h4 class="card-title">${daily.city}</h4>
                        <ul>
                            <li class="card-text">${daily.dt}</li>
                            <li class="card-text">${daily.weather[0].description}</li>
                            <li class="card-text">${daily.temp}</li>
                            <li class="card-text">${daily.feels_like}</li>
                            <li class="card-text">${daily.humidity}</li>
                            <li class="card-text">${daily.weather[0].icon}</li>
                        </ul>
                    </div>
                </div>`

        })
         return  html
    }

    // function simplifyDate(data) {
    //     let date = new Date(data.dt * 1000).toDateString();
    //     console.log(data)
    // }
    // simplifyDate()



//(`https://api.openweathermap.org/data/2.5/weather?APPID=${WEATHER_API_TOKEN}&q=${inputValue.value}`)













});