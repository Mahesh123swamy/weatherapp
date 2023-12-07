import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'post your api key';

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError('City not found. Please try again.');
    }
  };

  return (
    <div className='container'>
        <div className='main'>
      <h1 className='heading'>Weather App</h1>
      <input className='input'
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
    </div>
    </div>
  );
};

export default WeatherApp;
