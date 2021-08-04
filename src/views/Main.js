import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Scroller from '@enact/ui/Scroller';

import Map from '../components/map/Map';
import BottomNav from '../components/nav/BottomNav';
import TopNav from '../components/nav/TopNav';
import MarkerInfo from '../components/map/MarkerInfo';

const Main = kind({
    name: 'main',

    render: () => (
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
            back_history={0}
            isMain={true} />
            <Scroller>
                <div style={{ width: '100%', height: '700px'}}>
                <Map></Map>
                </div>
                <MarkerInfo />
                <BottomNav />
            </Scroller>
        </Panel>
    )
});

export default ThemeDecorator(Main);