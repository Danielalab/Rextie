import React from 'react';
import Header from './Header';
import Footer from './Footer'
import SideNav from './SideNav'

const DATA = [
  {icon: 'lnr lnr-chevron-right container-icon', name: 'Comprar / Vender'},
  {icon: 'lnr lnr-user container-icon', name: 'Mis Datos'},
  {icon: 'lnr lnr-license container-icon', name: 'Mis Cuentas'},
  {icon: 'lnr lnr-star container-icon', name: 'Mis Favoritos'},
  {icon: 'lnr lnr-chart-bars container-icon', name: 'Balance Historico'},
  {icon: 'lnr lnr-license container-icon', name: 'Cuentas Rextie'}
];

const App = () => {

  return (
    <div className="container-fluid p-0">
      <div className="row"></div>
      <div className="col-md-3">
        <SideNav data={DATA}/>
      </div>
      <div className="col-md-9 p-0">
        <Header/> 
        <Footer/>      
      </div>
    </div>
  )
}

export default App
