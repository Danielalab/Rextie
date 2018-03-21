import React from 'react';
import Header from './Header';
import Footer from './Footer'
import Transaction from './Transaction';
import Main from './Main';
const App = () => {

  return (
    <div className="container-fluid p-0">
      <div className="row"></div>
      <div className="col-md-3">
      </div>
      <div className="col-md-9 p-0">
        <Header/> 
        <Main/>
        <Footer/>      
      </div>
    </div>
  )
}

export default App
