import { actionTypes } from '../actions/actions';

const INITIAL_STATE = {
  actualPage: 'transaction'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_TO:
      return { 
        ...state,
        actualPage: action.page 
      }
    default:
      return state;
  }
}