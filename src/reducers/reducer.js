import { actionTypes } from '../actions/actions';

const dataBuySell = [
  {id: 'COMPRA' , quantity: 20, priceUSD: 3.2380, priceBanck: 3.2840, PEN: 64.76, saving: 0.92, typeOperation1: 'RECIBIRÁ', typeOperation2: 'ENVIARÁ'},
  {id: 'VENTA', quantity: 20, priceUSD: 3.1900, priceBanck: 3.20, PEN: 63.80, saving:  0.92, typeOperation1: 'ENVIARÁ', typeOperation2: 'RECIBIRÁ'}
]

const dataUser = [
  {id:'nameUser', value: 'Daniela Gonzales', label: 'Nombre Completo'},
  {id:'dni', value: 'DNI', label: 'Tipo de Documento de Identidad'},
  {id:'numberdni', value: '74352136', label: 'Número de Documento'},
  {id:'mail', value: 'danielagon.998@gmail.com', label: 'Correo Electronico'},
  {id:'work', value: 'Estudiante', label: 'Ocupación u Oficio'},
  {id:'phone', value: '995526665', label: 'Celular'},
];

const INITIAL_STATE = {
  dataBuySell: dataBuySell,
  actualPage: 'transaction',
  infoList: 'buy',
  infoHis: 'hisUSD',
  dataClick: dataBuySell,
  initialPage: 'login',
  dataReniec:{},
  disabledButton: true,
  dataUser: dataUser,
  user: {name: 'Maria'},
  account: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_TO:
      return { 
        ...state,
        actualPage: action.page 
      }
    case actionTypes.CHANGE:
      return {
        ...state,
        infoList: action.info
      }
    case actionTypes.CHANGE_HIS:
      return {
        ...state,
        infoHis: action.his
      }
    case actionTypes.OPERATIONS:
      return {
        ...state,
        dataBuySell: state.dataBuySell.map(change => {
          if (change.id === action.id) {
            let priceUSD = change.priceUSD;

            change.quantity = action.val
            const changeSpendPEN = change.quantity * priceUSD;
            change.PEN = (changeSpendPEN).toFixed(2);

            const changeSaving = ((-1) * (changeSpendPEN - change.quantity * change.priceBanck)).toFixed(2);
            change.saving = changeSaving;
          }
          return change;
        })
      }
    case actionTypes.OPERATIONS_REVERSE:
      return {
        ...state,
        dataBuySell: state.dataBuySell.map(change => {
          if (change.id === action.id) {
            let priceUSD = change.priceUSD;

            change.PEN = action.val
            const changeSpendQuantity = change.PEN / priceUSD;
            change.quantity = (changeSpendQuantity).toFixed(2);

            const changeSaving = ((-1) * (change.PEN - change.quantity * change.priceBanck)).toFixed(2);
            change.saving = changeSaving;
          }
          return change;
        })
      }
    case actionTypes.OPERATIONS_CLICK:
      return {
        ...state,
        dataClick: action.id
      }
    case actionTypes.LOGIN:
      return {
        ...state,
        initialPage: action.initialPage
      }
    case actionTypes.DATA_USER:
      return {
        ...state,
        dataUser: state.dataUser.map(change => {
          if (change.id === action.id) {
            change.value = action.val
          }
          return change;
        })
      }
    case actionTypes.API_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.VALIDATE_FORM:
      return {
        ...state,
        disabledButton: action.isDisabled
      }
    case actionTypes.GET_DATA_RENIEC:
      return {
        ...state,
        dataReniec: action.payload
      }
    case actionTypes.RESET_BUTTON:
      return {
        ...state,
        disabledButton: true
      }
    case actionTypes.GET_VALUE:
      return {
        ...state,
        account: true
      }
    default:
      return state;
  }
}