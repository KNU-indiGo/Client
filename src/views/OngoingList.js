import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import TopNav from '../components/TopNav';

const OngoingList = kind({
    name: 'ongoing_list',

    render: (props) => (
        <Panel {...props} style={{background: 'white', color: 'black'}}>
            <Scroller>
            <TopNav
            title="Ongoing List"/>
              <div>ongoing list</div>
            </Scroller>
        </Panel>
    )
});

export default ThemeDecorator(OngoingList);