import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style';

export default class Button extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.onClick) this.props.onClick(e);
  }

  render() {
    const { title, color, className, to } = this.props;
    const Class = to ? Link : 'button';

    return (
      <Class
        to={ to }
        onClick={ this.handleClick }
        className={ `${styles.Button} ${color} ${className}` }
      >
        { title }
      </Class>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
