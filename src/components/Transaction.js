import React from 'react';

const Transaction = () => (
  <div className="p-5">
    <ul className="nav md-pills nav-justified ">
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold active" data-toggle="tab" href="#panel11" role="tab">Comprar</a>
      </li>
      <li className="nav-item">
        <a className="nav-link border-tab text-uppercase font-weight-bold" data-toggle="tab" href="#panel12" role="tab">Vender</a>
      </li>
    </ul>
    <div className="tab-content">
      <div className="tab-pane fade in show active" id="panel11" role="tabpanel">
      <br/>
      <form>
        <div className="row align-items-end">
          <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
            <label className="font-weight-bold" for="exampleForm2">Comprando</label>
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
            <label className="font-weight-bold" for="exampleForm2">PEN a gastar</label>
            <input type="text" className="form-control" placeholder="0" id="exampleForm2"/>
          </div>
          <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
            <button type="button" className="btn btn-success">Success</button>
          </div>
        </div>
      </form>
      </div>
      <div className="tab-pane fade" id="panel12" role="tabpanel">
      <br/>
      <form>
        <div className="row align-items-end">
          <div className="col-12 col-sm text-sm-center text-md-left my-sm-3">
            <label className="font-weight-bold" for="exampleForm2">Vendiendo</label>
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
    </div>
  </div>
);

export default Transaction;