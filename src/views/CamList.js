import React, { useState, useEffect } from 'react';
import { Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import axios from 'axios';

import TopNav from '../components/nav/TopNav';
import CamDetail from '../components/detail/CamDetail';
import OngoingButton from '../components/button/OngoingButton';
import CompleteButton from '../components/button/CompleteButton';
import StatisticsButton from '../components/button/StatisticsButton';
import BottomNav from '../components/nav/BottomNav';
import { Row, Cell } from '@enact/ui/Layout';
import StreamDetail from '../components/detail/StreamDetail';

const CamList = (props) => {
    const [building, setBuilding] = useState([]);
    const [stream, setStream] = useState({});
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list",
            method: 'GET'
            }).then((res) => {
            res.data.map((place) => {
            if (place.building_name === props.location.state.name)
              setBuilding(place);
        });
      });
    })

    const handleClick = (cam) => {
      setStream(cam);
      setIsSelected(true);
      console.log(stream);
    }

    return(
        <Panel style={{background: 'white', color: 'black'}}>
        <TopNav 
          title={props.location.state.name} 
          subtitle={props.location.state.addr}
          back_history={props.location.state.back_history}
          id={props.location.state.id} />
          <Scroller>
          <Row>
            <Cell>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-around", 
                alignItems: "center", 
                textAlign: "center", 
                flexDirection: "column" }}>
                {cams.map((cam, key) => {
                  return (
                    <div key={key} onClick={() => {handleClick(cam)}}>
                      <CamDetail
                      key={key}
                      name={cam.name}/>
                    </div>
                  );
                })}
              </div>
            </Cell>
            <Cell size="50%">
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column',
                textAlign: 'center' }}>
                { isSelected ? 
                <StreamDetail cam={stream} /> :
                <div style={{ color: "gray", margin: "5rem" }}> Please select a cam </div> }
              </div>
            </Cell>
            <Cell>
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}>
              <StatisticsButton id={building.id} name={building.building_name} addr={building.address} image_url={building.image_url}/>
                  {(building.status === "BREAKOUT") ? <OngoingButton/> : ((building.status === "CONTAIN") ? <CompleteButton/> : "")}
              </div>
            </Cell>
          </Row>
          <BottomNav />
          </Scroller>
        </Panel>
    )
}

const cams = [
  {id: 1, name: "cam1"},
  {id: 2, name: "cam2"},
  {id: 3, name: "cam3"},
  /*{id: 4, name: "cam4"},
  {id: 5, name: "cam5"},
  {id: 6, name: "cam6"},
  {id: 7, name: "cam7"},
  {id: 8, name: "cam8"},
  {id: 9, name: "cam9"},
  {id: 10, name: "cam10"}*/
]

export default ThemeDecorator(CamList);