import { actionTypes } from '../actions/actions';

const dataBuySell = [
  {id: 'comprar' , quantity: 20, priceUSD: 3.2380, PEN: 64.76, saving: 0.92},
  {id: 'vender', quantity: 20, priceUSD: 3.1900, PEN: 63.80, saving:  0.92}
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
          if ('comprar' === action.id) {
            let priceUSD = change.priceUSD;

            change.quantity = action.val
            const changeSpendPEN = change.quantity * priceUSD;
            change.PEN = changeSpendPEN;
          } else if ('vender' === action.id) {
            let priceUSD = change.priceUSD;

            change.quantity = action.val
            const changeReceivePEN = change.quantity * priceUSD;
            change.PEN = changeReceivePEN;
          }
          return change;
        })
      }
    default:
      return state;
  }
}