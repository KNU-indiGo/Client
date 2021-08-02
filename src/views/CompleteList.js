import React, { useState, useEffect } from 'react';
import { Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TopNav from '../components/nav/TopNav';
import CompleteDetail from '../components/detail/CompleteDetail';
import BottomNav from '../components/nav/BottomNav';
import GoBackButton from '../components/button/GoBackButton';

const CompleteList = (props) => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        axios({
          url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list/put-out",
          method: 'GET'
          }).then((res) => {
            setPlaces(res.data);
        });
    })
    
    return (
        <Panel style={{background: 'white', color: 'black'}}>
            <Scroller>
            <TopNav
            title="Complete List"/>
              <div style={{ justifyContent: "space-around", alignItems: "center", textAlign: "center", color: "black", backgroundColor: "#e6e6e6", borderRadius: "20px"}}>
                {places.map((place, key) => {
                  return <CompleteDetail key={key} name={place.building_name} address={place.address} lat={Number(place.latitude)} lng={Number(place.longitude)} breakout_time={place.breakOutTime} putout_time={place.putOutTime}></CompleteDetail>;
                })}
              </div>
              <GoBackButton />
              <BottomNav />
            </Scroller>
        </Panel>
      )
}

export default ThemeDecorator(CompleteList);