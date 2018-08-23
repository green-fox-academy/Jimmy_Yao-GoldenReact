import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppWithRedux from './component/AppWithRedux';
import SimpleGoldenAcornApp from './component/SimpleGoldenAcornApp';
import { App, Home } from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/simple/states" component={SimpleGoldenAcornApp} />
        <Route path="/simple/redux" component={AppWithRedux} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
