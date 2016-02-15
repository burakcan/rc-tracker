import React from 'react';

function getStyles(props) {
  const {
    width,
    height,
    fullScreen,
    size = '1',
    column,
  } = props;

  return {
    display: 'flex',
    position: fullScreen ? 'fixed' : 'relative',
    left: 0,
    top: 0,
    width: fullScreen ? '100vw' : (width || 'initial'),
    height: fullScreen ? '100vh' : (height || 'initial'),
    maxHeight: '100vh',
    flexGrow: width ? 0 : size,
    flexDirection: column ? 'column' : 'row',
  };
}

export default function (props) {
  return (
    <div className={ props.className } style={ getStyles(props) }>
      { props.children }
    </div>
  );
}
