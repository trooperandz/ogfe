import axios from 'axios';

// const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=c6998a9dd63643ecbd2180838221912&q=Austin&aqi=no';
const baseUrl = 'https://api.weatherapi.com/v1/current.json';

export type WeatherData = {
  current: {
    temp_f: number;
  };
};

// Example axios fetch
export const fetchWeather = async (): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(`${baseUrl}`, {
      params: {
        key: 'c6998a9dd63643ecbd2180838221912',
        q: 'Austin',
        aqi: 'no',
      },
    });
    console.log({ response });
    return response.data;
  } catch (err) {
    console.warn(err);

    throw err;
  }
};
