import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, InfoWindow, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LS2Request from '@enact/webos/LS2Request';

import { setCurrentPlace } from '../../store/actions/index';

const Map = (props) => {
    const [selected, setSelected] = useState(0);
    const [places, setPlaces] = useState([]);
    const [center, setCenter] = useState({ lat: 35.881484731213445, lng: 128.6035298597616 });
    const [breakoutNum, setBreakoutNum] = useState(0);

    var webOSBridge = new LS2Request();
    const onToastSuccess = (msg) => {
        console.log(msg);
    }
    const onToastFailure = (msg) => {
        console.log(msg);
    }

    useEffect(() => {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com/api/fire/list",
            method: 'GET'
        }).then((res) => {
            setPlaces(res.data);
        });
        var temp = 0;
        places.map((place) => {
            if (place.status === "BREAKOUT") {
                temp += 1;
            }
        });
        if (temp !== breakoutNum) {
            setBreakoutNum(temp);
            var parms = {
                "message": "Fire Detected !!!!"
            }
            var lsRequest = {
                "service":"luna://com.webos.notification",
                "method":"createToast",
                "parameters": parms,
                "onSuccess": onToastSuccess,
                "onFailure": onToastFailure
            };
            webOSBridge.send(lsRequest);
        }
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
                                            addr: place.address,
                                            image_url: place.image_url,
                                            back_history: 1
                                        }
                                    }}
                                    style={{ textDecoration: 'none' }}>
                                    <div style={{ 
                                        background: 'white', 
                                        color: 'black', 
                                        padding: 5, 
                                        borderRadius: 20,
                                        alignItems: 'center', }}>
                                        <h2>{place.building_name}</h2>
                                        <div style={{ fontSize: "15px" }}>{place.address}</div>
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