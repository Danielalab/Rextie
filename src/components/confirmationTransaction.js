import React from 'react';

const ConfirmationTransaction = ({ navigateTo, typeOperation, sendTo, toReceive, moneySend, moneyReceive, telefono }) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Confirmación de datos</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="operation">Tipo de Operación</label>
          <input type="text" className="form-control disabled-input disabled" id="operation" placeholder={typeOperation}/>
        </div>
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="inputPassword4">Cliente Enviará:</label>
          <input type="text" className="form-control disabled-input disabled" id="inputPassword4" placeholder={sendTo + moneySend}/>
        </div>
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="operation">Cliente Recibirá:</label>
          <input type="text" className="form-control disabled-input disabled" id="operation" placeholder={toReceive + moneyReceive}/>
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputOrigin">Cuenta de Origen</label>
          <select id="inputOrigin" className="form-control">
            <option>Elige una Cuenta de Origen</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputdestination">Cuenta de Destino</label>
          <select id="inputdestination" className="form-control">
            <option>Elige una Cuenta de Destino</option>
            <option>...</option>
          </select>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputAddress2">Teléfono</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder={telefono}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('transaction')}>Cambiar Operación</a>
      <a className="btn btn-success" onClick={() => navigateTo('transaction')}>Aceptar</a> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default ConfirmationTransaction;