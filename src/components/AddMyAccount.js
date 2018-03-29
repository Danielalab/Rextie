import React from 'react';

const AddMyAccount = ({navigateTo}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Añadir Mi Cuenta Bancaria</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Selecciona el Banco de tu Cuenta</label>
          <select id="inputdestination" className="form-control">
            <option>Selecciona tu Banco</option>
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
            <option>Banco Ripley</option>
            <option>Banco Santander</option>                                  
            <option>Banco Azteca</option>                                  
            <option>ICBC</option>                                                                                                               
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cuenta</label>
          <select id="inputOrigin" className="form-control">
            <option>Elige el tipo de Cuenta</option>
            <option>Cuenta de Ahorros</option>
            <option>Cuenta Corriente</option>            
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cambio</label>
          <select id="inputOrigin" className="form-control">
            <option>Elige el tipo de Cambio</option>
            <option>Soles</option>
            <option>Dólares</option>            
          </select>
        </div>
        <div class="form-check mb-2 mr-sm-2">
           <input class="form-check-input" type="checkbox" id="inlineFormCheckMD" />
           <label class="form-check-label" for="inlineFormCheckMD">
            Selecciona esta cuenta bancaria para tu próxima operación.
        </label>
    </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('myAccounts')}>Cancelar</a>
      <a className="btn btn-success" onClick={() => navigateTo('myAccounts')}>Añadir</a> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default AddMyAccount;