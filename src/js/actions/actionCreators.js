import axios from 'axios';

export const API_URL     = "http://localhost:3000/api";
export const SET_USER    = "SET_USER";
export const ADD_ITEM    = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const RECIVE_DATA = "RECIVE_DATA";

//-----------------------------------------------//

export const addItem = (name, desc, price, date, tax) => dispatch => {

	axios.post( API_URL + '/shop/add', { name, desc, price, date, tax })
		.then(function (response) {
			// console.log(response);
			if (response.data.id != -1)
				dispatch(onAddItem(response.data.id, name, desc, price, date, tax))
		})
		.catch(function (error) {
			console.log(error);
		});

}

export const onAddItem = (id, name, desc, price, date, tax) => ({
	type: ADD_ITEM,
	id,
	name,
	desc,
	price,
	date,
	tax
})

export const removeItem = (id) => dispatch => {

	axios.post( API_URL + '/shop/remove', { id })
		.then(function (response) {
			// console.log(response);
			if (response.data.id != -1)
				dispatch(onRemoveItem(response.data.id))
		})
		.catch(function (error) {
			console.log(error);
		});

}

export const onRemoveItem = (id) => ({
	type: REMOVE_ITEM,
	id
})

//-----------------------------------------------//

export const requestData = () => dispatch => {

	axios.get( API_URL + '/shop')
		.then(function (response) {
			// console.log(response);
			dispatch(reciveData(response.data))
		})
		.catch(function (error) {
			console.log(error);
		});

}

export const reciveData = (data) => ({
	type: RECIVE_DATA,
	data
})