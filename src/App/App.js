import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../views/Main';
import CamList from '../views/CamList';

export default function App() {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/camlist/:id" component={CamList} />
			</Switch>
		</BrowserRouter>
	)
}