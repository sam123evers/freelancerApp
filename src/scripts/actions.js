import store from './store'
import axios from 'axios'



var ACTIONS = {
	registerFreelancer: function(freelancerData) {
		console.log('actions');
		axios.post('/api/register', freelancerData).then((response) => {
			console.log(response);
			console.log('saved');
		})
	},

	getFreelancersBySkill: function(desiredSkills) {
		store.dispatch((dispatch) => {
			dispatch({ type: "FETCH_FREELANCER_BY_SKILL_START" })
			axios.get('/api/freelancers/' + desiredSkills)
			.then((response) => {
				console.log(response)
				dispatch({ type: "RECEIVED_FREELANCERS_BY_SKILL", payload: response.data })
			})
			.catch((err) => {
				dispatch({type: "FETCH_FREELANCERS_BY_SKILL_ERROR", payload: err})
			})
		})
	},

	postProject: function(projectInfo) {
		console.log("actions.postproject: ", projectInfo)
		axios.post('/api/projects', projectInfo).then((response) => {
			console.log(response);
			console.log('project saved')
		})
	},

	getFreelancerList: function() {

	},

	registerCustomer: function(customerData) {
		console.log("regiCust");
		
	}
}

export default ACTIONS