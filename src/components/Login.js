import React from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../firebase';
import Logo from './Logo';

// validar el inicio de sesión

const regExpNumber = /^\d+$/;
let validateDni = false;
let disabledButtonGoogle = true;
let dniUser = '';

function onChangeDNI(dni, changeButton) {
  if (regExpNumber.test(dni) && dni.length === 8) {
    validateDni = true;
    dniUser = dni;
    allInputsValid(changeButton);
  } else {
    validateDni = false;
    disabledButtonGoogle = true;
  }
}

function allInputsValid(changeButton) {
  if (validateDni) {
    disabledButtonGoogle = false;
    changeButton(disabledButtonGoogle);
  }
}

// alamacenar los datos de usuario en firebase

function saveData(user, dataReniec) {
  console.log(dataReniec)
  var users = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL
  };
  firebase.database().ref('bd/' + user.uid).set(users);
}

const Login = ({loginUser, dataFirebaseUser, getReniecData, dataReniec, disabledButton, changeButton, buttonReset}) => (
  <div className="container-fluid">
    <div className="row justify-content-center align-items-center heigth" >
      <div className="col-11 col-md-5">
        <div className="card mx-xl-5 pb-3">
          <div className="card-body">
            <Logo />
            <form>
              <p className="h5 text-center mb-4">Ingresa tu correo electrónico y contraseña para ingresar a Rextie.com.</p> 
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Tu email</label>
              <input type="email" id="defaultFormLoginEmailEx" className="form-control"/>
              <br/>
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Tu contraseña</label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control"/>
              <br/>              
              <label htmlFor="dni" className="grey-text">Tu DNI (*)</label>
              <input type="text" id="dni" className="form-control" onChange={(event) => onChangeDNI(event.target.value, changeButton)}/>
              <span>Si eres nuevo en Rextie es obligatorio ingresar tu DNI</span>
              <div className="text-center mt-4">
                <button className="btn btn-neutro-1" type="submit" disabled>Iniciar sesión</button>
                <button className="btn btn-neutro-2"
                  disabled={ disabledButton ? "disabled" : false }
                  onClick={(event) => {
                  event.preventDefault();
                  buttonReset();
                  getReniecData(dniUser);
                  var provider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(provider)
                    .then(result => {
                    // The signed-in user info.
                    var user = result.user;
                    // Llamamos a la funcion
                    saveData(result.user, dataReniec);
                    loginUser('homePage');
                  })
                  .catch(error => console.log(`Error ${error.code}: ${error.message}`))

                  firebaseApp.auth().onAuthStateChanged(user => dataFirebaseUser(user))
                  }}>
                  <i className="fa fa-google-plus mr-2 font-2x"></i>Google 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Login;