import React from 'react';
import { connect } from 'react-redux';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { setCurrentPlace } from '../../store/actions/index';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            places: []
        };
    }
    componentDidMount() {
        axios({
            url: "/api/fire/list",
            method: 'GET'
        }).then((res) => {
            console.log(res.data);
            this.setState({places: res.data});
        });
    }
    componentDidUpdate() {
        axios({
            url: "/api/fire/list",
            method: 'GET'
        }).then((res) => {
            this.setState({places: res.data});
        });
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
                    {this.state.places.map((place, key) => {
                        if (place.status === "SAFE" || place.status === "PUTOUT") var url = "http://maps.google.com/mapfiles/ms/micons/green.png";
                        else if (place.status === "CONTAIN") url = "http://maps.google.com/mapfiles/ms/micons/orange.png";
                        else url = "http://maps.google.com/mapfiles/ms/micons/red.png";
                        return (
                            <Marker
                            key={key}
                            icon={{
                                url: url
                            }}
                            position={{ lat: Number(place.latitude), lng: Number(place.longitude), }}
                            onClick={() => {this.onClickMarker(place.id)}} >
                                { this.state.selected === place.id && (
                                    <InfoWindow
                                    position={{lat: Number(place.latitude), lng: Number(place.longitude)}} >
                                        <Link 
                                        to={{
                                            pathname: `/camlist/${place.id}`,
                                            state: {
                                                id: place.id,
                                                name: place.building_name,
                                                addr: place.address
                                            }
                                        }}
                                        style={{ textDecoration: 'none' }}>
                                            <div style={{ background: 'white', color: 'black', padding: 5, borderRadius: 20, alignItems: 'center' }}>
                                                <h2>{place.building_name}</h2>
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