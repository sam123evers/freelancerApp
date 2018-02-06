import React from 'react'

class Customers extends React.Component {
	handleSearch(e) {
		e.preventDefault();
		var skillSearch = e.target.skillSearch.checked;
		console.log(skillSearch);
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
				<h1>Search Freelancers by Skill</h1>
				<p>(once customer is logged in)</p>
				<form onSubmit={this.handleSearch}>
					<input name="skillSearch" type="checkbox"></input>
					<input type="submit"></input>
				</form>
			</div>
		)
	}
}

export default Customers