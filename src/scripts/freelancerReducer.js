
const initialState = {
	fetching: false,
	fetched: false,
	freelancers: [],
	error: null
};

const freelancerReducer = (state=initialState, action) => {
	switch (action.type) {
		case "FETCH_ALL_FREELANCERS_START": {
			return Object.assign({}, state, {
				fetching: true
			})
			console.log(state)
			break;
		}
		case "FETCH_ALL_FREELANCERS_ERROR": {
			return Object.assign({}, state, {
				fetching: false,
				error: action.payload
			})
			break;
		}
		case "RECEIVED_ALL_FREELANCERS": {
			return Object.assign({}, state, {
				fetching: false,
				fetched: true,
				freelancers: action.payload
			})
			break;
		}
	}
	return state;
}

export default freelancerReducer

