import React from 'react'
import ACTIONS from './../actions'

class Customers extends React.Component {
	handleSearch(e) {
		e.preventDefault();
		var s = e.target;
		//gathering search parameters as object
		var desiredSkills = {
			html: s.html.checked,
			css: s.css.checked,
			js: s.js.checked,
			blockchain: s.blockchain.checked,
			hi5: s.hi5.checked
		};
		ACTIONS.getFreelancersBySkill(desiredSkills);
		// console.log(desiredSkills);
	}
	render() {
		return (
			<div className="customers">
				<h1>Customer Registration</h1>
				<h3>Register As a Customer</h3>
				<form>
					<input type="text" placeholder="your name"></input>
					<input type="text" placeholder="your email"></input>
					<input type="text" placeholder="create password"></input>
					<input type="submit"></input>
				</form>

{/*Search Freelancers By Skills Should Be Placed in freelancerList.js*/}			
				<h1>Search Freelancers by Skill</h1>
				<p>(once customer is logged in)</p>
				<form onSubmit={this.handleSearch}>
					<label htmlFor="html">HTML: 
						<input id="html" name="skillSearch" type="checkbox"></input>
					</label>
					<label htmlFor="css">CSS:
						<input id="css" name="skillSearch" type="checkbox"></input>
					</label>
					<label htmlFor="javascript">Javascript:
						<input id="js" name="skillSearch" type="checkbox"></input>
					</label>
					<label htmlFor="blochchain">BlockChain:
						<input id="blockchain" name="skillSearch" type="checkbox"></input>
					</label>
					<label htmlFor="hi5">Hi-Fives:
						<input id="hi5" name="skillSearch" type="checkbox"></input>
					</label>

					<input type="submit"></input>
				</form>
			</div>
		)
	}
}

export default Customers