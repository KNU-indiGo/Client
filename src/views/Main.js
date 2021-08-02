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
            back_history={0} />
            <Scroller>
                <div style={{ width: '100%', height: '700px'}}>
                <Map></Map>
                </div>
                <BottomNav />
            </Scroller>
        </Panel>
    )
});

export default ThemeDecorator(Main);