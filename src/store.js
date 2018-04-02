import { createStore, combineReducers, applyMiddleware } from 'redux';
import AppReducer from './reducers/reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  AppReducer,
});

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(
  rootReducer,
  // inyectamos la capacidad de usar Redux Dev Tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;