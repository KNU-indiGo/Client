import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import Spottable from '@enact/spotlight/Spottable';

import css from './FireSituation.module.less';

const FireSituationBase = kind ({
    name: 'FireSituation',

    propTypes: {
        children: PropTypes.string,
        index: PropTypes.number,
        onSelect: PropTypes.func,
        location: PropTypes.string
    },

    styles: { 
        css,
        className: 'fire_situation'
    },

    handlers: {
        onSelect: (ev, {index, onSelect}) => {
            if (onSelect) {
                onSelect({index});
            }
        }
    },

    computed: {
        numberOfPeople: () => {
            // Calculate the number of people
            return 15;
        }
    },

    render: ({children, onSelect, location, numberOfPeople, ...rest}) => {
        delete rest.index;

        return (
            <div {...rest} onClick={onSelect}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/188/566/non_2x/fire-png.png" alt="FireSituation" />
                <div>{children}</div>
            </div>
        );
    }
});

const FireSituation = Spottable(FireSituationBase);

export default FireSituation;
export {
    FireSituation,
    FireSituationBase
};