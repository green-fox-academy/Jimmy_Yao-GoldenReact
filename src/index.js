import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppWithRedux from './component/AppWithRedux';
import SimpleGoldenAcornApp from './component/SimpleGoldenAcornApp';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <hr />
        <Route exact path="/" component={() => (<h1> Golden Acorn is life! 🌰</h1>)} />
        <Route exact path="/simple/states" component={SimpleGoldenAcornApp} />
        <Route path="/simple/redux" component={AppWithRedux} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
