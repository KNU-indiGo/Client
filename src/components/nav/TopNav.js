import { useState } from 'react';
import { Row, Cell } from '@enact/ui/Layout';
import * as FaIcons from 'react-icons/fa';
import PopupTapLayout, { Tab, TabPanel, TabPanels } from '@enact/sandstone/PopupTabLayout';
import Item from '@enact/sandstone/Item';

import GoBackButton from '../button/GoBackButton';

const TopNav = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(true);
        console.log("open sidebar");
    }

    const closeSidebar = () => {
        setSidebar(false);
        console.log("close sidebar");
    }

    return (
            <div style={{ color: 'black' }}>
                <Row>
                    {props.back_history?
                    <Cell size="10%" style={{
                        display: 'flex',
                        position : 'relative',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <GoBackButton back_history={props.back_history} id={props.id} name={props.title} addr={props.subtitle}/>
                    </Cell>
                    :<Cell size="93%" style={{
                        display: 'flex',
                        position : 'relative',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <img
                            src="https://indigo-s3.s3.ap-northeast-2.amazonaws.com/name.png"
                            alt="title"
                            style={{marginLeft: '100px'}}
                            />
                    </Cell>}
                    <Cell component="header">
                        <h2 style={{ fontSize: '50px' }}>{props.title}</h2>
                        <p style={{ fontSize: '30px' }}>{props.subtitle}</p>
                    </Cell>
                    <Cell size="10%" style={{
                        display: 'flex',
                        position : 'relative',
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <FaIcons.FaBars style={{ width: "50px", height: "50px" }} onClick={() => {showSidebar()}} />
                    </Cell>
                </Row>
                <PopupTapLayout 
                open={sidebar}
                onClose={() => {closeSidebar()}}>
                    <Tab 
                    icon='home'
                    title="Home">
                        <TabPanels>
                            <TabPanel style={{ color: "white"}}>
                                <Item onClick={() => {window.location.hash="#/"}} style={{marginTop:"1rem"}}>Go Home</Item>
                            </TabPanel>
                        </TabPanels>
                    </Tab>
                    <Tab
                    icon='nowplaying'
                    title="Statistics">
                        <TabPanels>
                            <TabPanel style={{ color: "white"}}>
                                <Item 
                                onClick={() => { window.location.hash="#/statistics" }} 
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
                                onClick={() => {window.location.hash="#/ongoinglist"}}
                                style={{ marginTop: "1rem" }}>Ongoing List</Item>
					            <Item 
                                onClick={() => {window.location.hash="#/completedlist"}}
                                style={{ marginTop: "1rem" }}>Completed List</Item>
				            </TabPanel>
			            </TabPanels>
		            </Tab>
	            </PopupTapLayout>
            </div>
    );
}

export default TopNav;