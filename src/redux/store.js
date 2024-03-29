import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root.reducer';
import reduxThunk from 'redux-thunk'
import { persistStore } from 'redux-persist';

const middlewares = [logger, reduxThunk];
export  const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
