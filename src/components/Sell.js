import React from 'react';

const Sell = () => (
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
        <input type="text" className="form-control" placeholder="0" id="exampleForm1"/>
      </div>
      <div className="col-12 col-sm-1 text-sm-center text-md-left my-sm-3">
        <p className="text-center font-operator align-text-bottom m-0 color-3">X</p>
      </div>
      <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
        <label className="font-weight-bold" for="exampleForm2">Precio por USD</label>
        <input type="text" className="form-control disabled disabled-input " placeholder="0" id="exampleForm2"/>
      </div>
      <div className="col-12 col-sm-1 text-sm-center text-md-left my-sm-3">
        <p className="text-center font-operator align-text-bottom m-0 color-3">=</p>
      </div>
      <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
        <label className="font-weight-bold" for="exampleForm2">PEN a recibir</label>
        <input type="text" className="form-control" placeholder="0" id="exampleForm2"/>
      </div>
      <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
        <button type="button" className="btn btn-success">Success</button>
      </div>
    </div>
  </form>
  </div>
)
export default Sell;
