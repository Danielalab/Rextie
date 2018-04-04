import React from 'react';
import Buy from './Buy';
import Sell from './Sell';

const NavigationList = ({ infoList, navigateTo, dataBuySell, operations, operationsReverse, operationsClick}) => {
  switch (infoList) {
    case 'buy':
      return <Buy navigateTo={navigateTo} dataBuySell={dataBuySell} operations={operations} operationsClick={operationsClick} operationsReverse={operationsReverse}/>;
    case 'sell':
      return <Sell navigateTo={navigateTo} dataBuySell={dataBuySell} operations={operations} operationsClick={operationsClick} operationsReverse={operationsReverse}/>;
    default:
      return null
  }
  return null;
};

export default NavigationList;