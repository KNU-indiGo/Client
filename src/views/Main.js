import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/ui/Scroller';

import Map from '../components/map/Map';
import BottomNav from '../components/nav/BottomNav';
import TopNav from '../components/nav/TopNav';

const Main = kind({
    name: 'main',

    render: () => (
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
            title='Smart Fire Detection System'
            subtitle='Deagu Northern Fire Station' />
            <Scroller>
                <div style={{ width: '1800px', height: '700px'}}>
                <Map></Map>
                </div>
                <BottomNav />
            </Scroller>
        </Panel>
    )
});

export default ThemeDecorator(Main);