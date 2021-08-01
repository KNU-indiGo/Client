import React from 'react';
import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNav from '../components/nav/TopNav';
import StatisticsDetail from '../components/detail/StatisticsDetail';
import Scroller from '@enact/ui/Scroller';
import BottomNav from '../components/nav/BottomNav';

class Statistics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buildings: [],
        };
    }

    componentDidMount() {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list",
            method: 'GET'
        }).then((res) => {
            this.setState({buildings: res.data});
        });
    }

    componentDidUpdate() {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list",
            method: 'GET'
        }).then((res) => {
            this.setState({buildings: res.data});
        });
    }

    render() {
        return (
            <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
                title="Statistics" />
            <Scroller>
                <div style={{ display:"flex", justifyContent: "space-around", flexDirection:"row", alignItems: "center", textAlign: "center", color: "black", flexFlow: "wrap"  }}>
                    {this.state.buildings.map((place, key) => {
                        return (
                        <Link 
                        to={{pathname:`/statistics/${place.id}`}}
                        style={{ textDecoration: "none", margin: "1rem" }}>
                            <StatisticsDetail 
                            key={key}
                            name={place.building_name} 
                            address={place.address} />
                        </Link>
                        )
                    })}
                </div>
            <BottomNav />
            </Scroller>
            </Panel>
        )
    }
}

export default ThemeDecorator(Statistics);