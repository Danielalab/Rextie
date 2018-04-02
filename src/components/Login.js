import React from 'react';
import firebase from 'firebase';
import { firebaseApp } from '../firebase';

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
    <button onClick={() => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          // The signed-in user info.
          var user = result.user;
          // Llamamos a la funcion
          saveData(result.user);
          loginUser('homePage');
        })
        .catch(error => console.log(`Error ${error.code}: ${error.message}`))

        firebaseApp.auth().onAuthStateChanged(user => dataFirebaseUser(user))
      }}>
      Inicia Sesión
    </button>
  </div>
)

export default Login;