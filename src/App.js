import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export function App(props) {
  const { children } = props;
  return (
    <div>
      <NavLink to="/simple/states">with states</NavLink>
      <NavLink to="/simple/redux">with Redux</NavLink>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Home() {
  return (
    <h1>
      Golden Acorn is life!
      <span role="img" aria-label="Chestnut">🌰</span>
    </h1>
  );
}
