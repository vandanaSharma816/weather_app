import React, { useState } from "react";

export function Card({weather_obj,city_name}) {

    // Function to convert UNIX timestamp to human-readable time
    const convertUnixToTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        return date.toLocaleTimeString();
    };



    return (
        <div className="h-96 bg-blue-500 mt-8 flex justify-center items-center">
            <div className="bg-purple-600 rounded-lg shadow-lg p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="font-bold text-xl mb-4 text-white">Weather Details: {city_name}</div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p><span className="font-semibold text-white">Cloud Percentage:</span>{weather_obj.cloud_pct}</p>
                        <p><span className="font-semibold text-white">Temperature:</span>{weather_obj.temp}</p>
                        <p><span className="font-semibold text-white">Feels Like:</span> {weather_obj.feels_like} </p>
                        <p><span className="font-semibold text-white">Humidity:</span> {weather_obj.humidity} </p>
                        <p><span className="font-semibold text-white">Min Temperature:</span> {weather_obj.min_temp} </p>
                        <p><span className="font-semibold text-white">Max Temperature:</span> {weather_obj.max_temp} </p>
                    </div>
                    <div>
                        <p><span className="font-semibold text-white">Wind Speed:</span> {weather_obj.wind_speed} </p>
                        <p><span className="font-semibold text-white">Wind Degrees:</span>{weather_obj.wind_degrees} </p>
                        <p><span className="font-semibold text-white">Sunrise:</span> {convertUnixToTime(weather_obj.sunrise)}</p>
                        <p><span className="font-semibold text-white">Sunset:</span> {convertUnixToTime(weather_obj.sunset)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

