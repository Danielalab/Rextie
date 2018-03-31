import React from 'react';

const Sell = ({navigateTo, dataSell}) => (
  <div>
    <br/>
    <form>
      <div className="row align-items-end">
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm2">Vender</label>
          <input type="text" className="form-control disabled disabled-input " placeholder="USD" id="exampleForm2"/>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm1">Cantidad</label>
          <input type="text" className="form-control" value={dataSell.quantity} id="exampleForm1"/>
        </div>
        <div className="col-12 col-sm-1 text-sm-center text-md-left my-sm-3">
          <p className="text-center font-operator align-text-bottom m-0 color-3">X</p>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm2">Precio por USD</label>
          <input type="text" className="form-control disabled disabled-input " value={dataSell.priceUSD} id="exampleForm2"/>
        </div>
        <div className="col-12 col-sm-1 text-sm-center text-md-left my-sm-3">
          <p className="text-center font-operator align-text-bottom m-0 color-3">=</p>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm2">PEN a recibir</label>
          <input type="text" className="form-control" value={dataSell.receivePEN} id="exampleForm2"/>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <button type="button" className="btn btn-success"onClick={()=> navigateTo('confirmation')} >Success</button>
        </div>
      </div>
    </form>
    <br/>
    <div className="d-flex justify-content-center">
      <h5>Ahorra S/ {dataSell.saving} respecto al banco</h5>
    </div>
    <div className="d-flex justify-content-center">
      <p>Tipo de cambio vigente hasta 22:14</p>
    </div>
  </div>
)
export default Sell;
