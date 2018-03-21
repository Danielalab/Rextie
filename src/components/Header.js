import React from 'react';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark white">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText"
        aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
           <a className="nav-link blue-text font-weight-bold" href="#">USD / PEN <span className="black-text font-weight-normal ml-3">PEN S/. 3.27</span></a>
          </li>
        </ul>
          <button type="button" className="btn btn-success btn-off rounded-circle"><i className="fa fa-power-off font-2x"></i></button>
      </div>
    </nav>
  </header> 
);

export default Header;