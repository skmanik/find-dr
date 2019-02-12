import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from '../../utils/API';

class GoogleMap extends Component {
	state = {
		// state
	};

	render() {
		return(
			<Map google={this.props.google} zoom={14} gestureHandling={'none'}></Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsLJHdLptNfFIwCtociECyW-S9-pj6ciM'
})(GoogleMap);