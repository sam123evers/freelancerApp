import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import init from './init'
import Home from './views/home'
import Freelancers from './views/freelancers'
import Customers from './views/customers'
import FreelancerList from './views/freelancerList'
import ProjectSubmit from './views/projectSubmit'

//Render the app in the div element with the ID of 'root'
const app = () => {
	ReactDOM.render(<Provider store={store}>
		<Main />
	</Provider>, document.getElementById('root'))
}

//The Main Component contains all components and hashroutes for the app
class Main extends React.Component {
	render() {
		return (
			<HashRouter>
				<div className="main">
					<h1>MicroConsulting App</h1>
					<ul>
						<li><NavLink to="/home">Home</NavLink></li>
						<li><NavLink to="/freelancers">Freelancer Registration</NavLink></li>
						<li><NavLink to="/customers">Customer Registration</NavLink></li>
						<li><NavLink to="/listFreelancers">List of Freelancers</NavLink></li>
						<li><NavLink to="/projectSubmit">Submit Project</NavLink></li>
					</ul>
					<div className="content">
						<Route path="/home" component={Home} />
						<Route path="/freelancers" component={Freelancers} />
						<Route path="/customers" component={Customers} />
						<Route path="/listFreelancers" component={FreelancerList} />
						<Route path="/projectSubmit" component={ProjectSubmit} />
					</div>
				</div>
			</HashRouter>
		)
	}
}



  


// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..