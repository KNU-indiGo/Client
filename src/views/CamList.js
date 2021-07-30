import { Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

import TopNav from '../components/TopNav';
import CamDetail from '../components/CamDetail';
import OngoingButton from '../components/OngoingButton';
import CompleteButton from '../components/CompleteButton';

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
            url: "/api/fire/list",
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
            url: "/api/fire/list",
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
              <Link to="/" style={{ textDecoration: "none", margin: "20px" }}>
                <div
                  style={{
                    background: "green",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "100px",
                  }}>
                  go back
                </div>
              </Link>
              {(this.state.place.status === "BREAKOUT") ? <OngoingButton/> : ((this.state.place.status === "CONTAIN") ? <CompleteButton/> : "")}
            </Scroller>
        </Panel>
    )
}
}



export default ThemeDecorator(CamList);