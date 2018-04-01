import React from 'react';

const ListMyFavorite = ({id, name, dni, mail, city, bank, numAccount, coin}) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{dni}</td>
    <td>{mail}</td>
    <td>{city}</td>
    <td>{numAccount}</td>
    <td>{bank}</td>
    <td>{coin}</td>
  </tr>

);

export default ListMyFavorite;