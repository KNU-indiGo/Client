import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Main from '../views/Main';
import CamList from '../views/CamList';

export default function App() {
	return(
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/camlist/:id" component={CamList} />
			</Switch>
		</HashRouter>
	)
}