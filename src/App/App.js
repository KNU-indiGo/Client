import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../views/Main';
import CamList from '../views/CamList';
import Statistics from '../views/Statistics';
import Graph from '../views/Graph';
import CompleteList from '../views/CompleteList';
import OngoingList from '../views/OngoingList';

export default function App() {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/camlist/:id" component={CamList} />
				<Route exact path="/statistics" component={Statistics} />
				<Route exact path="/statistics/:id" component={Graph} />
				<Route exact path="/completedlist" component={CompleteList} />
				<Route exact path="/ongoinglist" component={OngoingList} />
			</Switch>
		</BrowserRouter>
	)
}