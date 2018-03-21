import React from 'react';

const UserInformation = () => (
  <div className="container-fluid">
  <div className="row justify-content-center">
    <div className="card col-10 card-border">
      <div className="card-body">
        <div className="md-form">
          <input value="Daniela Gonzales" type="text" id="nameUser" className="form-control"/>
          <label htmlFor="nameUser">Nombre Completo</label>
        </div>
      </div>
    </div>
    <div className="card col-10 card-border">
      <div className="card-body">
        <div className="md-form">
          <input value="DNI" type="text" id="dni" className="form-control"/>
          <label htmlFor="dni">Tipo de Documento de Identidad</label>                    
        </div>
      </div>
    </div>
    <div className="card col-10 card-border">
      <div className="card-body">
        <div className="md-form">
          <input value="74352136" type="text" id="numberdni" className="form-control"/>
          <label htmlFor="numberdni">Número de Documento</label>                    
        </div>
      </div>
    </div>
    <div className="card col-10 card-border">
      <div className="card-body">
        <div className="md-form">
          <input value="Estudiante" type="text" id="work" className="form-control"/>
          <label htmlFor="work">Ocupación u Oficio</label>                    
        </div>
      </div>
    </div>
    <div className="card col-10 card-border">
      <div className="card-body">
        <div className="md-form">
          <input value="995526665" type="text" id="phone" className="form-control"/>
          <label htmlFor="phone">Celular</label>                    
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default UserInformation