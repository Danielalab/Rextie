import React from 'react';
import Buy from './Buy';
import Sell from './Sell';

const NavigationList = ({ infoList, navigateTo, dataBuySell, operations, operationsClick}) => {
  switch (infoList) {
    case 'buy':
      return <Buy navigateTo={navigateTo} dataBuySell={dataBuySell} operations={operations} operationsClick={operationsClick}/>;
    case 'sell':
      return <Sell navigateTo={navigateTo} dataBuySell={dataBuySell} operations={operations} operationsClick={operationsClick}/>;
    default:
      return null
  }
  return null;
};

export default NavigationList;