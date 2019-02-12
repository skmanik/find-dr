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

		// do API stuff
		API.getDoctor(this.state.input)
			.then((doctor) => {
				let address = '';
				address = 
					doctor.recipient_primary_business_street_address_line1 + " " + 
					doctor.recipient_city + " " + doctor.recipient_state + " " +
					doctor.recipient_zip_code + " " + doctor.recipient_country;

				this.props.foundDoctor(address);
			})
			.catch((err) => {
				alert("Could not find a doctor with that name!");
			});
	};

	render() {
		return(
			<div>
				<div className="field">
					<h1 className="subtitle is-6">Enter name space separated: <em>First Middle Last</em></h1>
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