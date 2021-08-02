import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Popup from '@enact/sandstone/Popup';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://210.204.38.60:8080/ws');

const CamDetail = (props) => {
    const [open, setOpen] = useState(false);
    const [people, setPeople] = useState(0);

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            setPeople(dataFromServer);
        }
    })

    const openPopup = () => {
        setOpen(true);
        console.log("open popup");
    }

    const closePopup = () => {
        setOpen(false);
        console.log("close popup");
    }
    
    return (
      <div style={{ padding: "20px", color: "black" }}>
        <img
          src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
          alt="cam_detail"
          style={{ width: "200px", height: "200px" }}
          onClick={() => {
            openPopup();
          }}/>
        <div>{props.name}</div>
        <Popup
          open={open}
          position="center"
          spotlightRestrict="self-first"
          onClose={() => {closePopup();}}
          style={{ backgroundColor:"white", color: "#464D52", height: "820px", width: "720px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h1 style={{ textAlign: "center", fontSize: "45px", margin: "10px"}}>{props.name}</h1>
          <img
            src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
            alt="live_stream"
            style={{ width: "500px", height: "500px", marginLeft: "auto", marginRight: "auto" }}/>
          <h3 style={{ margin: "10px", fontSize: "35px", textAlign: "center" }}>
            Current Number of People
          </h3>
          <p style={{ margin: "10px", fontSize: "30px", textAlign: "center" }}>
            {people}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div
              style={{
                background: "#fd7567",
                color: "white",
                padding: "10px",
                borderRadius: "20px",
                width: "200px",
                margin: "10px",
                textAlign: "center",
                fontSize: "25px"
                }}
              onClick={() => {closePopup();}}>
              Close
            </div>
          </div>
        </Popup>
      </div>
    );
}

const mapStateToProps = state => ({
    current: state.set.current,
});

export default connect(mapStateToProps)(CamDetail);