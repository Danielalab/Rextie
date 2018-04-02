import React from 'react';

const UserData = ({displayName}) => (
  <li className="container-list mt-4 mb-6">
    <div className="">
      <h3 className="text-center">{displayName}</h3>
      <p className="text-center mt-4">07163854</p>
    </div>
  </li>
)

export default UserData;