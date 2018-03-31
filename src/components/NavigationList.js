import React from 'react';
import Buy from './Buy';
import Sell from './Sell';

const NavigationList = ({ infoList, navigateTo, dataBuySell, operations, operationClick}) => {
  switch (infoList) {
    case 'buy':
      return <Buy navigateTo={navigateTo} dataBuySell={dataBuySell} operations={operations} operationClick={operationClick}/>;
    case 'sell':
      return <Sell navigateTo={navigateTo} dataBuySell={dataBuySell} operations={operations} operationClick={operationClick}/>;
    default:
      return null
  }
  return null;
};

export default NavigationList;