var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var tempMin = document.querySelector('.tempMin')
var tempMax = document.querySelector('.tempMax')


button.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      var tempMinValue = data['main']['temp_min']
      var tempMaxValue = data['main']['temp_max']

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc : " + descValue;
      temp.innerHTML = "Temp : " + tempValue;
      tempMin.innerHTML = "Minimum Temperature : " + tempMinValue
      tempMax.innerHTML = "Maximum Temperature : " + tempMaxValue

      input.value = "";

    })

    .catch(err => alert("Wrong city name!"));
})