import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './style';

function renderTree(items) {
  if (!items || items.length === 0) return null;

  return items.map(item => {
    const Class = item.isIndex ? IndexLink : Link;
    return (
      <Class
        key={ item.title }
        to={ item.to }
        className={ styles.Item }
        activeClassName="active"
      >
        {
          item.icon ?
          (<i className={ `Icon icon-${item.icon}` } />) :
          null
        }
        <span className="Title">
          { item.title }
        </span>
      </Class>
    );
  });
}

export default function Sidebar(props) {
  return (
    <div className={ `${styles.Wrapper} ${(props.secondary ? 'secondary' : '')}` }>
      <nav className={ styles.Nav }>
        { renderTree(props.items) }
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  secondary: PropTypes.bool,
  items: PropTypes.array,
};
