import React from 'react';
import { resetButton } from '../actions/actions';

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

function onChangeTypeDoc(typeDoc, changeButton) {
  if (typeDoc) {
    validateTypeDoc = true;
  } else {
    validateTypeDoc = false,
    disabledButton = true;
  }
  allInputsValid(changeButton);  
}

function onChangeNumberDoc(number, changeButton) {
  if (regExpNumber.test(number)) {    
    validateNumberDoc = true;
  } else {
    validateNumberDoc = false;
    disabledButton = true
  }
  allInputsValid(changeButton)  
}

function onChangeName(name, changeButton) {
  if (regExpText.test(name)) {    
    validateName = true;
  } else {
    validateName = false;
    disabledButton = true
  }
  allInputsValid(changeButton)  
}

function onChangeEmail(email, changeButton) {
  if (regExpEmail.test(email)) {    
    validateEmail = true;
  } else {
    validateEmail = false;
    disabledButton = true
  }
  allInputsValid(changeButton)  
}

function onChangeBank(bank, changeButton) {
  if (bank) {    
    validateBank = true;
  } else {
    validateBank = false;
    disabledButton = true
  }
  allInputsValid(changeButton);  
}

function onChangeTypeAccount(account, changeButton) {
  if (account) {    
    validateTypeAccount = true;
  } else {
    validateTypeAccount = false;
    disabledButton = true
  }
  allInputsValid(changeButton);  
}

function onChangeMoney(money, changeButton) {
  if (money) {    
    validateMoney = true;
  } else {
    validateMoney = false;
    disabledButton = true;
  }
  allInputsValid(changeButton);  
}

function onChangeNumberAccount(number, changeButton) {
  if (regExpNumber.test(number) && number.length === 16) {    
    validateNumberAccount = true;
  } else {
    validateNumberAccount = false;
    disabledButton = true
  }
  allInputsValid(changeButton)  
}

function allInputsValid(changeButton) {
  if (validateTypeDoc && validateNumberDoc && validateName && validateEmail && validateBank && validateTypeAccount && validateMoney && validateNumberAccount) {
    disabledButton = false;    
  } else {
    disabledButton = true;
  }
  changeButton(disabledButton);  
}

// incia componente para añadir una cuenta a favoritos

const AddFavoriteAccount = ({navigateTo, disabledButton, changeButton, buttonReset}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Añadir Cuenta a mis Favoritos</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Documento</label>
          <select id="inputOrigin" className="form-control" onChange={(event) => onChangeTypeDoc(event.target.value, changeButton)}>
            <option value="">Elige el tipo de Documento</option>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="operation">Número de Documento</label>
          <input type="text" className="form-control" id="operation" placeholder="Número de Documento" onChange={(event) => onChangeNumberDoc(event.target.value, changeButton)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="name">Nombre Completo</label>
          <input type="text" className="form-control" id="name" placeholder="Nombre Completo" onChange={(event) => onChangeName(event.target.value, changeButton)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="email">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Email" onChange={(event) => onChangeEmail(event.target.value, changeButton)}/>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Selecciona el Banco de tu Cuenta</label>
          <select id="inputdestination" className="form-control" onChange={(event) => onChangeBank(event.target.value, changeButton)}>
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
          <select id="inputOrigin" className="form-control" onChange={(event) => onChangeTypeAccount(event.target.value, changeButton)}>
            <option value="">Elige el tipo de Cuenta</option>
            <option value="Ahorros">Cuenta de Ahorros</option>
            <option value="Corriente">Cuenta Corriente</option>            
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Selecciona el tipo de Cambio</label>
          <select id="inputOrigin" className="form-control" onChange={(event) => onChangeMoney(event.target.value, changeButton)}>
            <option value="">Elige el tipo de Cambio</option>
            <option value="Soles">Soles</option>
            <option value="Dólares">Dólares</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="card-number">Número de Cuenta</label>
          <input type="text" className="form-control" id="card-number" placeholder="Número de Cuenta" onChange={(event) => onChangeNumberAccount(event.target.value, changeButton)}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('myAccounts')}>Cancelar</a>
      <button className="btn btn-success" 
        disabled={disabledButton ? "disabled" : false} 
        onClick={() => {resetButton(); navigateTo('myAccounts')}}>
      Añadir</button> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default AddFavoriteAccount;