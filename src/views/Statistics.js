import kind from '@enact/core/kind';
import Panels, { Header, Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

const Statistics = kind({
    name: 'statistics',

    render: () => (
        <Panel style={{backgroud: 'white', color: 'black'}}>
            <Header
            title="Statistics" />
            <div>
                statistics img here!
            </div>
        </Panel>
    )
});

export default ThemeDecorator(Statistics);