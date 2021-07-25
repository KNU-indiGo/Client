import kind from '@enact/core/kind';
import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import TopNav from '../components/TopNav';

const Statistics = kind({
    name: 'statistics',

    render: () => (
        <Panel style={{backgroud: 'white', color: 'black'}}>
            <TopNav
            title="Statistics" />
            <div>
                statistics img here!
            </div>
        </Panel>
    )
});

export default ThemeDecorator(Statistics);