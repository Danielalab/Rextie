import React from 'react';

const HistoricalUSD = () => (
  <div className="container-fluid">
    <div className="tab-content">
      <div className="card">
        <div className="card-body">
          <table className="table table-hover table-responsive-md table-fixed">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Cuenta</th>
                  <th>Tipo de operación</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                  <td>1586534215643278</td>
                  <td>Vendio</td>
                  <td>$ 900</td>
                  <td>14/03/2018</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                  <td>1586534215643278</td>
                  <td>Compro</td>
                  <td>$ 650</td>
                  <td>14/03/2018</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                  <td>1586534215643278</td>
                  <td>Vendio</td>
                  <td>$ 1900</td>
                  <td>14/03/2018</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

export default HistoricalUSD;