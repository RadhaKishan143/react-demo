import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}

export default configureStore
