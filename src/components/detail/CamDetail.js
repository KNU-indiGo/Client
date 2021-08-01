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
          style={{
            height: "800px",
            width: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1 style={{ color: "white" }}>{props.name}</h1>
          <img
            src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
            alt="live_stream"
            style={{ width: "600px", height: "300px" }}/>
          <h3 style={{ margin: "50px", color: "white" }}>
            Current Number of People: {people}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <div
              style={{
                background: "red",
                color: "white",
                padding: "20px",
                borderRadius: "20px",
                width: "200px",
                margin: "10px",
                textAlign: "center",
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