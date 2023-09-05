import { createStore, applyMiddleware } from 'redux';
import { loggerMiddleware } from './middleware/middeware';
import thunkMiddleWare from 'redux-thunk';

import { reducer } from './reducers/reducer';

export default createStore(
  reducer,
  applyMiddleware(loggerMiddleware, thunkMiddleWare)
);
