import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Row, Column, Cell } from '@enact/ui/Layout';

import Map from '../components/Map';
import TopNav from '../components/TopNav';

const Main = kind({
    name: 'main',

    render: () => (
        <Panel>
            <Row style={{ height: '100%' }}>
                <Cell>
                    <Column>
                        <Cell component="header">
                            <TopNav
                                title='Smart Fire Detection System'
                                subtitle='Deagu Northern Fire Station'>
                            </TopNav>
                        </Cell>
                        <Cell size="80%">
                            <Map></Map>
                        </Cell>
                    </Column>
                </Cell>
            </Row>
        </Panel>
    )
});

export default ThemeDecorator(Main);