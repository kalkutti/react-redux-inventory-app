import { combineReducers } from 'redux';

// combine all your reducers into one root reducer
import shop from './shop';

const rootReducer = combineReducers({
	shop
});

export default rootReducer;