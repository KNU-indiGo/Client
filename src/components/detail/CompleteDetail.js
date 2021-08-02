import React, { useState } from 'react';
import Popup from '@enact/sandstone/Popup';

import MapOnce from '../map/MapOnce';

const CompleteDetail = (props) => {
    const [open, setOpen] = useState(false);

    const openPopup = () => {
        setOpen(true);
        console.log("open popup");
    }

    const closePopup = () => {
        setOpen(false);
        console.log("close popup");
    }
    
    return (
          <div>
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
                    }}
                onClick={() => { openPopup(); }}>
                <MapOnce lat={props.lat} lng={props.lng} ></MapOnce>
                <div>
                    <h3>{props.name}</h3>
                    {props.address}
                </div>
            </div>
            <Popup
              open={open}
              position="center"
              spotlightRestrict="self-first"
              onClose={() => { closePopup(); }}
              style={{ height: "800px", width: "800px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: "white" }}>
                    {props.name}
                </h1>
                <MapOnce lat={props.lat} lng={props.lng} ></MapOnce>
                <h3 style={{ margin: "50px", color: "white" }}>
                    {"Address : " + props.address}
                </h3>
                <h3 style={{ margin: "50px", color: "white" }}>
                    {"Fire Start Time : " + props.breakout_time}
                </h3>
                <h3 style={{ margin: "50px", color: "white" }}>
                    {"Fire End Time : " + props.putout_time}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div
                    style={{
                    background: "green",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "200px",
                    margin: "10px",
                    textAlign: "center"
                    }}
                    onClick={() => {closePopup();} }>
                        Complete
                    </div>
                    <div
                    style={{
                    background: "red",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "200px",
                    margin: "10px",
                    textAlign: "center"
                    }}
                    onClick={()=> {closePopup();} }>
                        Close
                    </div>
                </div>
            </Popup>
          </div>
        );
}

export default CompleteDetail;