export const actionTypes = {
  NAVIGATION_TO : 'NAVIGATION_TO',
  CHANGE : 'CHANGE',
  CHANGE_HIS: 'CHANGE_HIS',
  OPERATIONS: 'OPERATIONS',
  OPERATIONS_CLICK: 'OPERATIONS_CLICK',
  LOGIN: 'LOGIN',
  DATA_USER: 'DATA_USER',
  API_USER: 'API_USER'
};

export const navigationTo = (page) => ({
  type: actionTypes.NAVIGATION_TO,
  page,
});

export const navigationTran = (info) => ({
  type: actionTypes.CHANGE,
  info,
})

export const navigationTranHis = (his) => ({
  type: actionTypes.CHANGE_HIS,
  his,
})

export const operation = (val, id) => ({
  type: actionTypes.OPERATIONS,
  val,
  id
})

export const operationClick = (id) => ({
  type: actionTypes.OPERATIONS_CLICK,
  id
})

export const loginFirebase = (initialPage) => ({
  type: actionTypes.LOGIN,
  initialPage,
})

export const dataUser = (val, id) => ({
  type: actionTypes.DATA_USER,
  val,
  id
})

export const apiUser = (user) => ({
  type: actionTypes.API_USER,
  user
})