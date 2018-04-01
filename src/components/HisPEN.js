import React from 'react';

const HistoricalPEN = () => (
  <div className="container-fluid margin-his">
    <div className="tab-content table-historical">
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
                  <td>Venta</td>
                  <td>S/. 900</td>
                  <td>14/03/2018</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                  <td>1586534215643278</td>
                  <td>Compra</td>
                  <td>S/. 650</td>
                  <td>26/03/2018</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                  <td>1586534215643278</td>
                  <td>Venta</td>
                  <td>S/. 1900</td>
                  <td>30/03/2018</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

export default HistoricalPEN;