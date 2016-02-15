import React, { PropTypes } from 'react';
import Weather from './Weather';
import styles from './style';

export default function Dashboard(props) {
  return (
    <div className={ styles.Wrapper }>
      <Weather { ...props.weather } className={ styles.Box } />
      <div className={ styles.Box } />
      <div className={ styles.Box } />
      <div className={ styles.Box } />
    </div>
  );
}

Dashboard.propTypes = {
  weather: PropTypes.object,
};
