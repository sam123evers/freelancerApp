import React from 'react'

class Customers extends React.Component {

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
			</div>
		)
	}
}

export default Customers