import kind from '@enact/core/kind';
import { Header, Panel } from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import PropTypes from 'prop-types';

import FireSituation from '../components/FireSituation';
import css from './FireList.module.less';

const FireListBase = kind({
    name: 'FireList',

    propTypes: {
        children: PropTypes.array,
        onSelectFireSituation: PropTypes.func
    },

	styles: {
		css,
		className: 'fire_list'
	},

    render: ({children, onSelectFireSituation, ...rest}) => (
        <Panel {...rest}>
            <Header title="Smart Fire Detection System" />
            <Scroller>
                <Repeater childComponent={FireSituation} indexProp="index" itemProps={{onSelect: onSelectFireSituation}}>
                    {children}
                </Repeater>
            </Scroller>
        </Panel>
    )
});

export default FireListBase;
export {
    FireListBase as Fire,
    FireListBase
};