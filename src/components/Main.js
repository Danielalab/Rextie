import React from 'react';
import Header from './Header';
import Navigation from './Navigation'
import Footer from './Footer'

const Main = ({ actualPage, infoList, infoHis, navigationHis, navigationInfo, navigateTo }) => (
  <div className="p-0 heigth-min container-main">
    <Header/> 
    <Navigation actualPage={ actualPage } infoHis={infoHis} navigationHis={navigationHis} infoList={infoList} navigationInfo={navigationInfo} navigateTo={navigateTo}/>
    <Footer/>
  </div>
);

export default Main;