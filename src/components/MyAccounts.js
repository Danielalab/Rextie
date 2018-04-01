import React from 'react';
import ListMyAccount from './ListMyAccount'

const MY_ACCOUNTS = [
  {id:'1', bank:'BCP', typeAccount: 'Cuenta de ahorros', numAccount: '1586534215643278'},
  {id:'2', bank:'BBVA', typeAccount: 'Cuenta corriente', numAccount: '1586534215643278'},
  {id:'3', bank:'INTERBANK', typeAccount: 'Cuenta corriente', numAccount: '1586534215643278'},
  {id:'4', bank:'SCOTIABANK', typeAccount: 'Cuenta de ahorros', numAccount: '1586534215643278'},
  {id:'5', bank:'CITYBANK', typeAccount: 'Cuenta corriente', numAccount: '1586534215643278'},
  {id:'6', bank:'BNP', typeAccount: 'Cuenta de ahorros', numAccount: '1586534215643278'}
]

const MyAccounts = ({navigateTo}) => (
  <div className="container-fluid height">
    <ul className="nav md-pills nav-justified padding">
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold active text-left border-botton"  href="#">Mis cuentas</a>
      </li>
      <li className="nav-item d-flex justify-content-end">
        <button type="button" className="btn btn-info align-self-center" onClick={()=> navigateTo('addMyAccount')}>
          Agregar
        </button>
      </li>
    </ul>
    <div className="tab-content">
      <div className="card">
        <div className="card-body">
          <table className="table table-hover table-responsive-md table-fixed">
            <thead>
              <tr>
                <th>#</th>
                <th>Banco</th>
                <th>Cuenta</th>
                <th>N° Cuenta</th>
              </tr>
            </thead>
            <tbody>
              {MY_ACCOUNTS.map(list => <ListMyAccount {...list} key={list.id}/>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default MyAccounts;