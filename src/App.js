import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {

  static defaultProps = {
    center: {
      lat: 33.948059,
      lng: -83.377304
    },
    zoom: 13
  };
  render() {
    return (
      // Important! Always set the container height explicitly
     <div style={{ height: '100vh', width: '100%' }}>
     <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD_AMMReRmbmb1mpMkc1jX1RWNG6xqu9Ao" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         <AnyReactComponent
           lat={33.948059}
           lng={-83.377304}
           text={'Yo!'}
         />
       </GoogleMapReact>
     </div>
    );
  }
}

export default App;
