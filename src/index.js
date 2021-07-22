import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

import App from './App';

const store = createStore(rootReducer);
const appElement = (<Provider store={store}><App /></Provider>);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;
