import 'isomorphic-fetch';

const APIROOT = 'http://api.openweathermap.org/data/2.5';
const APIKEY = '3df518e5dbf85c99eadf5e87cfe65e5c';

export class WeatherService {
  getLocation() {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(resolve);
    });
  }

  fetch() {
    return this.getLocation()
    .then(location => {
      const { latitude, longitude } = location.coords;

      return Promise.all([
        fetch(
          `${APIROOT}/forecast?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=metric`
        ).then(result => result.json()),

        fetch(
          `${APIROOT}/weather?lat=${latitude}&lon=${longitude}&APPID=${APIKEY}&units=metric`
        ).then(result => result.json()),
      ]);
    })
    .then(result => {
      const [forecast, current] = result;
      const data = {};

      if (Number(forecast.cod) === 200) data.forecast = forecast;
      if (Number(current.cod) === 200) data.current = current;

      return data;
    });
  }
}

export default new WeatherService();
