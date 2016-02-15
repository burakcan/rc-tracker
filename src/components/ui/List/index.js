import React from 'react';
import Pane from 'components/ui/Pane';
import styles from './style';

function renderItems(props) {
  return props.data.map(item => <props.itemClass key={ item.key } { ...item } />);
}

export default function (props) {
  return (
    <Pane size="1" column className={ `${styles.Wrapper} ${props.className}` }>
      { renderItems(props) }
    </Pane>
  );
}
