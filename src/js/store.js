import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';

// get the global reducer
import rootReducer from './reducers/index';

// load external data if needed
// import messages from "./data/data.js";
const user = false;

// defualt data goes here..
const defaultState = {
	shop : []
};

const middleware = [ thunk ]

// create the store
const store = createStore(
	rootReducer, 
	defaultState, 
	applyMiddleware(...middleware)
);

// auto refresh our module.
if (module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer)
	});
}

export default store;