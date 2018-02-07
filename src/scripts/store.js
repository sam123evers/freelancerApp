import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import freelancerSkillsReducer from './freelancerSkillsReducer';
import freelancerReducer from './freelancerReducer';


const masterReducer = combineReducers({ allFreelancers: freelancerReducer, 
										freelancersBySkill: freelancerSkillsReducer
});

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(masterReducer, middleware);


store.dispatch((dispatch) => {
	dispatch({type: "FETCH_FREELANCERS_START"})
		axios.get('/api/freelancers')
			.then((response) => {
				dispatch({type: "RECEIVED_FREELANCERS_ALL", payload: response.data })
		})
		.catch((err) => {
			dispatch({type: "FETCH_FREELANCERS_ERROR", payload: err})
		})
})
{/*pass an object in the payload*/}


export default store