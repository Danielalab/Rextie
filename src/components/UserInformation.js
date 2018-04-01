import React from 'react';
import ListUserInformation from './ListUserInformation'

const dataUser = [
  {id:'nameUser', value: 'Daniela Gonzales', label: 'Nombre Completo'},
  {id:'dni', value: 'DNI', label: 'Tipo de Documento de Identidad'},
  {id:'numberdni', value: '74352136', label: 'Número de Documento'},
  {id:'work', value: 'Estudiante', label: 'Ocupación u Oficio'},
  {id:'phone', value: '995526665', label: 'Celular'},
];

const UserInformation = () => (
  <div className="container-fluid my-4">
    <div className="row justify-content-center">
    { dataUser.map(list => <ListUserInformation {...list} key={list.id}/>)}
    </div>
  </div>
);

export default UserInformation;