import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Link } from 'react-router-dom';

import TopNav from '../components/TopNav';
import CompleteDetail from '../components/CompleteDetail';

const CompleteList = kind({
    name: 'complete_list',

    render: (props) => (
        <Panel {...props} style={{background: 'white', color: 'black'}}>
            <Scroller>
            <TopNav
            title="Complete List"/>
              <div style={{ justifyContent: "space-around", alignItems: "center", textAlign: "center" }}>
                {locations.map((place, key) => {
                  return <CompleteDetail key={key} name={place.name} address={place.address} lat={place.lat} lng={place.lng}></CompleteDetail>;
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
            </Scroller>
        </Panel>
    )
});

const locations = [
    {id: 1, name: "푸른병원", lat: 35.876599356576506, lng: 128.5889647916545, address: "대구광역시 중구 태평로 102"},
    {id: 2, name: "홍인치과의원", lat: 35.879694136720566, lng: 128.59282717239168, address: "대구광역시 북구 칠성남로 101"},
    {id: 3, name: "부부연합속내과의원", lat: 35.8779667, lng: 128.5835794, address: "대구광역시 북구 중앙대로 528"},
    {id: 4, name: "정태훈내과의원", lat: 35.88028526072072, lng: 128.59608873820915, address: "대구광역시 북구 중앙대로 522"},
];

export default ThemeDecorator(CompleteList);