import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from '../../components/navbar/navbar';

import MyGreatPlace from './my_great_place.jsx';
import MyGreatPlace2 from './my_great_place2.jsx';
import MyGreatPlace3 from './my_great_place3';

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
                <MyGreatPlace lat={33.9603887} lng={-83.3739979} text={"A"} />
                <MyGreatPlace2 lat={33.93369521} lng={-83.4409503} text={"A"} />
                {/* need to find the lat and lng of one more startup in athens */}
                <MyGreatPlace3 lat={33.958772} lng={-83.380841} text={"A"} />
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

