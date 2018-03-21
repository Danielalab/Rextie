import React from 'react';
import Header from './Header';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import MyAccounts from './MyAccounts'
import Footer from './Footer'

const Main = () => (
  <div className="p-0 heigth-min container-main">
    <Header/> 
    <MyAccounts/>
    {/* <Transaction/> */}
    {/* <UserInformation/> */}
    <Footer/>
  </div>
);

export default Main;