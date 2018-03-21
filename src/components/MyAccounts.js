import React from 'react';

const MyAccounts = () => (
  <div className="container-fluid">
    <ul className="nav md-pills nav-justified padding">
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold active text-left border-botton"  href="#">Mis favoritos</a>
      </li>
      <li className="nav-item d-flex justify-content-end">
        <button type="button" className="btn btn-info align-self-center">
          Agregar
        </button>
      </li>
    </ul>
    <div className="tab-content">
      <div className="card">
        <div className="card-body">
          <table className="table table-hover table-responsive-md table-fixed">
            <thead>
                <tr>
                    <th>#</th>
                    <th className= "text-center">Nombre</th>
                    <th className= "text-center">DNI</th>
                    <th className= "text-center">Correo</th>
                    <th className= "text-center">City</th>
                    <th className= "text-center">Cuenta</th>
                    <th className= "text-center">Banco</th>
                    <th className= "text-center">Moneda</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                  <td>Jerry</td>
                  <td>72869880</td>
                  <td>jerry.12@gmail.com</td>
                  <td>New York</td>
                  <td>1234567876432167</td>
                  <td>BCP</td>
                  <td>Soles</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                  <td>Jerry</td>
                  <td>72869880</td>
                  <td>jerry.12@gmail.com</td>
                  <td>New York</td>
                  <td>1234567876432167</td>
                  <td>BCP</td>
                  <td>Soles</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                  <td>Jerry</td>
                  <td>72869880</td>
                  <td>jerry.12@gmail.com</td>
                  <td>New York</td>
                  <td>1234567876432167</td>
                  <td>BCP</td>
                  <td>Soles</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                  <td>Jerry</td>
                  <td>72869880</td>
                  <td>jerry.12@gmail.com</td>
                  <td>New York</td>
                  <td>1234567876432167</td>
                  <td>BCP</td>
                  <td>Soles</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                  <td>Jerry</td>
                  <td>72869880</td>
                  <td>jerry.12@gmail.com</td>
                  <td>New York</td>
                  <td>1234567876432167</td>
                  <td>BCP</td>
                  <td>Soles</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                  <td>Jerry</td>
                  <td>72869880</td>
                  <td>jerry.12@gmail.com</td>
                  <td>New York</td>
                  <td>1234567876432167</td>
                  <td>BCP</td>
                  <td>Soles</td>
              </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
);

export default MyAccounts;