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
import GoBackButton from '../components/button/GoBackButton';
import BottomNav from '../components/nav/BottomNav';

const CamList = (props) => {
    const [building, setBuilding] = useState([])

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

    return(
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav 
            title={props.location.state.name} 
            subtitle={props.location.state.addr} />
            <Scroller>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", textAlign: "center" }}>
                {cams.map((cam, key) => {
                  return <CamDetail key={key} id={cam.id} name={cam.name}></CamDetail>;
                })}
              </div>
              <GoBackButton />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <StatisticsButton id={building.id} />
                  {(building.status === "BREAKOUT") ? <OngoingButton/> : ((building.status === "CONTAIN") ? <CompleteButton/> : "")}
              </div>
              <BottomNav/>
              </Scroller>
        </Panel>
    )
}

const cams = [
  {id: 1, name: "cam1"},
  {id: 2, name: "cam2"},
  {id: 3, name: "cam3"}
]

export default ThemeDecorator(CamList);