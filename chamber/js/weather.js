
document.addEventListener('DOMContentLoaded', function() {
    // Weather API configuration - Using OpenWeatherMap
    const API_KEY = 'demo-key'; // In a real application, this would be your API key
    // Lakeside, CA coordinates
    const LAT = 32.8573;
    const LON = -116.9222;
    
    // Elements
    const weatherIcon = document.getElementById('weather-icon');
    const currentTemp = document.getElementById('current-temp');
    const weatherDesc = document.getElementById('weather-desc');
    const forecastContainer = document.getElementById('forecast');
    
    // Check if we're on a page with weather elements
    if (!weatherIcon || !currentTemp || !weatherDesc || !forecastContainer) return;
    
    // Demo weather data for educational purposes (this would normally come from the API)
    const demoWeatherData = {
      current: {
        temp: 72,
        weather: [{ description: 'sunny', icon: '01d' }]
      },
      daily: [
        { temp: { day: 75 }, dt: Date.now() / 1000 + 86400 },
        { temp: { day: 78 }, dt: Date.now() / 1000 + 172800 },
        { temp: { day: 73 }, dt: Date.now() / 1000 + 259200 }
      ]
    };
    
    // Function to convert timestamp to day name
    function getDayName(timestamp) {
      return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    }
    
    // In a real application, this function would fetch from the OpenWeatherMap API
    async function fetchWeatherData() {
      try {
        // In a real application, this would be:
        // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=${LON}&exclude=minutely,hourly&units=imperial&appid=${API_KEY}`;
        // const response = await fetch(url);
        // const data = await response.json();
        
        // For demo purposes, use our demo data:
        const data = demoWeatherData;
        
        // Display current weather
        currentTemp.textContent = Math.round(data.current.temp);
        weatherDesc.textContent = data.current.weather[0].description;
        weatherIcon.src = `./images/weather-icons/${data.current.weather[0].icon}.png`;
        weatherIcon.alt = data.current.weather[0].description;
        
        // Display forecast
        let forecastHTML = '';
        for (let i = 0; i < 3; i++) {
          const day = data.daily[i];
          forecastHTML += `
            <div class="forecast-day">
              <span class="day">${getDayName(day.dt)}</span>
              <span class="temp">${Math.round(day.temp.day)}°</span>
            </div>
          `;
        }
        forecastContainer.innerHTML = forecastHTML;
        
      } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherDesc.textContent = 'Weather data unavailable';
      }
    }
    
    // Get weather data
    fetchWeatherData();
  });