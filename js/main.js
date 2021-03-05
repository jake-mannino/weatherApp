let city = document.getElementById("city");
let tempK = document.getElementById("tempK");
let tempF = document.getElementById("tempF");
let tempC = document.getElementById("tempC");
let zipcode = document.getElementById('zipCode');
let conditions = document.getElementById('conditions')
let getWeather = document.getElementById('getWeather');

let error = null;
getWeather.addEventListener('click', function weather() {
    let apiKey = '1b864a2393b9a3bf09d1ed2a4989c606';
    let zip = zipcode.value.toString();
    if (zip.length != 5) {
        return alert('Invalid Data')
    }
    else {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
        fetch(apiUrl, {})

            .then(response => response.json())


            .then(function(data){
                let cityName = data['name'];
                city.innerHTML = cityName;
                let kelvin = data['main']['temp'];
            tempK.innerHTML = Math.round(kelvin) + ' K';
            let farehnheit = (kelvin -273) * 9 / 5 + 32;
            tempF.innerHTML = Math.round(farehnheit) +' F';
            let celcius = (farehnheit -32) * 5 / 9;
            tempC.innerHTML = Math.round(celcius) + ' C';
            // let 
            // conditions.innerHTML = ;
            })
            // 
            // var city =
            // var kelvin= data.main.temp;
            //     tempK.innerHTML(kelvin);
            // var farhenh
            // var conditon
            .catch((error) => {
                error = errorMsg;
                console.error('Error:', errorMsg);
            });
    }
    
})


// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });