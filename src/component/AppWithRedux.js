import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';

const AppWithRedux = () => (
  <main>
    <h1>GoldenAcornApp with Redux</h1>
    <div>
      <BuyAcorn />
      <DisplayAcorn />
      <EatAcorn />
    </div>
  </main>
);

export default AppWithRedux;
