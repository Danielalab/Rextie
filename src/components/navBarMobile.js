import React from 'react';
import ListNav from './ListNav';

const NavBarMobile = ({data, navigateTo, user, dataReniec}) => (
  <nav className="d-block d-sm-none navbar navbar-expand-lg justify-content-between fixed-top navbar-light bg-faded">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="lnr lnr-menu fa-2x color-3"></span>
    </button>
    <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav mr-auto">
          { data.map(list => <ListNav key = {list.id} {...list} navigateTo={navigateTo}/>)}        
        </ul>
    </div>
  </nav>
)

export default NavBarMobile;