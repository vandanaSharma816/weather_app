import './App.css';
import { Navbar } from './components/Navbar';
import { Card } from './components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function App() {

   const [city, setCity] = useState("Delhi");

  const [weather, setWeather] = useState({
    cloud_pct: 24,
    temp: 39,
    feels_like: 37,
    humidity: 13,
    min_temp: 39,
    max_temp: 39,
    wind_speed: 3.09,
    wind_degrees: 280,
    sunrise: 1715644852,
    sunset: 1715693654,
  });

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: { city: city },
      headers: {
        'X-RapidAPI-Key': '79ae641156msha263db6ffee6e3ep195297jsn33ec6df2e5c9',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
      },
    };

    async function getWeather() {
      try {
        const response = await axios.request(options);
      //   console.log(response.data);
        setWeather(response.data);
      } catch (error) {
            alert("enter correct city name or we dont have info about this city");
               console.error(error);
      }
    }

    getWeather();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div>
      <Navbar city={city} setCity={setCity} ></Navbar>
      <Card weather_obj={weather} city_name={city}></Card>
    </div>
  );
}
