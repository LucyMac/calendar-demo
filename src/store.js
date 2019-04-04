import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let appliedMiddleware = applyMiddleware(reduxThunk);


export default function configureStore() {
 return createStore(
  rootReducer,
  composeEnhancers(appliedMiddleware)
 );
}