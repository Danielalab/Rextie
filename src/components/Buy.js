import React from 'react';

const Buy = ({navigateTo, dataBuySell, operations, operationsReverse, operationsClick}) => (  
  <div>
    <br/>
    <form>
      <div className="row align-items-end">
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm2">Comprar</label>
          <h3 className="title-cuenta-rextie d-flex align-items-center change">Dólares</h3>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm1">Cantidad</label>
          <input type="text" className="form-control" value={dataBuySell[0].quantity} placeholder={dataBuySell[0].quantity} onChange={(event)=> operations(event.target.value, dataBuySell[0].id)} id="exampleForm1"/>
        </div>
        <div className="col-12 col-sm-1 text-sm-center text-md-left my-sm-3">
          <p className="text-center font-operator align-text-bottom m-0 color-3">X</p>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm2">Precio por USD</label>
          <input type="text" className="form-control disabled disabled-input " value={dataBuySell[0].priceUSD} id="exampleForm2"/>
        </div>
        <div className="col-12 col-sm-1 text-sm-center text-md-left my-sm-3">
          <p className="text-center font-operator align-text-bottom m-0 color-3">=</p>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <label className="font-weight-bold" for="exampleForm2">PEN a gastar</label>
          <input type="text" className="form-control" value={dataBuySell[0].PEN} placeholder={dataBuySell[0].PEN} onChange={(event)=> operationsReverse(event.target.value, dataBuySell[0].id)} id="exampleForm2"/>
        </div>
        <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
          <button type="button" className="btn btn-success" onClick={()=> {navigateTo('confirmation'); operationsClick(dataBuySell[0])}}>COMPRAR</button>
        </div>
      </div>
    </form>
    <br/>
    <div className="d-flex justify-content-center">
      <h5>Ahorra S/. {dataBuySell[0].saving} respecto al banco</h5>
    </div>
    <div className="d-flex justify-content-center">
      <p>Tipo de cambio vigente hasta 22:14</p>
    </div>
  </div>
)

export default Buy;