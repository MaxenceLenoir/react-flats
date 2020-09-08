/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div className="marker" />;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488
    },
    zoom: 11
  };

  render() {
    const { flat } = this.props;
    if (flat) {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={{ lat: flat.lat, lng: flat.lng }}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={flat.lat}
              lng={flat.lng}
            />
          </GoogleMapReact>
        </div>
      );
    }
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={0}
            lng={0}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
