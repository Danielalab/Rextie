import React from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../firebase';
import Logo from './Logo';

// alamacenar los datos de usuario en firebase

function saveData(user) {
  var users = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL
  };
  firebase.database().ref('bd/' + user.uid).set(users);
}

const Login = ({loginUser, dataFirebaseUser}) => (
  <div className="container-fluid">
    <div className="row justify-content-center align-items-center heigth" >
      <div className="col-11 col-md-5">
        <div className="card mx-xl-5 pb-3">
          <div className="card-body">
            <Logo />
            <form>
              <p className="h6 text-center mb-4">Ingresa con tu cuenta de Google a Rextie.com.</p>             
              <div className="text-center mt-4">
                <button className="btn btn-neutro-2"
                  onClick={(event) => {
                  event.preventDefault();
                  var provider = new firebase.auth.GoogleAuthProvider();
                  firebase.auth().signInWithPopup(provider)
                    .then(result => {
                    // The signed-in user info.
                    var user = result.user;
                    // Llamamos a la funcion
                    saveData(result.user);
                    loginUser('loginDni');
                  })
                  .catch(error => console.log(`Error ${error.code}: ${error.message}`))
                  firebaseApp.auth().onAuthStateChanged(user => {dataFirebaseUser(firebaseApp.database().ref('bd').child(user.uid).toJSON())})}}>
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