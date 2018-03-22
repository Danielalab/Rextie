import React from 'react';

const FinalTransaction= ({ navigateTo }) => (
  <div className="container-fluid">
    <div  className="row justify-content-center">
      <div className="card col-11 col-md-10 p-0 m-5">
        <div className="card-body">
          <p className="card-text">Tu operación con código N° 12 ha sido registrada con éxito el día { 
            () => {
              const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
              const f=new Date();
              return(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
            } }. 
            Deberás realizar la transferencia en un máximo de 15 minutos para mantener el tipo de cambio acordado. Debes relizar sólo 2 pasos 
            para culminar tu operación.</p>
          <h5 className="card-title color-2">Paso 1: Deposita tu dinero a una cuenta de Rextie</h5>
          <div className="row justify-content-center">
          <ul className="col-5 col-md-5">
              <li>Cantidad a transferir:</li>
              <li>Tu Banco:</li>
              <li>Banco de Destino:</li>
              <li># de cuenta de Rextie:</li>
              <li>Titular de la cuenta:</li>
              <li>RUC del titular:</li>
          </ul>
          <ul className="col-5 col-md-5">
              <li>S/ 2,000.00 PEN</li>
              <li>Scotiabank</li>
              <li>Interbank</li>
              <li>00316600300127342868</li>
              <li>REXTIE SAC</li>
              <li>20601030013</li>
          </ul>
          </div>     
          <h5 className="card-title color-2">Paso 2: Rextie enviará a tu cuenta el tipo de cambio</h5> 
          <div className="row justify-content-center">
          <ul className="col-5 col-md-5">
              <li>Cantidad a transferir:</li>
              <li>Tipo de cambio:</li>
              <li>Banco de Destino(cuenta donde se realizará el deposito):</li>
              <li># de cuenta de Destino:</li>
              <li>Titular de la cuenta:</li>
          </ul>
          <ul className="col-5 col-md-5">
              <li>$ 609.01 USD</li>
              <li>3.2840</li>
              <li>BCP</li>
              <li>00316600300127342868</li>
              <li>Betsy Vidal</li>
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