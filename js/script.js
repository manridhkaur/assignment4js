
document.addEventListener('DOMContentLoaded', function () {
    // Your student info
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Manridh Kaur-200538493';

    // OpenWeatherMap API Key and Endpoint
    const apiKey = '3fde8655b3bbff4374645dc7e3575b98'; 
    const endpoint = 'https://api.openweathermap.org/data/2.5/weather';

    // Example: Fetch weather data for a specific city (e.g., London)
    const city = 'London';
    const apiUrl = `${endpoint}?q=${city}&appid=${apiKey}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => {
            // Check if the network response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Convert the response to JSON format
        })
        .then(data => {
            // Check if weather data is available
            if (data.weather && data.weather.length > 0) {
                // Extract the icon code
                const iconCode = data.weather[0].icon;

                // Display weather information
                const weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <img src="https://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon">
                `;
            } else {
                console.error('Weather data not available.');
            }
        })
        .catch(error => {
            // Log any errors that occurred during the fetch
            console.error('Error fetching data:', error);
        });
});
