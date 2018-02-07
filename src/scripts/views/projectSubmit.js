import React from 'react';
import ACTIONS from './../actions'

class ProjectSubmit extends React.Component {
	handleProjectSubmit(e) {
		e.preventDefault();
		var f = e.target;
		if(f.projectName.value === "" || f.projectOwner.value === "") {
			return alert('project must have name and owner values')
		}
		//Gathering the info from the form and saving it as an object
		var projectInfo = {
			name: f.projectName.value,
			owner: f.projectOwner.value,
			milestones: f.milestone.checked
		};
		//sending the form info to actions to be posted with axios to DB
		ACTIONS.postProject(projectInfo);
		f.reset();
	}

	render() {
		return (
			<div className="project-submit-view">
				<h1>ProjectSubmitView</h1>
				<form onSubmit={this.handleProjectSubmit}>
					<label htmlFor="projectName">Project Name:
						<input id="projectName" type="text" name="projectName" placeholder="project name"></input>
					</label>
					<label htmlFor="projectOwner">Project Owner:
						<input id="projectOwner" type="text" name="projectOwner" placeholder="project owner"></input>
					</label>
					<label htmlFor="milestone">Satisfied? (Y/N):
						<input id="milestone" type="checkbox" name="milestone"></input>
					</label>
					<input type="submit"></input>
				</form>
			</div>
		)
	}
}
					
					

export default ProjectSubmit