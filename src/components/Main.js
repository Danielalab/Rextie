import React from 'react';
import Transaction from './Transaction';
import UserInformation from './UserInformation';
import Footer from './Footer'

const Main = () => (
  <div className="p-3 heigth-min container-main">
    {/* <Transaction/> */}
    <UserInformation/>
    <Footer/>
  </div>
);

export default Main;