import React from 'react';

function Button(props) {
  return <button type="button" onClick={props.func}>{props.text}</button>;
}

export default Button;
