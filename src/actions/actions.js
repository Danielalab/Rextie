export const actionTypes = {
  NAVIGATION_TO : 'NAVIGATION_TO',
  CHANGE : 'CHANGE',
  CHANGE_HIS: 'CHANGE_HIS',
  OPERATIONS: 'OPERATIONS',
  OPERATIONS_REVERSE: 'OPERATIONS_REVERSE',
  OPERATIONS_CLICK: 'OPERATIONS_CLICK',
  LOGIN: 'LOGIN',
  DATA_USER: 'DATA_USER',
  GET_DATA_RENIEC: 'GET_DATA_RENIEC',
  VALIDATE_FORM: 'VALIDATE_FORM',
  RESET_BUTTON: 'RESET_BUTTON',
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

export const operationsReverse = (val, id) => ({
  type: actionTypes.OPERATIONS_REVERSE,
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

export const getDataReniec = (payload) => ({
  type: actionTypes.GET_DATA_RENIEC,
  payload,
});

export const validateForm = (isDisabled) => ({
  type: actionTypes.VALIDATE_FORM,
  isDisabled
})

export const resetButton = () => ({
  type: actionTypes.RESET_BUTTON
})

export const apiUser = (user) => ({
  type: actionTypes.API_USER,
  user
})