import React from 'react';

// inicia validación de formulario

const regExpNumber = /^\d+$/;
const regExpText = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
const regExpEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

// variables centinelas
let validateTypeDoc = false;
let validateNumberDoc = false;
let validateName = false;
let validateEmail = false;
let validateBank = false;
let validateTypeAccount = false;
let validateMoney = false;
let validateNumberAccount = false;

let disabledButton = true;

function onChangeTypeDoc(typeDoc) {
  if (typeDoc) {
    validateTypeDoc = true;
    allInputsValid();
  } else {
    validateTypeDoc = false,
    disabledButton = true;
  }
}

function onChangeNumberDoc(number) {
  if (regExpNumber.test(number)) {
    validateNumberDoc = true;
    allInputsValid()
  } else {
    validateNumberDoc = false;
    disabledButton = true
  }
}

function onChangeName(name) {
  if (regExpText.test(name)) {
    validateName = true;
    allInputsValid()
  } else {
    validateName = false;
    disabledButton = true
  }
}

function onChangeEmail(email) {
  if (regExpEmail.test(email)) {
    validateEmail = true;
    allInputsValid()
  } else {
    validateEmail = false;
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
  if (regExpNumber.test(number)) {
    validateNumberAccount = true;
    allInputsValid()
  } else {
    validateNumberAccount = false;
    disabledButton = true
  }
}

function allInputsValid() {
  if (validateTypeDoc && validateNumberDoc && validateName && validateEmail && validateBank && validateTypeAccount && validateMoney && validateNumberAccount) {
    disabledButton = false;
  }
}

// incia componente para añadir una cuenta a favoritos

const AddFavoriteAccount = ({navigateTo}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Añadir Cuenta a mis Favoritos</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Documento</label>
          <select id="inputOrigin" className="form-control" onChange={() => onChangeTypeDoc(event.target.value)}>
            <option value="">Elige el tipo de Documento</option>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="">CE</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="operation">Número de Documento</label>
          <input type="text" className="form-control" id="operation" placeholder="Número de Documento" onChange={() => onChangeNumberDoc(event.target.value)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="name">Nombre Completo</label>
          <input type="text" className="form-control" id="name" placeholder="Nombre Completo" onChange={() => onChangeName(event.target.value)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="email">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Email" onChange={() => onChangeEmail(event.target.value)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Selecciona el Banco de tu Cuenta</label>
          <select id="inputdestination" className="form-control" onChange={() => onChangeBank(event.target.value)}>
            <option value="">Selecciona tu Banco</option>
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
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cuenta</label>
          <select id="inputOrigin" className="form-control" onChange={() => onChangeTypeAccount(event.target.value)}>
            <option value="">Elige el tipo de Cuenta</option>
            <option value="Ahorros">Cuenta de Ahorros</option>
            <option value="Corriente">Cuenta Corriente</option>            
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cambio</label>
          <select id="inputOrigin" className="form-control" onChange={() => onChangeMoney(event.target.value)}>
            <option value="">Elige el tipo de Cambio</option>
            <option value="Soles">Soles</option>
            <option value="Dólares">Dólares</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="card-number">Número de Cuenta</label>
          <input type="text" className="form-control" id="card-number" placeholder="Número de Cuenta" onChange={() => onChangeNumberAccount(event.target.value)}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('myAccounts')}>Cancelar</a>
      <button className="btn btn-success" disabled={disabledButton ? "disabled" : false} onClick={() => navigateTo('myAccounts')}>Añadir</button> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default AddFavoriteAccount;