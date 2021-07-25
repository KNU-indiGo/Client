import kind from '@enact/core/kind';
import Panels, { Header, Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Scroller from '@enact/sandstone/Scroller';

import Map from '../components/Map';

const Main = kind({
    name: 'main',

    render: () => (
        <Panel style={{backgroud: 'white', color: 'black'}}>
            <Header
            title="Smart Fire Detection System"
            subtitle="Daegu Northern Fire Station" />
            <Scroller>
                <Link to="/Statistics" style={{ textDecoration: "none", margin: "20px" }}>
                    <div
                    style={{
                        background: "green",
                        color: "white",
                        padding: "20px",
                        borderRadius: "20px",
                        width: "100px",
                    }}>
                    Statistics
                    </div>
                </Link>
                <Link to = "/completelist" style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'white', color: 'black', padding: 5, borderRadius: 20, alignItems: 'center' }}>
                        CompleteList
                    </div>
                </Link>
                <Map></Map>
            </Scroller>
        </Panel>
    )
});

export default ThemeDecorator(Main);