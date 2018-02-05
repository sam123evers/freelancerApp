import React from 'react'
import { connect } from 'react-redux'
import ACTIONS from './../actions'

@connect((store) => {
	return {
		freelancers: store.freelancers
	}
})
class FreelancerList extends React.Component {
	render() {
		return (
	      	<ul>
	      		{this.props.freelancers.map((freelancer) => 
	      				<li key={freelancer._id}>{freelancer.name}</li>
	      			) 
	      		
	      		}
	      	</ul>
        );
    }
}

	
	

export default FreelancerList