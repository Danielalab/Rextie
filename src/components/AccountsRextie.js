import React from 'react';

const HISTORICAL = [
  {id:'CCI', banco:'CCI Interbank (para transferencias interbancarias)', tipoCuenta: ['Corriente', ' Corriente'], moneda: ['Dólares', 'Soles'], NumCuenta: ['00316600300127343563', '00316600300127342868']},
  {id:'BCP', banco:'BCP', tipoCuenta: ['Corriente', ' Corriente'], moneda:['Dólares', 'Soles'], NumCuenta: ['1931700523109', '1932357833093']},
  {id:'INTERBANK', banco:'Interbank', tipoCuenta: ['Corriente', ' Corriente'], moneda: ['Dólares', 'Soles'], NumCuenta: ['1663001273435', '1663001273428']}
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
        <div className="card-body">
          <h5 className="title-cuenta-rextie">BCP</h5>
          <table className="table table-hover table-responsive-md table-fixed">
            <thead>
                <tr>
                  <th>Tipo de Cuenta</th>
                  <th>Moneda</th>
                  <th>N° Cuenta</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td>Corriente</td>
                <td>Dólares</td>
                <td>1586534215643278</td>
              </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
);

export default AccountsRextie;