import React from 'react';
import styles from './style';

export default function ({ activities }) {
  if (activities.length === 0) return <span />;

  return (
    <div className={ styles.Wrapper } />
  );
}
