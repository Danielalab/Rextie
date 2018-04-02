import React from 'react';

const FinalTransaction= ({ navigateTo, dataClick }) => (
  <div className="container-fluid">
    <div  className="row justify-content-center">
      <div className="card col-11 col-md-9 p-3 my-5">
        <div className="card-body">
          <p className="card-text">Tu operación con código N° 12 ha sido registrada con éxito el día . 
            Deberás realizar la transferencia en un máximo de 15 minutos para mantener el tipo de cambio acordado. Debes relizar sólo 2 pasos 
            para culminar tu operación.</p>
          <h5 className="card-title color-2 font-weight-bold font-size-title">Paso 1: Deposita tu dinero a una cuenta de Rextie</h5>
          <div className="row justify-content-center">
          <ul className="col-5 col-md-5">
              <li className="font-size-regular">Cantidad a transferir:</li>
              <li className="font-size-regular">Desde tu Banco:</li>
              <li className="font-size-regular">Al Banco de Rextie:</li>
              <li className="font-size-regular"># de cuenta de Rextie:</li>
              <li className="font-size-regular">Titular de la cuenta:</li>
              <li className="font-size-regular">RUC del titular:</li>
          </ul>
          <ul className="col-5 col-md-5">
              <li className="font-size-regular">{('COMPRA' === dataClick.id) ? 'S/ ' + dataClick.PEN : '$ ' + dataClick.quantity}</li>
              <li className="font-size-regular">Scotiabank</li>
              <li className="font-size-regular">Interbank</li>
              <li className="font-size-regular">00316600300127342868</li>
              <li className="font-size-regular">REXTIE SAC</li>
              <li className="font-size-regular">20601030013</li>
          </ul>
          </div>     
          <h5 className="card-title color-2 font-weight-bold font-size-title">Paso 2: Rextie enviará a la cuenta de Destino el tipo de cambio realizado.</h5> 
          <div className="row justify-content-center">
          <ul className="col-5 col-md-5">
              <li className="font-size-regular">Cantidad a transferir:</li>
              <li className="font-size-regular">Tipo de cambio:</li>
              <li className="font-size-regular">Banco de Destino:</li>
              <li className="font-size-regular"># de cuenta de Destino:</li>
              <li className="font-size-regular">Titular de la cuenta:</li>
          </ul>
          <ul className="col-5 col-md-5">
              <li className="font-size-regular">{('COMPRA' === dataClick.id) ? '$ ' + dataClick.quantity : 'S/ ' + dataClick.PEN}</li>
              <li className="font-size-regular">{dataClick.priceUSD}</li>
              <li className="font-size-regular">BCP</li>
              <li className="font-size-regular">00316600300127342868</li>
              <li className="font-size-regular">Betsy Vidal</li>
          </ul>
          </div>                         
          <div className="row justify-content-center">
            <a className="btn btn-success" onClick={()=> navigateTo('transaction')}>Finalizar Operación</a>          
          </div>
        </div>
      </div>
    </div>
  </div>  
);

export default FinalTransaction;