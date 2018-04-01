import React from 'react';

// inicia validación del formulario

const regExpNumber = /^\d+$/;

// variables centinelas
let validateCategory = false;
let validateBank = false;
let validateTypeAccount = false;
let validateMoney = false;
let validateNumberAccount = false;

let disabledButton = true;

function onChangeCategory(category) {
  if (category) {
    validateCategory = true;
    allInputsValid()
  } else {
    validateCategory = false;
    disabledButton = true
  }
}

function onChangeBank(bank) {
  if (bank) {
    validateBank = true;
    allInputsValid();
  } else {
    validateBank = false;
    disabledButton = true
  }
}

function onChangeTypeAccount(account) {
  if (account) {
    validateTypeAccount = true;
    allInputsValid();
  } else {
    validateTypeAccount = false;
    disabledButton = true
  }
}

function onChangeMoney(money) {
  if (money) {
    validateMoney = true;
    allInputsValid();
  } else {
    validateMoney = false;
    disabledButton = true;
  }
}

function onChangeNumberAccount(number) {
  if (regExpNumber.test(number) && number.length === 16) {
    validateNumberAccount = true;
    allInputsValid()
  } else {
    validateNumberAccount = false;
    disabledButton = true
  }
}

function allInputsValid() {
  if (validateCategory && validateBank && validateTypeAccount && validateMoney && validateNumberAccount) {
    disabledButton = false;
  }
}


// inicia componente

const AddAccount = ({navigateTo}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Añadir Cuenta</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Categoría de la Cuenta</label>
          <select id="inputOrigin" className="form-control" onChange={() => onChangeCategory(event.target.value)}>
            <option value="">...</option>
            <option value="my-account">Cuenta Propia (mis cuentas)</option>
            <option value="my-favorites">Cuenta de Terceros (mis favoritos)</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Selecciona el Banco de tu Cuenta</label>
          <select id="inputdestination" className="form-control" onChange={() => onChangeBank(event.target.value)}>
            <option value="">Selecciona un Banco</option>
            <option value="BBVA">BBVA</option>
            <option value="Scotiabank">Scotiabank</option>
            <option value="BCP">BCP</option>
            <option value="Interbank">Interbank</option>
            <option value="Citibank">Citibank</option>
            <option value="Banco de la Nación">Banco de la Nación</option>
            <option value="Banco de Comercio">Banco de Comercio</option>
            <option value="Banco Financiero">Banco Financiero</option> 
            <option value="BanBif">BanBif</option>
            <option value="Crediscotia Financiera">Crediscotia Financiera</option>
            <option value="Mi Banco">Mi Banco</option>           
            <option value="Agrobanco">Agrobanco</option>           
            <option value="Banco GNB">Banco GNB</option>           
            <option value="Banco Falabella">Banco Falabella</option>
            <option value="Banco Ripley">Banco Ripley</option>
            <option value="Banco Santander">Banco Santander</option>                                  
            <option value="Banco Azteca">Banco Azteca</option>                                  
            <option value="ICBC">ICBC</option>                                                                                                               
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <select id="inputOrigin" className="form-control" onChange={() => onChangeTypeAccount(event.target.value)}>
            <option value="">Elige el tipo de Cuenta</option>
            <option value="Ahorros">Cuenta de Ahorros</option>
            <option value="Corriente">Cuenta Corriente</option>            
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <select id="inputOrigin" className="form-control" onChange={() => onChangeMoney(event.target.value)}>
            <option value="">Elige el tipo de Cambio</option>
            <option value="Soles">Soles</option>
            <option value="Dólares">Dólares</option>            
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <input type="text" className="form-control" id="card-number" placeholder="Número de Cuenta" onChange={() => onChangeNumberAccount(event.target.value)}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('confirmation')}>Cancelar</a>
      <button className="btn btn-success" disabled={disabledButton ? "disabled" : false} onClick={() => navigateTo('confirmation')}>Añadir</button> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default AddAccount;