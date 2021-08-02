import { Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNav from '../components/nav/TopNav';
import OngoingDetail from '../components/detail/OngoingDetail';
import BottomNav from '../components/nav/BottomNav';

const OngoingList = (props) => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/list/contain",
            method: 'GET'
        }).then((res) => {
            setPlaces(res.data);
        });
    })

    return (
        <Panel style={{ background: 'white', color: 'black' }}>
            <Scroller>
                <TopNav
                    title="Ongoing List"
                    back_history={1} />
                <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "row", alignItems: "center", textAlign: "center", color: "black", flexFlow: "wrap" }}>
                    {places.map((place, key) => {
                        return (
                            <Link
                                to={{
                                    pathname: `/camlist/${place.id}`,
                                    state: {
                                        name: place.building_name,
                                        addr: place.address,
                                        back_history: 3
                                    }
                                }}
                                style={{ textDecoration: 'none' }}>
                                <OngoingDetail key={key} id={place.id} name={place.building_name} address={place.address} lat={Number(place.latitude)} lng={Number(place.longitude)}></OngoingDetail>
                            </Link>
                        )
                    })}
                </div>
                <BottomNav />
            </Scroller>
        </Panel>
    )
}


export default ThemeDecorator(OngoingList);