import React from 'react';
import Logo from './Logo';

// validar el inicio de sesión con DNI

const regExpNumber = /^\d+$/;
let validateDni = false;
let disabledButton = true;
let dniUser = '';

function onChangeDNI(dni) {
  if (regExpNumber.test(dni) && dni.length === 8) {
    validateDni = true;
    dniUser = dni;
    allInputsValid();
  } else {
    validateDni = false;
    disabledButton = true;
  }
}

function allInputsValid() {
  if (validateDni) {
    disabledButton = false;
    // changeButton(disabledButton);
  }
}

const LoginDni = ( getReniecData, disabledButton, changeButton, buttonReset) => {
  return(  
  <div className="container-fluid">
    <div className="row justify-content-center align-items-center heigth" >
      <div className="col-11 col-md-5">
        <div className="card mx-xl-5 pb-3">
          <div className="card-body">
            <Logo />
            <form>
              <p className="h5 text-center mb-4">Ingresa tu número de DNI para ingresar a Rextie.com.</p>             
              <label htmlFor="dni" className="grey-text">Tu DNI (*)</label>
              <input type="text" id="dni" className="form-control" onChange={() => changeButton(false)}/>
              <div className="text-center mt-4">
                <button className="btn btn-neutro-2"
                  disabled={ disabledButton ? "disabled" : false }
                  onClick={(event) => {
                    buttonReset();
                    getReniecData(dniUser);
                  }}>
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default LoginDni;