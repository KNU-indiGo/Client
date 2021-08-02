import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import { Cell, Row } from '@enact/ui/Layout';
import Scroller from '@enact/ui/Scroller';
import React from 'react';
import BottomNav from '../components/nav/BottomNav';

import TopNav from '../components/nav/TopNav';

const Graph = (props) => {
  console.log(props.location.state.image_url);
    return (
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
            title="Statistics"
            subtitle={props.location.state.name}
            back_history={props.location.state.back_history}
            id={props.location.state.id}/>
            <Scroller style={{ textAlign: 'center' }}>
              <Row style={{ textAlign: 'center' }}>
                <Cell>
                  <h4> Shortest path to the location </h4>
                  <img
                  src={props.location.state.image_url[0]}
                  alt="live_stream"
                  style={{ width: "600px", height: "600px" }}/>
                  </Cell>
                <Cell>
                  <h4> asdf </h4>
                  <img
                  src={props.location.state.image_url[1]}
                  alt="live_stream"
                  style={{ width: "600px", height: "600px" }}/>
                </Cell>
              </Row>
              <BottomNav />
            </Scroller>
        </Panel>
      )
}

export default ThemeDecorator(Graph);