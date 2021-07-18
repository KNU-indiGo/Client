import React, {useEffect, useState} from "react";
import GoogleMap from "google-map-react";
import { Panel, Header } from "@enact/sandstone/Panels";

const Map = () => {
    const [lat, setLat] = useState(35.8856424);
    const [lng, setLng] = useState(128.61360539999998);

    const locations = [
        {place: "경북대", lat: 35.8856424, lng: 128.61360539999998},
        {place: "떠콜", lat: 35.885442, lng: 128.615533},
        
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
        var infowindow = new maps.InfoWindow();
        const markers = locations.map((location, i) => {
            var marker = new maps.Marker({
                position: location,
                map,
              });
            maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    //html로 표시될 인포 윈도우의 내용
                    infowindow.setContent(locations[i].place);
                    //인포윈도우가 표시될 위치
                    infowindow.open(map, marker);
                }
            })(marker, i));
            
            if (marker) {
                marker.addListener('click', function() {
                    //중심 위치를 클릭된 마커의 위치로 변경
                    map.setCenter(this.getPosition());
                    //마커 클릭 시의 줌 변화
                    map.setZoom(14);
                });
            }
            return marker;
        });
        
    };
    
    return (
        <Panel>
            <Header
            title="Smart Fire Detection System"
            subtitle="Daegu Buk-gu Fire Station" />
            <div className="map">
                <GoogleMap 
                    bootstrapURLKeys = {{ key: 'AIzaSyAX0U6fBgIYro-7l8_xJWpAoi0PqbnmgEM', libraries: 'places' }}
                    style={mapStyles}
                    defaultZoom={15}
                    defaultCenter={{ lat: lat, lng: lng }}
                    onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMap>
            </div>
        </Panel>
    );
};

export default Map;