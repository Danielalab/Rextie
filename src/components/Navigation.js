import React from 'react';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import MyAccounts from './MyAccounts'
import MyFavorites from './MyFavorites';

const Navigation = ({ actualPage, infoList, navigationInfo  }) => {
  switch (actualPage) {
    case 'transaction':
      return <Transaction infoList={infoList} navigationInfo={navigationInfo}/>;
    case 'userInfo':
      return <UserInformation/>;
    case 'myAccounts':
      return <MyAccounts/>;
    case 'favorites':
      return <MyFavorites/>;
    case 'history':
      return <UserInformation/>;
    case 'rextieAccounts':
      return <UserInformation/>;
    default:
      return null
  }
  return null;
};

export default Navigation;