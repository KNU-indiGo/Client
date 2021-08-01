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
          <div
            {...props}
            style={{ padding: "20px" }}>
            <div style={{display: "flex"}} onClick={() => { openPopup(); }}>
                <MapOnce lat={props.lat} lng={props.lng} ></MapOnce>
                <div>
                    <p>{props.name}</p>
                    <p>{props.address}</p>
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
                  주소, 화재 발생 시간, 화재 진압 시간 등..
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