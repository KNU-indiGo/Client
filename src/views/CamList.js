import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Link } from 'react-router-dom';

import CamDetail from '../components/CamDetail';

const CamList = kind({
    name: 'cam_list',

    render: (props) => (
        <Panel {...props} style={{background: 'white', color: 'black'}}>
            <Header 
            title={props.location.state.name} 
            subtitle={props.location.state.addr}/>
            <Scroller>
              <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", textAlign: "center" }}>
                {cams.map((cam, key) => {
                  return <CamDetail key={key} name={cam.name}></CamDetail>;
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

const cams = [
    {id: 1, name: "cam1"},
    {id: 2, name: "cam2"},
    {id: 3, name: "cam3"}
]

export default ThemeDecorator(CamList);