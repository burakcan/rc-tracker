import React, { PropTypes } from 'react';
import 'weather-icons/sass/weather-icons';
import styles from './style';

function renderCurrent(current) {
  return (
    <div className="Current">
      <div className="InnerWrapper">
        <div className="city">{ current.name }</div>
        <i className={ `icon wi wi-owm-${current.weather[0].id}` } />
        <div className="temp">
          { parseInt(current.main.temp, 10) }°
        </div>
      </div>
    </div>
  );
}

function renderCurrentDetails(current) {
  return (
    <div className="Current CurrentDetails">
      <div className="InnerWrapper">
        <div className="Line">
          <strong>Max:</strong> { parseInt(current.main.temp_max, 10) }°
        </div>
        <div className="Line">
          <strong>Min:</strong> { parseInt(current.main.temp_min, 10) }°
        </div>
        <div className="Line">
          <strong>Wind Speed:</strong> { current.wind.speed }km/h
        </div>
        <div className="Line">
          <strong>Wind Degree:</strong> { current.wind.deg }°
        </div>
      </div>
    </div>
  );
}

function renderForecast() {
  return (
    <div className="Forecast">
      <div className="Forecast-Item" />
      <div className="Forecast-Item" />
      <div className="Forecast-Item" />
      <div className="Forecast-Item" />
      <div className="Forecast-Item" />
    </div>
  );
}

export default function Weather(props) {
  const { current, forecast } = props;

  return (
    <div className={ `${styles.Weather} ${props.className}` }>
      { current && renderCurrent(current) }
      { current && renderCurrentDetails(current) }
      { forecast && renderForecast(forecast) }
    </div>
  );
}

Weather.propTypes = {
  current: PropTypes.object,
  forecast: PropTypes.object,
  _initial: PropTypes.bool,
};
