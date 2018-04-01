import React from 'react';

const ConfirmationTransaction = ({ navigateTo, typeOperation, sendTo, toReceive, moneySend, moneyReceive, telefono, dataClick}) => (
  <div className="container-fluid">
    <div className="row justify-content-center">
    <div className="card col-11 col-md-10 p-0 m-5">
    <h5 className="card-header grey lighten-3 grey-text text-center">Confirmación de datos</h5>
    <div className="card-body">
    <form>
      <div className="form-row justify-content-center">
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="operation">Tipo de Operación</label>
          <input type="text" className="form-control disabled-input disabled" id="operation" placeholder={dataClick.id}/>
        </div>
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="inputPassword4">{'Cliente ' + dataClick.typeOperation1 + ':'}</label>
          <input type="text" className="form-control disabled-input disabled" id="inputPassword4" placeholder={dataClick.quantity + ' USD'}/>
        </div>
        <div className="form-group col-11 col-md-3">
          <label className="text-uppercase" for="operation">{'Cliente ' + dataClick.typeOperation2 + ':'}</label>
          <input type="text" className="form-control disabled-input disabled" id="operation" placeholder={dataClick.PEN + ' PEN'}/>
        </div>
      </div>
      <div className="form-row justify-content-center">
        <div className="form-group col-9 col-md-8">
          <select id="inputOrigin" className="form-control">
            <option>Elige una Cuenta de Origen</option>
            <option>...</option>
          </select>
        </div>
        <div clasName="col-2 col-md-2">
          <span className="lnr lnr-plus-circle add-Account-icon m-2" onClick={() => navigateTo('addAccount')}></span>
        </div>
        <div className="form-group col-9 col-md-8">
          <select id="inputdestination" className="form-control">
            <option>Elige una Cuenta de Destino</option>
            <option>...</option>
          </select>
        </div>
        <div clasName="col-2 col-md-2">
          <span className="lnr lnr-plus-circle add-Account-icon m-2" onClick={() => navigateTo('addAccount')}></span>
        </div>
        <div className="form-group col-11 col-md-9">
          <label className="text-uppercase" for="inputAddress2">Teléfono</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder={telefono}/>
        </div>
      </div>
    </form>
    <div className="row justify-content-center">
      <a className="btn btn-back" onClick={() => navigateTo('transaction')}>Cambiar Operación</a>
      <button className="btn btn-success" onClick={() => navigateTo('final-transaction')}>Aceptar</button> 
    </div>     
    </div>
    </div>
    </div>
  </div>
)

export default ConfirmationTransaction;