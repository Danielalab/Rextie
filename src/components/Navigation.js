import React from 'react';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import MyAccounts from './MyAccounts'
import MyFavorites from './MyFavorites';
import Historical from './Historical';
import AccountsRextie from './AccountsRextie';
import ConfirmationTransaction from './confirmationTransaction';
import FinalTransaction from './finalTransaction';
import AddMyAccount from './AddMyAccount';
import AddFavoriteAccount from './AddFavoriteAccount'

const Navigation = ({ actualPage, infoList, infoHis, navigationHis, navigationInfo, navigateTo}) => {
  switch (actualPage) {
    case 'transaction':
      return <Transaction infoList={infoList} navigationInfo={navigationInfo} navigateTo={navigateTo}/>;
    case 'userInfo':
      return <UserInformation/>;
    case 'myAccounts':
      return <MyAccounts navigateTo={navigateTo}/>;
    case 'favorites':
      return <MyFavorites navigateTo={navigateTo}/>;
    case 'history':
      return <Historical infoHis={infoHis} navigationHis={navigationHis} navigateTo={navigateTo}/>;
    case 'rextieAccounts':
      return <AccountsRextie navigateTo={navigateTo}/>;
    case 'confirmation' :
      return <ConfirmationTransaction navigateTo={navigateTo}/>
    case 'final-transaction' :
      return <FinalTransaction navigateTo={navigateTo}/>
    case 'addMyAccount':
      return <AddMyAccount navigateTo={navigateTo}/>  
    case 'addFavoriteAccount':
      return <AddFavoriteAccount navigateTo={navigateTo}/>  
    default:
      return null
  }
  return null;
};

export default Navigation;