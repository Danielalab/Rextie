import React from 'react';
import App from './app';
import SignUp from'./SignUp'

const AppRender = ({user}) => {
  switch (user) {
    case user !== null:
      return <App/>;
    default:
      return <SignUp/>
  }
  return null;
}

export default AppRender;