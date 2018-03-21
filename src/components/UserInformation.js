import React from 'react';

const UserInformation = () => (
    <div className="row p-2 justify-content-center">
        <div className="card col-10">
            <div className="card-body">
                <div className="md-form">
                    <input value="Daniela Gonzales" type="text" id="nameUser" className="form-control"/>
                    <label for="nameUser">Nombre Completo</label>
                </div>
            </div>
        </div>
        <div className="card col-10">
            <div className="card-body">
                <div className="md-form">
                    <input value="DNI" type="text" id="dni" className="form-control"/>
                    <label for="dni">Tipo de Documento de Identidad</label>                    
                </div>
            </div>
        </div>
        <div className="card col-10">
            <div className="card-body">
                <div className="md-form">
                    <input value="74352136" type="text" id="numberdni" className="form-control"/>
                    <label for="numberdni">Número de Documento</label>                    
                </div>
                <label for="exampleForm2"></label>
                <input type="text" id="exampleForm2" className="form-control"/>
            </div>
        </div>
        <div className="card col-10">
            <div className="card-body">
                <label for="exampleForm2">Ocupación u Oficio</label>
                <input type="text" id="exampleForm2" className="form-control"/>
            </div>
        </div>
        <div className="card col-10">
            <div className="card-body">
                <label for="exampleForm2">Celular</label>
                <input type="text" id="exampleForm2" className="form-control"/>
            </div>
        </div>
    </div>
);

export default UserInformation