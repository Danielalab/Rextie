import React from 'react';

// inicia validación de formulario para confirmación de transacción

const regExpNumber = /^\d+$/;
let validateOrigin = false;
let validateDestination = false;
let validatePhone = false;
let disabledButton = true;

function onChangeOrigin(origin, changeButton) {
  if (origin) {
    console.log('valido')
    validateOrigin = true;
  } else {
    validateOrigin = false;
    disabledButton = true
  }
  allInputsValid(changeButton);  
}

function onChangeDestination(destination, changeButton) {
  if (destination) { 
    console.log('valido')    
    validateDestination = true;
  } else {
    validateDestination = false;
    disabledButton = true
  }
  allInputsValid(changeButton);  
}

function onChangePhone(number, changeButton) {
  if (regExpNumber.test(number) && number.length === 9) {
    console.log('valido')    
    validatePhone = true;
  } else {
    validatePhone = false;
    disabledButton = true
  }
  allInputsValid(changeButton)
}

function allInputsValid(changeButton) {
  if (validateOrigin && validateDestination && validatePhone) {
    disabledButton = false;
  } else {
    disabledButton = true;
  }
  changeButton(disabledButton)  
}

function reset(changeButton) {
  validateOrigin = false;
  validateDestination = false;
  validatePhone = false;
  disabledButton = true;
  changeButton(disabledButton)
}
const ConfirmationTransaction = ({ navigateTo, typeOperation, sendTo, toReceive, moneySend, moneyReceive, telefono, dataClick,  disabledButton, changeButton, buttonReset, getValue, getValueDestination, getValueOrigen}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Confirmación de datos</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="operation">Tipo de Operación</label>
          <input type="text" className="form-control disabled-input disabled" id="operation" placeholder={dataClick.id}/>
        </div>
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="inputPassword4">{'Cliente ' + dataClick.typeOperation1 + ':'}</label>
          <input type="text" className="form-control disabled-input disabled" id="inputPassword4" placeholder={dataClick.quantity + ' USD'}/>
        </div>
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="operation">{'Cliente ' + dataClick.typeOperation2 + ':'}</label>
          <input type="text" className="form-control disabled-input disabled" id="operation" placeholder={dataClick.PEN + ' PEN'}/>
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-9 col-md-8">
          <select id="inputOrigin" className="form-control" onChange={(event) => {
            onChangeOrigin(event.target.value, changeButton)
            
            const value = event.target.value
            const option = event.target.options[event.target.selectedIndex].text

            firebaseApp.auth().onAuthStateChanged(user => firebaseApp.database().ref('bd').child(user.uid).child('accounts').child(value));
            getValueOrigen(option);
            }}>
            <option value="accountOrigen">Elige una Cuenta de Origen</option>
            <option value='1'>5271 7124 5444 3624 - BCP</option>
          </select>
        </div>
        <div clasName="col-2 col-md-2">
          <span className="lnr lnr-plus-circle add-Account-icon m-2" onClick={() => {navigateTo('addAccount')}}></span>
        </div>
        <div className="form-group col-9 col-md-8">
          <select id="inputdestination" className="form-control" onChange={(event) => {
            onChangeDestination(event.target.value, changeButton);
            
            const value = event.target.value
            const option = event.target.options[event.target.selectedIndex].text

            firebaseApp.auth().onAuthStateChanged(user => firebaseApp.database().ref('bd').child(user.uid).child('accounts').child(value));
            getValueDestination(option);
            }}>
            <option value="accountDestino">Elige una Cuenta de Destino</option>
            <option value='1'>4485 5680 5607 0990 - INTERBANK</option>
          </select>
        </div>
        <div clasName="col-2 col-md-2">
          <span className="lnr lnr-plus-circle add-Account-icon m-2" onClick={() => navigateTo('addAccount')}></span>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputAddress2">Teléfono</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder={telefono} onChange={(event) => {
            onChangePhone(event.target.value, changeButton);
            getValue(event.target.value);
            }}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => {reset(changeButton),navigateTo('transaction')}}>Cambiar Operación</a>
      <button className="btn btn-success"
        disabled={disabledButton ? "disabled" : false}
        onClick={() => { reset(changeButton) , navigateTo('final-transaction')}}
        >Aceptar</button> 
    </div>
    </div>
    </div>
    </div>
  </div>
)

export default ConfirmationTransaction;