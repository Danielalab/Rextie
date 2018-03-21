import React from 'react';

const MyAccounts = () => (
  <div className="container-fluid">
    <ul className="nav md-pills nav-justified padding">
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold active text-left border-botton"  href="#">Mis cuentas</a>
      </li>
      <li className="nav-item d-flex justify-content-end">
        <button type="button" className="btn btn-info align-self-center">
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
              <tr>
                <th scope="row">1</th>
                  <td>BCP</td>
                  <td>Cuenta de ahorros</td>
                  <td>1586534215643278</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                  <td>BBVA</td>
                  <td>Cuenta corriente</td>
                  <td>1586534215643278</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                  <td>INTERBANK</td>
                  <td>Cuenta corriente</td>
                  <td>1586534215643278</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                  <td>SCOTIABANK</td>
                  <td>Cuenta ahorro</td>
                  <td>1586534215643278</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                  <td>CITYBANK</td>
                  <td>Cuenta corriente</td>
                  <td>1586534215643278</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                  <td>BNP</td>
                  <td>Cuenta ahorro</td>
                  <td>1586534215643278</td>
              </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
);

export default MyAccounts;