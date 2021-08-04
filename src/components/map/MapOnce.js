import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const MapOnce = (props) => {
    const mapStyle = {
        width: props.width,
        height: props.height,
        marginLeft: "auto",
        marginRight: "auto"
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAX0U6fBgIYro-7l8_xJWpAoi0PqbnmgEM"
    });
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={15}
            center={{lat: props.lat, lng: props.lng}} >
                <Marker
                    position={{ lat: props.lat, lng: props.lng, }}>
                </Marker>
        </GoogleMap>    
    ) : <></>
}


export default MapOnce;