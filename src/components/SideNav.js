import React from 'react';

const SideNav = () => (
    <div className="container-side-nav">
      {/* <a href="#" data-activates="slide-out" className="btn btn-primary p-3 button-collapse"><i className="fa fa-bars"></i></a> */}
      <div id="slide-out" className="side-nav fixed d-flex justify-content-center">
        <ul className="custom-scrollbar padding">
          <li className="container-list d-flex justify-content-center">
            <div className="logo-wrapper waves-light">
              <a href="#"><img id="logo-header" width="180" height="59" src="https://rextie-static-prod2.s3.amazonaws.com/img/rextie.d8f6b41d48f8.png" alt="Cambio de Moneda Online con Rextie"/></a>
            </div>
          </li>
          <li className="container-list">
            <div className="">
              <h3 className="text-center">Daniela Gonzales</h3>
              <p className="text-center">07163854</p>
            </div>
          </li>
          <li className="container-list">
            <a href="#" className="icons-sm d-flex align-items-center mt-4 mb-4">
              <span className="mx-4">
                <span className="lnr lnr-chevron-right container-icon"></span>
              </span>
              <span className="container-font">Comprar / Vender</span>
            </a>
          </li>
          <li className="container-list">
            <a href="#" className="icons-sm d-flex align-items-center mt-4 mb-4">
              <span className="mx-4">
                <span className="lnr lnr-user container-icon"></span>
              </span>
              <span className="container-font">Mis Datos</span>
            </a>
          </li>
          <li className="container-list">
            <a href="#" className="icons-sm d-flex align-items-center mt-4 mb-4">
              <span className="mx-4">
                <span className="lnr lnr-license container-icon"></span>
              </span>
              <span className="container-font">Mis Cuentas</span>
            </a>
          </li>
          <li className="container-list">
            <a href="#" className="icons-sm d-flex align-items-center mt-4 mb-4">
              <span className="mx-4">
                <span className="lnr lnr-star container-icon"></span>
              </span>
              <span className="container-font">Mis Favoritos</span>
            </a>
          </li>
          <li className="container-list">
            <a href="#" className="icons-sm d-flex align-items-center mt-4 mb-4">
              <span className="mx-4">
                <span className="lnr lnr-chart-bars container-icon"></span>
              </span>
              <span className="container-font">Balance Historico</span>
            </a>
          </li>
          <li className="container-list">
            <a href="#" className="icons-sm d-flex align-items-center mt-4 mb-4">
              <span className="mx-4">
                <span className="lnr lnr-license container-icon"></span>
              </span>
              <span className="container-font">Cuentas Rextie</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
)

export default SideNav;