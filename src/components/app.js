import React from 'react';
import SideNav from './SideNav'
import Main from './Main';

const DATA = [
  {id:'transaction', icon: 'lnr lnr-chevron-right container-icon', name: 'Comprar / Vender'},
  {id:'userInfo', icon: 'lnr lnr-user container-icon', name: 'Mis Datos'},
  {id:'myAccounts', icon: 'lnr lnr-license container-icon', name: 'Mis Cuentas'},
  {id:'favorites', icon: 'lnr lnr-star container-icon', name: 'Mis Favoritos'},
  {id:'history', icon: 'lnr lnr-chart-bars container-icon', name: 'Balance Historico'},
  {id:'rextieAccounts', icon: 'lnr lnr-license container-icon', name: 'Cuentas Rextie'},
  {id:'buy', comprar: 'Comprando', gastar: 'gastar'},
  {id:'sell', vender: 'Vendiendo', recibir: 'recibir'}
];

const App = ({actualPage, navigateTo, infoHis, navigationHis, infoList, navigationInfo}) => {
  return (
    <div className="container-fluid p-0">
      <div className="row"></div>
      <div className="col-md-3 heigth">
        <SideNav data={DATA} navigateTo={navigateTo}/>
      </div>
      <div className="col-md-9 p-0">
        <Main data={DATA} actualPage={actualPage} infoHis={infoHis} navigationHis={navigationHis} infoList={infoList} navigationInfo={navigationInfo} navigateTo={navigateTo}/>
      </div>
    </div>
  )
}

export default App
