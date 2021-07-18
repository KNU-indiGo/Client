import React, {useEffect, useState} from "react";
import GoogleMap from "google-map-react";

const Map = () => {
    const [lat, setLat] = useState(35.8856424);
    const [lng, setLng] = useState(128.61360539999998);

    const locations = [
        {lat: 35.8856424, lng: 128.61360539999998},
        {lat: 35.885442, lng: 128.615533},
        
    ]

    const mapStyles = {
        width: '70%',
        height: '70%',
    };
    const showPosition = (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }
    const renderMarkers = (map, maps) => {
        const markers = locations.map((location, i) => {
            return new maps.Marker({
              position: location,
              map,
            });
        });
        
    };

    return (
        <div className="map">
            <GoogleMap 
                bootstrapURLKeys = {{ key: process.env.REACT_APP_GOOGLE_API_KEY, libraries: 'places' }}
                style={mapStyles}
                defaultZoom={15}
                defaultCenter={{ lat: lat, lng: lng }}
                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
            </GoogleMap>
        </div>
    );
};

export default Map;