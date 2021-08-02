import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import React from 'react';

import TopNav from '../components/nav/TopNav';

const Graph = (props) => {
  console.log(props.location.state.image_url);
    return (
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
            title="Statistics"
            back_history={2}/>
            <div> {props.location.state.name} </div>
            <img
              src={props.location.state.image_url[0]}
              alt="live_stream"
              style={{ width: "600px", height: "600px" }}/>
              <img
              src={props.location.state.image_url[1]}
              alt="live_stream"
              style={{ width: "600px", height: "600px" }}/>
        </Panel>
      )
}

export default ThemeDecorator(Graph);