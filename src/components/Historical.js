import React from 'react';
import NavigationHis from './NavigationHis'

const HISTORICAL = [
  {id:'hisUSD', class:'nav-link border-tab text-uppercase font-weight-bold active', name: 'Dólares'},
  {id:'hisPEN', class:'nav-link border-tab text-uppercase font-weight-bold', name: 'Soles'}
]

const Historical = ({infoHis, navigationHis, navigateTo}) => (
  <div className="p-5 height">
    <ul className="nav md-pills nav-justified ">
    { HISTORICAL.map(list =>  
      <li className="nav-item" key = {list.id} onClick={() => navigationHis(list.id)}>
        <a className={list.class} data-toggle="tab" href="#" role="tab">{list.name}</a>
      </li>)}
    </ul>
    <div className="tab-content">
      <NavigationHis infoHis={infoHis} navigateTo={navigateTo}/>
    </div>
  </div>
);

export default Historical;