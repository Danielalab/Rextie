import React from 'react';

const AddMyAccount = () => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Añadir Mi Cuenta Bancaria</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Cuenta de Origen</label>
          <select id="inputOrigin" className="form-control">
            <option>Selecciona tu Banco</option>
            <option></option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Cuenta de Destino</label>
          <select id="inputdestination" className="form-control">
            <option>Elige una Cuenta de Destino</option>
            <option>BBVA</option>
            <option>Scotiabank</option>
            <option>BCP</option>
            <option>Interbank</option>
            <option>Citibank</option>
            <option>Banco de la Nación</option>
            <option>Banco de Comercio</option>
            <option>Banco Financiero</option> 
            <option>BanBif</option>
            <option>Crediscotia Financiera</option>
            <option>Mi Banco</option>           
            <option>Agrobanco</option>           
            <option>Banco GNB</option>           
            <option>Banco Falabella</option>
            <option></option>
            <option></option>                                  
            <option></option>                                  
            <option></option>                                  
            <option></option>                                                                                
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputAddress2">Teléfono</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder={telefono}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('transaction')}>Cambiar Operación</a>
      <a className="btn btn-success" onClick={() => navigateTo('final-transaction')}>Aceptar</a> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default AddMyAccount;