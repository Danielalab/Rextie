import { actionTypes } from '../actions/actions';

const dataBuySell = [
  {id: 'COMPRA' , quantity: 20, priceUSD: 3.2380, priceBanck: 3.2840, PEN: 64.76, saving: 0.92, typeOperation1: 'RECIBIRÁ', typeOperation2: 'ENVIARÁ'},
  {id: 'VENTA', quantity: 20, priceUSD: 3.1900, priceBanck: 3.20, PEN: 63.80, saving:  0.92, typeOperation1: 'ENVIARÁ', typeOperation2: 'RECIBIRÁ'}
]

const INITIAL_STATE = {
  dataBuySell: dataBuySell,
  actualPage: 'transaction',
  infoList: 'buy',
  infoHis: 'hisUSD',
  dataClick: dataBuySell,
  initialPage: 'login',
  user: null
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
            change.PEN = changeSpendPEN;

            const changeSaving = ((-1) * (changeSpendPEN - change.quantity * change.priceBanck)).toFixed(2);
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
    default:
      return state;
  }
}