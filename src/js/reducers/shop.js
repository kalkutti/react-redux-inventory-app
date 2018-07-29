import { ADD_ITEM, REMOVE_ITEM, RECIVE_DATA } from "../actions/actionCreators";

const shop = (state = {}, action) => {
	switch(action.type) {

		case RECIVE_DATA:
			return action.data;

		case ADD_ITEM:
			var item = {
				name : action.name,
				desc : action.desc,
				price : action.price,
				date : action.date,
				tax : action.tax,
				id: action.id	
			};
			state = state.concat([item]);
		    return state;
		
		case REMOVE_ITEM:
			let found = state.findIndex( (item) => item.id === action.id );
			if (found > -1) {
			 	return [
			 		...state.slice(0, found),
					...state.slice(found + 1)
			 	];
			}
			return state;
		
		default :
			return state;
	}
}

export default shop;
