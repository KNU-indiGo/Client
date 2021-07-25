import React from 'react';
import { Row, Cell } from '@enact/ui/Layout';
import * as FaIcons from 'react-icons/fa';
import { Header } from '@enact/sandstone/Panels';
import PopupTapLayout, { Tab, TabPanel, TabPanels } from '@enact/sandstone/PopupTabLayout';
import Item from '@enact/sandstone/Item';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false,
        };
    }

    showSidebar() {
        this.setState({
            sidebar: true
        });
        console.log("open sidebar");
    }

    closeSidebar() {
        this.setState({
            sidebar: false
        });
        console.log("close sidebar");
    }

    render(props) {
        return (
            <div>
                <Row>
                    <Cell component="header">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </Cell>
                    <Cell size="10%" style={{
                        display: 'flex',
                        position : 'relative',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <FaIcons.FaBars onClick={() => {this.showSidebar()}} />
                    </Cell>
                </Row>
                <PopupTapLayout 
                open={this.state.sidebar}
                onClose={() => {this.closeSidebar()}}
                >
		            <Tab title="Home">
                    </Tab>
                    <Tab title="Statistics">
                    </Tab>
                    <Tab title="Fire Control">
			            <TabPanels>
				            <TabPanel>
					            <Header title="Fire Control" type="compact" />
					            <Item>List in Progress</Item>
					            <Item>Completed list</Item>
				            </TabPanel>
			            </TabPanels>
		            </Tab>
	            </PopupTapLayout>
            </div>
        );
    }
}

export default TopNav;