import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

const appElement = (<Provider store={store}><App /></Provider>);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
