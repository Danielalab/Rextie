import React from 'react';
import Header from './Header';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import MyAccounts from './MyAccounts'
import MyFavorites from './MyFavorites'
import Footer from './Footer'

const Main = () => (
  <div className="p-0 heigth-min container-main">
    <Header/> 
    <MyFavorites/>
    {/* <Transaction/> */}
    {/* <UserInformation/> */}
    <Footer/>
  </div>
);

export default Main;