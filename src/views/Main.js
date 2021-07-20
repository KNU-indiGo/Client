import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import PropTypes from 'prop-types';

import Map from '../components/Map';

const Main = kind({
    name: 'main',

    render: () => (
        <Panel style={{backgroud: 'white', color: 'black'}}>
            <Header
            title="Smart Fire Detection System"
            subtitle="Daegu Northern Fire Station" />
            <Map></Map>
        </Panel>
    )
});

export default ThemeDecorator(Main);