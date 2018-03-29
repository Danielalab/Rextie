import { actionTypes } from '../actions/actions';

const INITIAL_STATE = {
  actualPage: 'transaction',
  infoList: 'buy',
  infoHis: 'hisUSD'
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