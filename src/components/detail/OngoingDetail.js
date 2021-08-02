import React from 'react';

import MapOnce from '../map/MapOnce';

const OngoingDetail = (props) => {
    return (
      <div {...props} 
            style={{ 
                width: "400px", 
                height: "100%", 
                padding: "1rem", 
                background: "white", 
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "1px 3px 8px 3px lightgray"
                }}>
                <MapOnce lat={props.lat} lng={props.lng} ></MapOnce>
                <h3>{props.name}</h3>
                {props.address}
            </div>
        );
}

export default OngoingDetail;