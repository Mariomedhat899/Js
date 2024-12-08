const apiKey = '731775d3df8849938a4213111240712';
const city = 'London';
const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

function defalut(){

}

function fetchWeather() {
    const apiKey = '731775d3df8849938a4213111240712'; 
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); 
  
        
        const cityName = data.location.name;
        console.log(`City Name: ${cityName}`); 
        document.getElementById('city-name').textContent = cityName; 
  
        const today = data.forecast.forecastday[0];
        const tomorrow = data.forecast.forecastday[1];
        const day3 = data.forecast.forecastday[2];
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const todayDate = new Date(today.date);
        const tomorrowDate = new Date(tomorrow.date);
        const day3Date = new Date(day3.date);
  
        const todayName = days[todayDate.getDay()];
        const tomorrowName = days[tomorrowDate.getDay()];
        const day3Name = days[day3Date.getDay()];
  
        
        document.getElementById('today-date').textContent = `${today.date}`;
        document.getElementById('today-name').textContent = `${todayName}`;
        document.getElementById('today-forecast').innerHTML = `Temperature: ${today.day.avgtemp_c}°C<br>Condition: ${today.day.condition.text}`;
        
       
        document.getElementById('tomorrow-date').textContent = `${tomorrow.date}`;
        document.getElementById('tomorrow-name').textContent = `${tomorrowName}`;
        document.getElementById('tomorrow-forecast').innerHTML = `Temperature: ${tomorrow.day.avgtemp_c}°C<br>Condition: ${tomorrow.day.condition.text}`;
        
       
        document.getElementById('day3-date').textContent = `${day3.date}`;
        document.getElementById('day3-name').textContent = `${day3Name}`;
        document.getElementById('day3-forecast').innerHTML = `Temperature: ${day3.day.avgtemp_c}°C<br>Condition: ${day3.day.condition.text}`;
      })
      .catch(error => console.error('Error:', error));
  }
  
 
  

  document.getElementById('search').addEventListener('input', function() {
    const city = document.getElementById('search').value;
    fetchWeather(city);
  });
  


document.getElementById('search').addEventListener('input', function() {
    const apiKey = '731775d3df8849938a4213111240712'; 
    const city = document.getElementById('search').value;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const today = data.forecast.forecastday[0];
        const tomorrow = data.forecast.forecastday[1];
        const day3 = data.forecast.forecastday[2];
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const todayDate = new Date(today.date);
        const tomorrowDate = new Date(tomorrow.date);
        const day3Date = new Date(day3.date);
        const cityName = data.location.name;
  
        const todayName = days[todayDate.getDay()];
        const tomorrowName = days[tomorrowDate.getDay()];
        const day3Name = days[day3Date.getDay()];

  

        document.getElementById('today-name').textContent = `${todayName}`;
        document.getElementById('today-date').textContent = `${today.date}`
        document.getElementById('today-forecast').innerHTML = `<h1>${cityName}</h1> Temperature: ${today.day.avgtemp_c}°C<br>Condition: ${today.day.condition.text}`;
        
        document.getElementById('tomorrow-date').textContent = `${tomorrow.date}`;
        document.getElementById('tomorrow-name').textContent = `${tomorrowName}`;
        document.getElementById('tomorrow-forecast').innerHTML = `<h1>${cityName}</h1> Temperature: ${tomorrow.day.avgtemp_c}°C<br>Condition: ${tomorrow.day.condition.text}`;
        
        document.getElementById('day3-date').textContent = `${day3.date}`;
        document.getElementById('day3-name').textContent = `${day3Name}`;
        document.getElementById('day3-forecast').innerHTML = `<h1>${cityName}</h1> Temperature: ${day3.day.avgtemp_c}°C<br>Condition: ${day3.day.condition.text}`;
      })
      .catch(error => console.error('Error:', error));
  });
