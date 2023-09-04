import { createStore, applyMiddleware } from 'redux';
import { loggerMiddleware } from './middleware/middeware';

import { reducer } from './reducers/reducer';

export default createStore(reducer, applyMiddleware(loggerMiddleware));
