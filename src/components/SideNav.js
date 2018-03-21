import React from 'react';
import Logo from './Logo';
import UserData from './UserData';
import ListNav from './ListNav'

const SideNav = ({data}) => (
  <div className="container-fluid">
    <div className="row align-items-center heigth justify-content-center">
      <div id="slide-out" className="side-nav d-flex justify-content-center">
        <ul className="custom-scrollbar padding">
          <Logo/>
          <UserData/>
          { data.map(list => <ListNav key = {list.name} {...list}/>)}
        </ul>
      </div>
    </div>
  </div>
)

export default SideNav;