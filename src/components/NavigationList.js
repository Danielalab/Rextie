import React from 'react';
import Buy from '../containers/Buy';
import Sell from '../containers/Sell';

const NavigationList = ({ infoList, navigateTo}) => {
  switch (infoList) {
    case 'buy':
      return <Buy navigateTo={navigateTo}/>;
    case 'sell':
      return <Sell navigateTo={navigateTo}/>;
    default:
      return null
  }
  return null;
};

export default NavigationList;