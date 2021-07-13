import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Panels from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Changeable from '@enact/ui/Changeable';

import FireList from '../views/FireList';
import FireDetail from '../views/FireDetail';

import css from './App.module.less';

const fire_situations = [
	'Yeungnam University Medical Center',
	'Daegu Catholic University Medical Center',
	'Good Morning Hostpital'
]

const AppBase = kind({
	name: 'App',

	propTypes: {
		index: PropTypes.number,
		fire_situation: PropTypes.number,
		open: PropTypes.bool,
		onNavigate: PropTypes.func,
		onSelectFireSituation: PropTypes.func,
		handleOpen: PropTypes.func
	},

	defaultProps: {
		index: 0,
		fire_situation: 0,
		open: false
	},

	styles: {
		css,
		className: 'app'
	},

	handlers: {
		onSelectFireSituation: (ev, {onNavigate, onSelectFireSituation}) => {
			if (onSelectFireSituation) {
				onSelectFireSituation({
					fire_situation: ev.index
				});
			}

			if(onNavigate) {
				onNavigate({
					index: 1
				});
			}
		},
		handleOpen: (ev, {open, handleOpen}) => {
			if(handleOpen) {
				handleOpen({
					open: !open
				});
			}
		}
	},

	render: ({index, fire_situation, onNavigate, onSelectFireSituation, open, handleOpen, ...rest}) => (
		<Panels {...rest} index={index} onBack={onNavigate}>
			<FireList onSelectFireSituation={onSelectFireSituation}>{fire_situations}</FireList>
			<FireDetail name={fire_situations[fire_situation]} open={open} handleOpen={handleOpen} />
		</Panels>
	)
});

const App = Changeable({prop: 'index', change: 'onNavigate'},
	Changeable({prop: 'open', change: 'handleOpen'},
	Changeable({prop: 'fire_situation', change: 'onSelectFireSituation'},
		ThemeDecorator(AppBase)
	))
);

export default App;
export {
	App,
	AppBase
};
