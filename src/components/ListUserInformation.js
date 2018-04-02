import React from 'react';

const ListUserInformation = ({id, value, label, user, changeDataUser}) => (
  <div className="card col-10 card-border">
    <div className="card-body">
      <div className="md-form">
        <input value={value} type="text" id={id} className="form-control" onChange={(event)=> changeDataUser(event.target.value, id)}/>
        <label className="active" htmlFor={id}>{label}</label>
      </div>
    </div>
  </div>
)

export default ListUserInformation;