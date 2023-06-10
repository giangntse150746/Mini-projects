var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var coord = document.querySelector('.coord');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +
    '&appid=9d7508262f769dce2551af0b1351326a')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var coordLongitudeValue = data['coord']['lon'];
  var coordLatitudeValue = data['coord']['lat'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - " + descValue;
  temp.innerHTML = "Temp - " + tempValue + ' F';
  coord.innerHTML = "Coord [ " + coordLongitudeValue + ' , ' + coordLatitudeValue + ' ]';
  //input.value ="";

})

.catch(err => alert("Wrong city name!"));
})