import React from 'react';
import Buy from './Buy';
import Sell from './Sell';

const NavigationList = ({ infoList }) => {
  switch (infoList) {
    case 'buy':
      return <Buy/>;
    case 'sell':
      return <Sell/>;
    default:
      return null
  }
  return null;
};

export default NavigationList;