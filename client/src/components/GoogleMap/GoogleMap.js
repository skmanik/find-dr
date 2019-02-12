import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from '../../utils/API';

class GoogleMap extends Component {
	state = {
		markerPosition: { lat: 39.8283, lng: -98.5795 }
	};

	componentDidUpdate(prevProps) {
		if (this.props.address !== prevProps.address) {
			this.updateMarkerPosition(this.props.address);
		}
	}

	updateMarkerPosition = address => {
		let geocoder = new window.google.maps.Geocoder();

      	geocoder.geocode({ 'address': address }, (results, status) => {
	      if (status == 'OK') {
	      	const position = {
	      		lat: results[0].geometry.location.lat(),
	      		lng: results[0].geometry.location.lng()
	      	}

	      	this.setState({ markerPosition: position });
	      	this._map.map.setCenter(position);
	      	console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());
	      } else {
	        console.log('Geocode was not successful for the following reason:', status);
	      }
      	});
	}

	render() {
		return(
			<Map google={this.props.google} zoom={6} gestureHandling={'none'} initialCenter={this.state.markerPosition} ref={map => (this._map = map)}>
				<Marker title={"Doctor's location"} name={"Doctor"} position={this.state.markerPosition} />
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAeRU5lU2MMAfjOMvLjjVtDWEerfwldkwM'
})(GoogleMap);