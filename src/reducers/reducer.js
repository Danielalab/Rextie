import { actionTypes } from '../actions/actions';

const dataBuySell = [
  {id: 'compra' , quantity: 20, priceUSD: 3.2380, PEN: 64.76, saving: 0.92},
  {id: 'venta', quantity: 20, priceUSD: 3.1900, PEN: 63.80, saving:  0.92}
]

const INITIAL_STATE = {
  dataBuySell: dataBuySell,
  actualPage: 'transaction',
  infoList: 'buy',
  infoHis: 'hisUSD',
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
          }
          return change;
        })
      }
    // case actionTypes.OPERATIONS_CLICK:
    //   return {
    //     ...state,
    //     dataBuySell: action.id
    //   }
    default:
      return state;
  }
}