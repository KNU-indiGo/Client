import React, { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://210.204.38.60:8080/ws');

const StreamDetail = (props) => {
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

    return (
      <div style={{ color: "black" }}>
        <h2>{props.cam.name}</h2>
          <img
            src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
            alt="live_stream"
            style={{ width: "500px", height: "500px", marginLeft: "auto", marginRight: "auto" }}/>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            <h3 style={{ margin: "10px", fontSize: "35px", textAlign: "center" }}>
            Current Number of People:
          </h3>
          <h3 style={{ margin: "10px", textAlign: "center" }}>
            {people}
          </h3>
            </div>
      </div>
    );
}

export default StreamDetail;