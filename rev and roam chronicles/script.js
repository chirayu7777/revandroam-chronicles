// Example Weather Update
function getWeather(city) {
    const apiKey = "YOUR_WEATHER_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`Weather in ${city}: ${data.weather[0].description}`);
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Chatbot Integration
function openChatbot() {
    alert("Chatbot coming soon!");
}

