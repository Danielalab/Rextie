import React from 'react';

const UserData = ({nombres, dni}) => (
  <li className="container-list mt-4 mb-6">
    <div className="">
      <h3 className="text-center">{nombres}</h3>
      <p className="text-center mt-4">{dni}</p>
    </div>
  </li>
)

export default UserData;