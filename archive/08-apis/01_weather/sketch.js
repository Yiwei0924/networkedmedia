/*
from:
Lauren McCarthy
https://github.com/lmccart/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON

*/

function setup() {
  createCanvas(600, 400);
  noStroke();
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA', drawWeather); 
}

function drawWeather(weather) {

  // Get the loaded JSON data
  console.log(weather); // inspect the weather JSON
  var humidity = weather.main.humidity; // get the main.humidity out of the loaded JSON
  console.log(humidity); // inspect the humidity in the console

  background(40, 90, 200);
  fill(0, 255, 255, humidity); // use the humidity value to set the alpha
  for (var i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 30, 30);
  }
}
