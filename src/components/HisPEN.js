import React from 'react';

const HIS_PEN = [
  {id:'1', bank:'BCP', typeAccount: 'Cuenta de ahorros', numAccount: '1586534215643278', typeOperation:'Venta', rode: 'S/. 900', date: '14/03/2018'},
  {id:'2', bank:'BBVA', typeAccount: 'Cuenta corriente', numAccount: '1586534215643278', typeOperation:'Compra', rode: 'S/. 650', date: '26/03/2018'},
  {id:'3', bank:'INTERBANK', typeAccount: 'Cuenta corriente', numAccount: '1586534215643278', typeOperation:'Venta', rode: 'S/. 1900', date: '30/03/2018'},
]

const HistoricalPEN = () => (
  <div className="container-fluid margin-his">
    <div className="tab-content table-historical">
      <div className="card">
        <div className="card-body">
          <table className="table table-hover table-responsive-md table-fixed">
            <thead>
                <tr>
                  <th>#</th>
                  <th>Banco</th>
                  <th>Cuenta</th>
                  <th>N° Cuenta</th>
                  <th>Operación</th>
                  <th>Monto</th>
                  <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
              {HIS_PEN.map(list =>
                (<tr>
                  <th scope="row">{list.id}</th>
                  <td>{list.bank}</td>
                  <td>{list.typeAccount}</td>
                  <td>{list.numAccount}</td>
                  <td>{list.typeOperation}</td>
                  <td>{list.rode}</td>
                  <td>{list.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
)

export default HistoricalPEN;