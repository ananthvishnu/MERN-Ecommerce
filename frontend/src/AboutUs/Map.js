import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '1000px',
      height: '200px',
    };

    const mapOptions = {
      mapTypeControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
      heading: 450, // Adjust the heading value to change the orientation (0 = North, 90 = East, 180 = South, 270 = West)
      tilt: 45, // Adjust the tilt value to change the viewing angle (0 = straight down, 45 = angled view, 90 = parallel to the ground)
    };

    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749,
          lng: -122.4194,
        }}
        options={mapOptions}
      >
        <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAJCBXRLXtGxYFzLM4fjdKUeUQgczb_gQw',
})(MapContainer);
