import React, { Component } from 'react';
import API from '../../utils/API';

class Search extends Component {
	state = {
		input: "",
	};

	// input change handler
	onInput = event => this.setState({
		input: event.target.value
	});

	// submit handler
	onSearch = event => {
		event.preventDefault();
		if (this.state.input === "" || this.state.input === null || this.state.input === "undefined") {
			return;
		}

		console.log("Hi! Search clicked!");
	};

	render() {
		return(
			<div>
				<div className="field">
					<h1 className="subtitle is-6">Enter the doctor's name like so: <em>First Middle Last</em></h1>
				</div>
				<div className="field has-addons">
				  <div className="control">
				    <input className="input" type="text" placeholder="John Jacob Jingleheimer" onChange={this.onInput} />
				  </div>
				  <div className="control">
				    <a className="button is-info" onClick={this.onSearch}>
				      Submit
				    </a>
				  </div>
				</div>
			</div>
		);
	}
}

export default Search;