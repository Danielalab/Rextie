import React from 'react';
import NavigationList from '../containers/NavigationList'

const LISTS = [
  {id:'buy', class:'nav-link border-tab text-uppercase font-weight-bold active', name: 'Comprar'},
  {id:'sell', class:'nav-link border-tab text-uppercase font-weight-bold', name: 'Vender'}
]

const Transaction = ({infoList, navigationInfo, navigateTo}) => (
  <div className="p-5">
    <ul className="nav md-pills nav-justified ">
    { LISTS.map(list =>  
      <li className="nav-item" key = {list.id} onClick={() => navigationInfo(list.id)}>
        <a className={list.class} data-toggle="tab" href="#" role="tab">{list.name}</a>
      </li>)}
    </ul>
    <div className="tab-content">
      <NavigationList infoList={infoList} navigateTo={navigateTo}/>
    </div>
  </div>
);

export default Transaction;