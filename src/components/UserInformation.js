import React from 'react';
import ListUserInformation from './ListUserInformation'

const UserInformation = ({dataUser, changeDataUser}) => (
  <div className="container-fluid my-4">
    <div className="row justify-content-center">
    { dataUser.map(list => <ListUserInformation {...list} key={list.id} changeDataUser={changeDataUser}/>)}
    </div>
  </div>
);

export default UserInformation;