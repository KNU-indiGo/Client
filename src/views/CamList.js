import React from 'react';
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

const cams = [
  {id: 1, name: "cam1"},
  {id: 2, name: "cam2"},
  {id: 3, name: "cam3"}
]

class CamList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            place: []
        };
    }
    componentDidMount() {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list",
            method: 'GET'
        }).then((res) => {
            res.data.map((place) => {
              if (place.building_name === this.props.location.state.name)
                this.setState({place : place});
            });
        });
    }
    componentDidUpdate() {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list",
            method: 'GET'
        }).then((res) => {
            res.data.map((place) => {
              if (place.building_name === this.props.location.state.name)
                this.setState({place : place});
            });
        });
    }

    render() {
      return(
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav 
            title={this.props.location.state.name} 
            subtitle={this.props.location.state.addr} />
            <Scroller>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", textAlign: "center" }}>
                {cams.map((cam, key) => {
                  return <CamDetail key={key} id={cam.id} name={cam.name}></CamDetail>;
                })}
              </div>
              <GoBackButton />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <StatisticsButton id={this.state.place.id}/>
                  {(this.state.place.status === "BREAKOUT") ? <OngoingButton/> : ((this.state.place.status === "CONTAIN") ? <CompleteButton/> : "")}
              </div>
              <BottomNav/>
              </Scroller>
        </Panel>
    )
}
}

export default ThemeDecorator(CamList);