import React from 'react';

const ListAccounRextie = ({bank, rows}) => (
  <div className="card-body">
    <h5 className="title-cuenta-rextie"><strong>{bank}</strong></h5>
    <table className="table table-hover table-responsive-md table-fixed">
      <thead>
        <tr>
          <th><strong>Tipo de Cuenta</strong></th>
          <th><strong>Moneda</strong></th>
          <th><strong>N° Cuenta</strong></th>
        </tr>
      </thead>
      {rows.map(row => 
        <tbody>
          <tr>
            <td>{row.typeAccount}</td>
            <td>{row.coin}</td>
            <td>{row.numAccount}</td>
          </tr>
        </tbody>
      )}
    </table>
  </div>
);

export default ListAccounRextie;