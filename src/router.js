import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './component/App';
import SimpleGoldenAcornApp from './component/SimpleGoldenAcornApp';


const Home = () => (
  <div>
    <h1>Golden Acorn is life! </h1>
  </div>
);

const State = () => (
  <div>
    <h1>GoldenAcornApp with States</h1>
    <SimpleGoldenAcornApp />
  </div>
);

const Redux = () => (
  <div>
    <h1>GoldenAcornApp with Redux</h1>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

const GoldenAcorn = () => (
  <BrowserRouter>
    <div>
      <NavLink to="/simple/states">with states</NavLink>
      <NavLink to="/simple/redux">with Redux</NavLink>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/simple/states" component={State} />
      <Route path="/simple/redux" component={Redux} />
    </div>
  </BrowserRouter>
);

export default GoldenAcorn;
