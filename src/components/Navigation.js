import React from 'react';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import MyAccounts from './MyAccounts'
import MyFavorites from './MyFavorites';
import ConfirmationTransaction from './confirmationTransaction';
import FinalTransaction from './finalTransaction'

const Navigation = ({ actualPage, infoList, navigationInfo, navigateTo }) => {
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
      return <ConfirmationTransaction navigateTo={navigateTo}/>;
    case 'confirmation' :
      return <ConfirmationTransaction navigateTo={navigateTo}/>
    case 'final-transaction' :
      return <FinalTransaction navigateTo={navigateTo}/>  
    default:
      return null
  }
  return null;
};

export default Navigation;