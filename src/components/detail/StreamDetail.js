import { useState, useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/ws');

const StreamDetail = (props) => {
  const [people, setPeople] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const dataFromServer_array = message.data.split(' ');
      const peopleFromServer = JSON.parse(dataFromServer_array[0]);
      const scoreFromServer = JSON.parse(dataFromServer_array[1]);
      setPeople(peopleFromServer);
      setScore(scoreFromServer)
    }
  })

  return (
    <div style={{ color: "black" }}>
      <h2>{props.cam.name}</h2>
      <img
        src="http://121.65.177.151:8091/?action=stream"
        alt="live_stream"
        style={{ width: "500px", height: "500px", marginLeft: "auto", marginRight: "auto" }} />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <h3 style={{ margin: "10px", fontSize: "35px", textAlign: "center" }}>
          Current Number of People:
        </h3>
        <h3 style={{ margin: "10px", textAlign: "center" }}>
          {people}
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <h3 style={{ margin: "10px", fontSize: "35px", textAlign: "center" }}>
          Risk Score:
        </h3>
        <h3 style={{ margin: "10px", textAlign: "center" }}>
          {score}
        </h3>
      </div>
    </div>
  );
}

export default StreamDetail;