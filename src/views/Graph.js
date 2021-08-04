import { useState } from 'react';
import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Cell, Row } from '@enact/ui/Layout';
import Scroller from '@enact/ui/Scroller';
import * as FaIcons from 'react-icons/fa';
import Popup from '@enact/sandstone/Popup';

import TopNav from '../components/nav/TopNav';
import BottomNav from '../components/nav/BottomNav';

const Graph = (props) => {
  const [open, setOpen] = useState(false);
  
  const openPopup = () => {
    setOpen(true);
    console.log("open popup");
  }

  const closePopup = () => {
    setOpen(false);
    console.log("close popup");
  }

  console.log(props.location.state.image_url);
    return (
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
            title="Statistics"
            subtitle={props.location.state.name}
            back_history={props.location.state.back_history}
            id={props.location.state.id}/>
            <Scroller style={{ textAlign: 'center' }}>
              <Row style={{ textAlign: 'center', }}>
                <Cell>
                  <h4> Shortest path to the location </h4>
                  <img
                  src={props.location.state.image_url[0]}
                  alt="live_stream"
                  style={{ width: "600px", height: "600px" }}/>
                  </Cell>
                <Cell>
                  <div style={{ 
                        display: 'flex',
                        position : 'relative',
                        alignItems: 'center',
                        justifyContent: 'center' }}>
                    <h4 style={{ marginRight: '1rem'}}> Fire hazard </h4>
                    <FaIcons.FaRegQuestionCircle
                    style={{ color: 'gray' }}
                    onClick={() => {openPopup()}} />
                  </div>
                  <img
                  src={props.location.state.image_url[1]}
                  alt="live_stream"
                  style={{ width: "600px", height: "600px" }}/>
                </Cell>
              </Row>
              <BottomNav />
              <Popup
              open={open}
              position="center"
              spotlightRestrict="self-first"
              onClose={() => { closePopup(); }}
              style={{ backgroundColor:"white", color: "#464D52", height: "100%px", width: "1000px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://indigo-s3.s3.ap-northeast-2.amazonaws.com/fire_info_2.png" style={{ width: '900px'}} alt="fire_info"/>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div
                    style={{
                    background: "#fd7567",
                    color: "white",
                    padding: "10px",
                    borderRadius: "20px",
                    width: "100px",
                    margin: "10px",
                    textAlign: "center",
                    fontSize: "25px",
                    }}
                    onClick={()=> {closePopup();} }>
                        Close
                    </div>
                </div>
            </Popup>
            </Scroller>
        </Panel>
      )
}

export default ThemeDecorator(Graph);