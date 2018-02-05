import React from 'react'

import ACTIONS from '../actions'

class Freelancers extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		var f = e.target;
		var freelancerSkills = [];
		var radioArray = [f.html, f.css, f.js, f.blockchain, f.hi5];
		for(var i = 0; i < radioArray.length; i++) {
			if (radioArray[i].checked === true) {
				freelancerSkills.push(radioArray[i].value)
			}
		}
		var freelancerContactInfo = [f.phone_number.value, f.contact_email.value];
		console.log(f.phone_number.value)
		var freelancerData = {
			name: f.username.value,
			email: f.email.value,
			password: f.password.value,
			skills: freelancerSkills,
			contacts: freelancerContactInfo
		};
		console.log(freelancerContactInfo);
		
		ACTIONS.registerFreelancer(freelancerData);
		e.target.reset();
	}

	render() {
		return (
			<div className="freelancers">
				<h1>Freelancer Login</h1>
				<h3>Register as a freelancer</h3>
				<form name="freelancerData" onSubmit={this.handleSubmit}>
					<h4>Personal Info:</h4>
					<h1>DONT FORGET TO REQUIRE...</h1>
					<label>Name: 
						<input name="username" type="text" placeholder="enter name"></input>
					</label>
					<label>Email:
						<input name="email" type="text" placeholder="enter email"></input>
					</label>
					<label>Password: 
						<input name="password" type="text" placeholder="create password"></input>
					</label>
					
					<h4 className="freelancerSkills">Available Skills:</h4>
						<p>checkboxes do not have name attribute</p>
						<label htmlFor="html">HTML:
							<input id="html" type="checkbox" value="html"></input>
						</label>
						<label htmlFor="css">CSS:
							<input id="css" type="checkbox" value="css"></input>
						</label>
						<label htmlFor="js">Javascript:
							<input id="js" type="checkbox" value="javascript"></input>
						</label>
						<label htmlFor="blockchain">Blockchain:
							<input id="blockchain" type="checkbox" value="blockchain"></input>
						</label>
						<label htmlFor="hi5">High-Fives:
							<input id="hi5" type="checkbox" value="hi5"></input>
						</label>
					<h4>Contact Info:</h4>
					<label>Phone Number:
						<input name="phone_number" type="text" placeholder="enter phone number"></input>
					</label>
					<label>Email:
						<input name="contact_email" type="text" placeholder="contact email"></input>
					</label><br />
					<input type="submit"></input>
				</form>
				<button onClick={this.buttonClick}id="special"></button>
			</div>
		)
	}
}
					
						
					

export default Freelancers