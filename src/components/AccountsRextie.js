import React from 'react';
import ListAccounRextie from './ListAccounRextie'

const ACCOUNTS_REXTIE = [
  {id:'CCI', bank:'CCI Interbank (para transferencias interbancarias)', rows: [{typeAccount: 'Corriente', coin: 'Dólares', numAccount: '00316600300127343563'}, {typeAccount: 'Corriente', coin: 'Soles', numAccount: '00316600300127342868'}]},
  {id:'BCP', bank:'BCP', rows: [{typeAccount: 'Corriente', coin: 'Dólares', numAccount: '1931700523109'}, {typeAccount: 'Corriente', coin: 'Soles', numAccount: '1932357833093'}]},
  {id:'INTERBANK', bank:'Interbank', rows: [{typeAccount: 'Corriente', coin: 'Dólares', numAccount: '1663001273435'}, {typeAccount: 'Corriente', coin: 'Soles', numAccount: '1663001273428'}]}
]

const AccountsRextie = ({navigateTo}) => (
  <div className="container-fluid">
    <ul className="nav md-pills nav-justified padding">
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold active text-left border-botton"  href="#">Cuentas Rextie</a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="card">
      {ACCOUNTS_REXTIE.map(accounts => <ListAccounRextie {...accounts} key={accounts.id}/>)}
      </div>
    </div>
  </div>
);

export default AccountsRextie;