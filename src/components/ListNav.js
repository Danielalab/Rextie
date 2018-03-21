import React from 'react';
// import Anchor from './Anchor'

const ListNav = ({icon, name}) => (
  <li className="container-list mt-4 mb-4">
    <a href="#" className="icons-sm d-flex align-items-center">
      <span className="mx-4">
        <span className={icon}></span>
      </span>
      <span className="container-font">{name}</span>
    </a>
  </li>
)

export default ListNav;