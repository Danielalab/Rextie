import React from 'react';
import Logo from './Logo';
import UserData from './UserData';
import ListNav from './ListNav'

const SideNav = ({data, navigateTo, user, dataReniec}) => (
  <div className="container-fluid">
    <div className="row align-items-center heigth justify-content-center">
    <div id="slide-out" className="side-nav d-flex justify-content-center">
      <ul className="custom-scrollbar padding">
        <Logo/>
        <UserData {...dataReniec}/>
        { data.map(list => <ListNav key = {list.id} {...list} navigateTo={navigateTo}/>)}
      </ul>
    </div>
    </div>
  </div>
)

export default SideNav;