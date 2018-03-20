import React from 'react';
import Header from './Header';
import Footer from './Footer'
const App = () => {

  return (
    <div className="container-fluid p-0">
      <div className="row"></div>
      <div className="col-md-3">
      </div>
      <div className="col-md-9 p-0">
        <Header/> 
        <Footer/>      
      </div>
    </div>
  )
}

export default App
