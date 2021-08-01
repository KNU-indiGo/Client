import { Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNav from '../components/nav/TopNav';
import OngoingDetail from '../components/detail/OngoingDetail';
import BottomNav from '../components/nav/BottomNav';

class OngoingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }
    componentDidMount() {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list/contain",
            method: 'GET'
        }).then((res) => {
            console.log(res.data);
            this.setState({ locations: res.data });
        });
    }
    componentDidUpdate() {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list/contain",
            method: 'GET'
        }).then((res) => {
            this.setState({ locations: res.data });
        });
    }
    render() {
        return (
            <Panel style={{ background: 'white', color: 'black' }}>
                <Scroller>
                    <TopNav
                        title="Ongoing List" />
                    <div style={{ justifyContent: "space-around", alignItems: "center", textAlign: "center", color: "black" }}>
                        {this.state.locations.map((place, key) => {
                            return (
                                <Link 
                                to={{
                                    pathname: `/camlist/${place.id}`,
                                    state: {
                                        name: place.building_name,
                                        addr: place.address
                                    }
                                }}
                                style={{ textDecoration: 'none' }}>
                                    <OngoingDetail key={key} id={place.id} name={place.building_name} address={place.address} lat={Number(place.latitude)} lng={Number(place.longitude)}></OngoingDetail>
                                </Link>
                            )
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
                    <BottomNav />
                </Scroller>
            </Panel>
        )
    }
}

export default ThemeDecorator(OngoingList);