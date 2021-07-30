import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import Map from '../components/map/Map';
import TopNav from '../components/nav/TopNav';

const Main = kind({
    name: 'main',

    render: () => (
        <Panel>
            <TopNav
            title='Smart Fire Detection System'
            subtitle='Deagu Northern Fire Station' />
            <Map></Map>
        </Panel>
    )
});

export default ThemeDecorator(Main);