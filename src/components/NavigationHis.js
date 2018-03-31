import React from 'react';
import HistoricalUSD  from './HisUSD';
import HistoricalPEN  from './HisPEN';

const NavigationHis = ({ infoHis, navigateTo}) => {
  switch (infoHis) {
    case 'hisUSD':
      return <HistoricalUSD navigateTo={navigateTo}/>;
    case 'hisPEN':
      return <HistoricalPEN navigateTo={navigateTo}/>;
    default:
      return null
  }
  return null;
};

export default NavigationHis;