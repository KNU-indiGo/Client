import React, { useState, useEffect } from 'react';
import Popup from '@enact/sandstone/Popup';
import WebFont from 'webfontloader';

import MapOnce from '../map/MapOnce';

const CompleteDetail = (props) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto']
            }
        });
    }, [])

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
                    margin: "1rem",
                    background: "white", 
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    boxShadow: "1px 3px 8px 3px lightgray",
                    fontFamily: 'Roboto'
                    }}
                onClick={() => { openPopup(); }}>
                <MapOnce lat={props.lat} lng={props.lng} width="200px" height="150px"></MapOnce>
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
              style={{ 
                  backgroundColor:"white", 
                  color: "#464D52", 
                  height: "100%px", 
                  width: "600px", 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  fontFamily: 'Roboto' }}>
                <h1 style={{ textAlign: "center", fontSize: "45px"}}>
                    {props.name}
                </h1>
                <MapOnce lat={props.lat} lng={props.lng} width={"300px"} height={"180px"}></MapOnce>
                <h3 style={{ margin: "10px", fontSize: "25px"}}>
                    {"Address"}
                </h3>
                <p style={{ margin: "10px", fontSize: "20px"}}>
                    {props.address}
                </p>
                <h3 style={{ margin: "10px", fontSize: "25px"}}>
                    {"Fire Start Time"}
                </h3>
                <p style={{ margin: "10px", fontSize: "20px"}}>
                    {props.breakout_time}
                </p>
                <h3 style={{ margin: "10px", fontSize: "25px"}}>
                    {"Fire End Time"}
                </h3>
                <p style={{ margin: "10px", fontSize: "20px"}}>
                    {props.putout_time}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div
                    style={{
                    background: "#fd7567",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    width: "100px",
                    margin: "10px",
                    textAlign: "center",
                    fontSize: "25px"
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