import React from 'react';
import Login from'./Login';
import App from '../containers/app';
import LoginDni from '../containers/formLogin';

const AppRender = ({initialPage, dataReniec, loginUser, dataFirebaseUser, getReniecData, getDataUserFirebase, user}) => {
  switch (initialPage) {
    case 'homePage':
      return <App user={user} dataReniec={dataReniec}/>;
    case 'login':
      return <Login loginUser={loginUser} dataFirebaseUser={dataFirebaseUser} getDataUserFirebase={getDataUserFirebase}/>;
    case 'loginDni':
      return <LoginDni getReniecData={getReniecData} loginUser={loginUser}/>;
    default:
      return null;
  }
  return null;
}

export default AppRender;