
const initialState = {
	fetching: false,
	fetched: false,
	freelancers: [],
	error: null
};

const freelancerSkillsReducer = (state=initialState, action) => {
	switch (action.type) {
		case "FETCH_FREELANCER_BY_SKILL_START": {
			return Object.assign({}, state, {
				fetching: true
			})
			break;
		}
		case "FETCH_FREELANCERS_BY_SKILL_ERROR": {
			return Object.assign({}, state, {
				fetching: false,
				error: action.payload
			})
			break;
		}
		case "RECEIVED_FREELANCERS_BY_SKILL": {
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

export default freelancerSkillsReducer