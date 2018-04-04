import React from 'react';
import NavigationList from '../containers/NavigationList'

const LISTS = [
  {id:'buy', class:'nav-link border-tab text-uppercase font-weight-bold active', name: 'Soles'},
  {id:'sell', class:'nav-link border-tab text-uppercase font-weight-bold', name: 'Dolares'}
]

const Transaction = ({infoList, navigationInfo, navigateTo, operationsClick}) => (
  <div className="p-5 height">
    <h1 className="title-cuenta-rextie d-flex justify-content-center">¿Qué quieres cambiar?</h1>
    <ul className="nav md-pills nav-justified ">
    { LISTS.map(list =>  
      <li className="nav-item" key = {list.id} onClick={() => navigationInfo(list.id)}>
        <a className={list.class} data-toggle="tab" href="#" role="tab">{list.name}</a>
      </li>)}
    </ul>
    <div className="tab-content transaction">
      <NavigationList infoList={infoList} navigateTo={navigateTo} operationsClick={operationsClick}/>
    </div>
  </div>
);

export default Transaction;