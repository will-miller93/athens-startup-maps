import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from '../../components/navbar/navbar';

class MapPage extends Component {
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
                <Navbar />
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyD_AMMReRmbmb1mpMkc1jX1RWNG6xqu9Ao" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <AnyReactComponent
                        lat={33.948059}
                        lng={-83.377304}
                        text={'Yo!'}
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapPage;