import React from 'react';

const Footer = () => (
<footer className="page-footer font-small unique-color-dark pt-0">
  <div style={{backgroundColor: "#26A8E0"}}>
    <div className="container">
      <div className="row py-4 d-flex align-items-center">
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0 white-text">Contáctanos a través de nuestra redes sociales</h6>
        </div>
        <div className="col-md-6 col-lg-7 text-center text-md-right">
          <a className="fb-ic m-2">
            <i className="fa fa-facebook white-text mr-lg-4"> </i>
          </a>
          <a className="tw-ic m-2">
            <i className="fa fa-twitter white-text mr-lg-4"> </i>
          </a>
          <a className="gplus-ic m-2">
            <i className="fa fa-google-plus white-text mr-lg-4"> </i>
          </a>
          <a className="li-ic m-2">
            <i className="fa fa-linkedin white-text mr-lg-4"> </i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="container mt-5 mb-4 text-center text-md-left">
    <div className="row mt-3 justify-content-center">
      <div className="col-md-2 col-lg-2 col-xl-4 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">
          <strong>Registrados en</strong>
        </h6>
        <hr className="info-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
        <p>
          <a href="http://www.sbs.gob.pe/directorios/registro-de-casas-de-cambio-creditos-prestamos-y-empenos/publicacion-del-registro/casas-de-cambio">Superintendencia de Banca, Seguros y AFP</a>
        </p>
        <p>
          <a href="http://e-consultaruc.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias">SUNAT REXTIE S.A.C RUC: 20601030013</a>
        </p>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase font-weight-bold">
          <strong>Enlaces</strong>
        </h6>
        <hr className="info-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style= {{width: "60px"}} />
        <p>
          <a href="#!">Ayuda</a>
        </p>
        <p>
          <a href="#!">Términos y Condiciones de Uso</a>
        </p>
        <p>
          <a href="#!">Libro de Reclamaciones</a>
        </p>
      </div>
      <div className="col-md-4 col-lg-3 col-xl-4">
        <h6 className="text-uppercase font-weight-bold">
          <strong>Contáctenos</strong>
        </h6>
        <hr className="info-color accent-2 mb-4 mt-0 d-inline-block mx-auto" style= {{width: "60px"}} />
        <p>
          <i className="fa fa-home mr-3"></i> Ricardo Angulo 745, Oficina 402 Urb. Corpac, San Isidro, Lima, Peru</p>
        <p>
          <i className="fa fa-envelope mr-3"></i> info@rextie.com</p>
        <p>
          <i className="fa fa-phone mr-3"></i> (+51) (01) 642 9617 | (01) 342 2571</p>
      </div>

    </div>
  </div>
  <div className="footer-copyright py-3 text-center">
    © 2016-2017 REXTIE SAC
    <a href="https://mdbootstrap.com/material-design-for-bootstrap/">
      <strong> Todos los derechos reservados.</strong>
    </a>
  </div>
</footer>
);

export default Footer;