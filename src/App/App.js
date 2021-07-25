import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../views/Main';
import CamList from '../views/CamList';
import Statistics from '../views/Statistics';
import CompleteList from '../views/CompleteList';

export default function App() {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/camlist/:id" component={CamList} />
				<Route exact path="/statistics" component={Statistics} />
				<Route exact path="/completedlist" component={CompleteList} />
			</Switch>
		</BrowserRouter>
	)
}