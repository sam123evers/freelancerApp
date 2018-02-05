import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

/*redux-promise middleware will clean up code a little bit*/

/*The state of the app is an object in the store*/
/*Change state using actions*/
/*reducer acts on store to make changes*/

/*put reducer in its own file*/



const initialState = {
	fetching: false,
	fetched: false,
	freelancers: [],
	error: null
};

{/*PUT REDUCER INTO ITS OWN FILE AND IMPORT*/}
{/*ONE REDUCER FILE IMPORTS INDIVIDUAL REDUCERS WHERE THE REDUCER LOGIC LIVES*/}
const reducer = (state=initialState, action) => {
	switch (action.type) {
		case "FETCH_FREELANCERS_START": {
			return Object.assign({}, state, {
				fetching: true
			})
			console.log(state)
			break;
		}
		case "FETCH_FREELANCERS_ERROR": {
			return Object.assign({}, state, {
				fetching: false,
				error: action.payload
			})
			break;
		}
		case "RECEIVE_FREELANCERS": {
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				freelancers: action.payload
			})
			console.log(action.payload)
			break;
		}
	}
	return state;
}

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducer, middleware);


store.dispatch((dispatch) => {
	dispatch({type: "FETCH_FREELANCERS_START"})
		axios.get('/api/freelancers')
			.then((response) => {
				// console.log(response)
				dispatch({type: "RECEIVE_FREELANCERS", payload: response.data })
		})
		.catch((err) => {
			dispatch({type: "FETCH_FREELANCERS_ERROR", payload: err})
		})
})
{/*pass an object in the payload*/}


export default store