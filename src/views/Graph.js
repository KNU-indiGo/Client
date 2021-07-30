import { Panel } from '@enact/sandstone/Panels';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import React from 'react';

import TopNav from '../components/nav/TopNav';

class Graph extends React.Component {
  
    render() {
      return (
        <Panel style={{background: 'white', color: 'black'}}>
            <TopNav
            title="Statistics"/>
              <div> graph </div>
        </Panel>
      )
    }
}

export default ThemeDecorator(Graph);