import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { setCurrentPlace } from '../../store/actions/index';

const Map = (props) => {
    const [selected, setSelected] = useState(0);
    const [places, setPlaces] = useState([]);
    const [center, setCenter] = useState({ lat: 35.877960, lng: 128.592334 });

    useEffect(() => {
        axios({
            url: "/api/fire/list",
            method: 'GET'
        }).then((res) => {
            setPlaces(res.data);
        });
    })

    const onClickMarker = (id) => {
        const { setCurrentPlace } = props;
        setSelected(id);
        setCurrentPlace(id);
        console.log('current place id: ' + id);
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAX0U6fBgIYro-7l8_xJWpAoi0PqbnmgEM"
    });

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={15}
            center={center} >
            {places.map((place, key) => {
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
                        onClick={() => { onClickMarker(place.id) }} >
                        {selected === place.id && (
                            <InfoWindow
                                position={{ lat: Number(place.latitude), lng: Number(place.longitude) }} >
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
    ) : <></>
}

const mapStyle = {
    width: '100%',
    height: '100%',
};

const mapStateToProps = state => ({
    current: state.set.current,
    places: state.change.places,
});

const mapDispatchToProps = dispatch => ({
    setCurrentPlace: index => dispatch(setCurrentPlace(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);