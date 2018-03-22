import { actionTypes } from '../actions/actions';

const INITIAL_STATE = {
  actualPage: 'transaction',
  infoList: 'buy'
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
    default:
      return state;
  }
}