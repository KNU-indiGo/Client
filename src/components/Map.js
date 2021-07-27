import React from 'react';
import { connect } from 'react-redux';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

import { setCurrentPlace } from '../store/actions/index';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    onClickMarker(id) {
        const { setCurrentPlace } = this.props;
        this.setState({
            selected: id
        });
        setCurrentPlace(id);
        console.log('current place id: ' + id);
    }

    render() {
        const { places } = this.props;
        return (
            <LoadScript
            googleMapsApiKey="AIzaSyAX0U6fBgIYro-7l8_xJWpAoi0PqbnmgEM">
                <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={15}
                center={{lat: defaultLocation.lat, lng: defaultLocation.lng}} >
                    {places.map((place, key) => {
                        if (place.control == 0) var url = "http://maps.google.com/mapfiles/ms/micons/green.png";
                        else if (place.control == 1) url = "http://maps.google.com/mapfiles/ms/micons/orange.png";
                        else url = "http://maps.google.com/mapfiles/ms/micons/red.png";
                        return (
                            <Marker
                            key={key}
                            icon={{
                                url: url
                            }}
                            position={{ lat: place.lat, lng: place.lng, }}
                            onClick={() => {this.onClickMarker(place.id)}} >
                                { this.state.selected === place.id && (
                                    <InfoWindow
                                    position={{lat: place.lat, lng: place.lng}} >
                                        <Link 
                                        to={{
                                            pathname: `/camlist/${place.id}`,
                                            state: {
                                                name: place.name,
                                                addr: place.address
                                            }
                                        }}
                                        style={{ textDecoration: 'none' }}>
                                            <div style={{ background: 'white', color: 'black', padding: 5, borderRadius: 20, alignItems: 'center' }}>
                                                <h2>{place.name}</h2>
                                                {place.address}
                                            </div>
                                        </Link>
                                    </InfoWindow>
                                )}
                            </Marker>
                        )
                    })}
                </GoogleMap>
            </LoadScript>
        )
    }
}

const mapStyle = {
    width: '100%',
    height: '100%',
};

const defaultLocation = { 
    name: "Daegu Northern Fire Station",
    lat: 35.877960,
    lng: 128.592334
}

const mapStateToProps = state => ({
    current: state.set.current,
    places: state.change.places,
});

const mapDispatchToProps = dispatch => ({
    setCurrentPlace: index => dispatch(setCurrentPlace(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);