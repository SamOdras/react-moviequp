import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import reduxThunk from 'redux-thunk'

const middlewares = [logger, reduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;