import React from 'react';
import axios from 'axios'


const URL = "https://api.openweathermap.org/data/2.5/weather" ; 
const API_Key = "423983c89e1a9ec406fa2510d0ad75b7"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL ,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    })
    return data;
}