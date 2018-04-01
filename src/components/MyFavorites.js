import React from 'react';
import ListMyFavorite from './ListMyFavorite'

const ACCOUNTS_FAVORITES = [
  {id:'1', name:'Jerry', dni:'08763562', mail:'jerry.12@gmail.com', city:'New York', bank:'BCP', numAccount: '1586534215643278', coin:'Dólares'},
  {id:'2', name:'Maria', dni:'72768990', mail:'maria_14@hotmail.com', city:'Arequipa', bank:'BBVA', numAccount: '1586534215643278', coin:'Soles'},
  {id:'3', name:'Juan', dni:'41678543', mail:'juan.pepe@yahoo.es', city:'Lima', bank:'INTERBANK', numAccount: '1586534215643278', coin:'Soles'},
  {id:'4', name:'Luis', dni:'61452459', mail:'lucho@gmail.com', city:'Barcelona', bank:'SCOTIABANK', numAccount: '1586534215643278', coin:'Dólares'},
  {id:'5', name:'Ramón', dni:'76432198', mail:'ramonperez@yahoo.com', city:'Chimbote', bank:'CITYBANK', numAccount: '1586534215643278', coin:'Soles'},
  {id:'6', name:'Gabriela', dni:'35876219', mail:'gabi98@hotmail.com', city:'Quito', bank:'BNP', numAccount: '1586534215643278', coin:'Dólares'}
]

const MyFavorites = ({navigateTo}) => (
  <div className="container-fluid height">
    <ul className="nav md-pills nav-justified padding">
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold active text-left border-botton"  href="#">Mis favoritos</a>
      </li>
      <li className="nav-item d-flex justify-content-end">
        <button type="button" className="btn btn-info align-self-center" onClick={() => navigateTo('addFavoriteAccount')}>
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
                  <th>Nombre</th>
                  <th>DNI</th>
                  <th>Correo</th>
                  <th>City</th>
                  <th>N° Cuenta</th>
                  <th>Banco</th>
                  <th>Moneda</th>
                </tr>
            </thead>
            <tbody>
              {ACCOUNTS_FAVORITES.map(list => <ListMyFavorite {...list} key={list.id} />)}
            </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
);

export default MyFavorites;