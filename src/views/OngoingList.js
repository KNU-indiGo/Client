import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Link } from 'react-router-dom';

import TopNav from '../components/TopNav';
import CompleteDetail from '../components/CompleteDetail';

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