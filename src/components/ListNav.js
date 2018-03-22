import React from 'react';

const ListNav = ({id, icon, name, navigateTo}) => (
  <li className="container-list mt-4 mb-4" onClick={() => navigateTo(id)}>
    <div className="icons-sm d-flex align-items-center">
      <span className="mx-4">
        <span className={icon}></span>
      </span>
      <span className="container-font">{name}</span>
    </div>
  </li>
)

export default ListNav;