import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

// create store 
const store = createStore( rootReducer , composeWithDevTools( applyMiddleware(...middleware) ) );

// export store 
export default store;