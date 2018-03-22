import React from 'react';
import Header from './Header';
import Navigation from './Navigation'
import Footer from './Footer'

const Main = ({ actualPage, navigateTo }) => (
  <div className="p-0 heigth-min container-main">
    <Header/> 
    <Navigation actualPage={ actualPage } navigateTo={navigateTo}/>
    <Footer/>
  </div>
);

export default Main;