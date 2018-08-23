import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { text } = props;
  return <div>{text}</div>;
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
