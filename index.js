const request = require('request');
const argv = require('yargs').argv;

let apiKey = '1dd3b3548fbbdb93ef6f8f4f242c7373';
let city = argv.c || 'Renton';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, (err,response, body) =>{
    if(err){
        console.log('error:', error);
    }
    else{
        let weather = JSON.parse(body)
        let message = `it's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message)
    }
});