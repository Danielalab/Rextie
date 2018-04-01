import React from 'react';

const ListMyAccount = ({id, bank, typeAccount, numAccount}) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{bank}</td>
    <td>{typeAccount}</td>
    <td>{numAccount}</td>
  </tr>

);

export default ListMyAccount;