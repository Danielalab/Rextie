import React from 'react';
import firebase from 'firebase';

function googleLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then(result => {
    // The signed-in user info.
    var user = result.user;
    // Mostramos su contenido
    console.log(user);
    // Llamamos a la funcion
    saveData(result.user);
  })
  .catch(error => console.log(`Error ${error.code}: ${error.message}`))
}

function saveData(user) {
  var users = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    photo: user.photoURL
  };
  firebase.database().ref('bd/' + user.uid).set(users);
}

const SignUp = () => (
  <div className="container-fluid">
    <button onClick={() => googleLogin()}>Sign Up</button>
  </div>
)

export default SignUp;