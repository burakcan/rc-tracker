import React from 'react';
import styles from './style';

export default function ButtonBar(props) {
  return (
    <div className={ styles.Wrapper }>
      { props.children }
    </div>
  );
}
