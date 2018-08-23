import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';

const AppWithRedux = () => (
  <main>
    <div>
      <BuyAcorn />
      <DisplayAcorn />
      <EatAcorn />
    </div>
  </main>
);

export default AppWithRedux;
