import React from 'react';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import MyAccounts from './MyAccounts'
import MyFavorites from './MyFavorites';
import ConfirmationTransaction from './confirmationTransaction'

const Navigation = ({ actualPage, navigateTo }) => {
  switch (actualPage) {
    case 'transaction':
      return <Transaction/>;
    case 'userInfo':
      return <UserInformation/>;
    case 'myAccounts':
      return <MyAccounts/>;
    case 'favorites':
      return <MyFavorites/>;
    case 'history':
      return <UserInformation/>;
    case 'rextieAccounts':
      return <ConfirmationTransaction />;
    case 'confirmation' :
      return <ConfirmationTransaction navigateTo={navigateTo}/>
    default:
      return null
  }
  return null;
};

export default Navigation;