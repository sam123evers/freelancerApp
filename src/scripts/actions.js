// import $ from 'jquery'
import axios from 'axios'



var ACTIONS = {
	registerFreelancer: function(freelancerData) {
		console.log('actions')
		axios.post('/api/register', freelancerData).then((response) => {
			console.log(response)
			console.log('saved')
		})
	},

	getFreelancerList: function() {
		
	},

	registerCustomer: function(customerData) {
		console.log("regiCust");
		
	}
}

export default ACTIONS