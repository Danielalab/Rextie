import { actionTypes } from '../actions/actions';

const dataBuy = {id: 'comprar' , quantity: 20, priceUSD: 3.2380, spendPEN: 64.76, saving: 0.92}

const dataSell = {id: 'vender', quantity: 20, priceUSD: 3.1900, receivePEN: 63.80, saving:  0.92}

const INITIAL_STATE = {
  dataBuy: dataBuy,
  dataSell: dataSell,
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
    default:
      return state;
  }
}