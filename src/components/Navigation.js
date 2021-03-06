import React from 'react';
import Transaction from './Transaction';
import UserInformation from '../containers/UserInformation';
import MyAccounts from './MyAccounts'
import MyFavorites from './MyFavorites';
import Historical from './Historical';
import AccountsRextie from './AccountsRextie';
import ConfirmationTransaction from '../containers/formConfirmationTransaction';
import FinalTransaction from './finalTransaction';
import AddAccount from '../containers/formAddAccount';
import AddMyAccount from '../containers/formAddMyAccount';
import AddFavoriteAccount from '../containers/formAddMyFavorites'

const Navigation = ({ actualPage, infoList, infoHis, navigationHis, navigationInfo, navigateTo, operationsClick, dataClick, getValue, getValueDestination, getValueOrigen, dataDestination, dataSend, dataSend1}) => {
  switch (actualPage) {
    case 'transaction':
      return <Transaction infoList={infoList} navigationInfo={navigationInfo} navigateTo={navigateTo} operationsClick={operationsClick}/>;
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
      return <ConfirmationTransaction navigateTo={navigateTo} dataClick={dataClick} getValueOrigen={getValueOrigen} getValue={getValue} getValueDestination={getValueDestination}/>
    case 'final-transaction' :
      return <FinalTransaction navigateTo={navigateTo}  dataClick={dataClick} dataDestination={dataDestination} dataSend={dataSend} dataSend1={dataSend1}/>
    case 'addAccount' :
      return <AddAccount navigateTo={navigateTo}/>
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