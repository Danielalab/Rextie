import React from 'react';
import SideNav from './SideNav'
import Transaction from './Transaction';
import Main from './Main';

const DATA = [
  {id:'transaction', icon: 'lnr lnr-chevron-right container-icon', name: 'Comprar / Vender'},
  {id:'userInfo', icon: 'lnr lnr-user container-icon', name: 'Mis Datos'},
  {id:'myAccounts', icon: 'lnr lnr-license container-icon', name: 'Mis Cuentas'},
  {id:'favorites', icon: 'lnr lnr-star container-icon', name: 'Mis Favoritos'},
  {id:'history', icon: 'lnr lnr-chart-bars container-icon', name: 'Balance Historico'},
  {id:'rextieAccounts', icon: 'lnr lnr-license container-icon', name: 'Cuentas Rextie'}
];

const App = ({actualPage, navigateTo}) => {
  return (
    <div className="container-fluid p-0">
      <div className="row"></div>
      <div className="col-md-3 heigth">
        <SideNav data={DATA} navigateTo={navigateTo}/>
      </div>
      <div className="col-md-9 p-0">
        <Main actualPage={actualPage} navigateTo={navigateTo}/>
      </div>
    </div>
  )
}

export default App
