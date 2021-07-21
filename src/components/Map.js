import React from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    onClickMarker(id) {
        this.setState({
            selected: id
        });
        console.log('in onClickMarker, ' + id);
    }

    render() {
        return (
            <LoadScript
            googleMapsApiKey="AIzaSyAX0U6fBgIYro-7l8_xJWpAoi0PqbnmgEM">
                <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={15}
                center={{lat: defaultLocation.lat, lng: defaultLocation.lng}} >
                    {locations.map((place, key) => {
                        return (
                            <Marker
                            key={key}
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

const locations = [
    {id: 1, name: "푸른병원", lat: 35.876599356576506, lng: 128.5889647916545, address: "대구광역시 중구 태평로 102"},
    {id: 2, name: "홍인치과의원", lat: 35.879694136720566, lng: 128.59282717239168, address: "대구광역시 북구 칠성남로 101"},
    {id: 3, name: "부부연합속내과의원", lat: 35.8779667, lng: 128.5835794, address: "대구광역시 북구 중앙대로 528"},
    {id: 4, name: "정태훈내과의원", lat: 35.88028526072072, lng: 128.59608873820915, address: "대구광역시 북구 중앙대로 522"},
    {id: 5, name: "우리내과의원", lat: 35.87935205153737, lng: 128.5977002880159, address: "대구광역시 북구 칠성로 75"},
    {id: 6, name: "닥터굿재활의학과의원", lat: 35.87166136705462, lng: 128.59445795519594, address: "대구광역시 중구 국채보상로 582 미도백화점"},
    {id: 7, name: "곽병원", lat: 35.87173091833863, lng: 128.58887896079779, address: "대구광역시 중구 국채보상로 531"},
    {id: 8, name: "대구임상병리과의원", lat: 35.87399130183399, lng: 128.60128149449827, address: "대구광역시 중구 공평로 103"},
];

export default Map;