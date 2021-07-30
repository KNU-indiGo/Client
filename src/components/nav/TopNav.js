import React from 'react';
import { Row, Cell } from '@enact/ui/Layout';
import * as FaIcons from 'react-icons/fa';
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
            <div style={{ color: 'black' }}>
                <Row>
                    <Cell component="header">
                        <h2 style={{ fontSize: '50px' }}>{this.props.title}</h2>
                        <p style={{ fontSize: '30px' }}>{this.props.subtitle}</p>
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
                    <Tab 
                    icon='home'
                    title="Home">
                        <TabPanels>
                            <TabPanel style={{ color: "white"}}>
                                <Item onClick={() => {window.location.href="/"}} style={{marginTop:"1rem"}}>Go to Home</Item>
                            </TabPanel>
                        </TabPanels>
                    </Tab>
                    <Tab
                    icon='nowplaying'
                    title="Statistics">
                        <TabPanels>
                            <TabPanel style={{ color: "white"}}>
                                <Item 
                                onClick={() => { window.location.href="/statistics" }} 
                                style={{ marginTop: "1rem" }}>See Statistics</Item>
                            </TabPanel>
                        </TabPanels>
                    </Tab>
                    <Tab 
                    icon='channel'
                    title="Fire Control">
                        <TabPanels>
				            <TabPanel style={{ color: "white"}}>
					            <Item 
                                onClick={() => {window.location.href="/ongoinglist"}}
                                style={{ marginTop: "1rem" }}>Ongoing List</Item>
					            <Item 
                                onClick={() => {window.location.href="/completedlist"}}
                                style={{ marginTop: "1rem" }}>Completed List</Item>
				            </TabPanel>
			            </TabPanels>
		            </Tab>
	            </PopupTapLayout>
            </div>
        );
    }
}

export default TopNav;