import React from 'react';

import MapOnce from '../map/MapOnce';

const OngoingDetail = (props) => {
    return (
          <div
            style={{ padding: "20px" }}>
            <div style={{display: "flex"}}>
                <MapOnce lat={props.lat} lng={props.lng} ></MapOnce>
                <div>
                    <p>{props.name}</p>
                    <p>{props.address}</p>
                </div>
            </div>
          </div>
        );
}

export default OngoingDetail;