import React from 'react';
import kind from '@enact/core/kind';
import {Header, Panel} from '@enact/sandstone/Panels';
import PropTypes from 'prop-types';
import Button from '@enact/sandstone/Button';
import Scroller from '@enact/sandstone/Scroller';
import Popup from '@enact/sandstone/Popup';

import Map from '../components/Map';
import css from './FireDetail.module.less';

const FireDetailBase = kind({
	name: 'FireDetail',

	propTypes: {
        name: PropTypes.string, // building name
        location: PropTypes.string, // building location
		number: PropTypes.number, // number of detected people
        open: PropTypes.bool,
        handleOpen: PropTypes.func
	},

	defaultProps: {
        location: 'null',
        number: 0
	},

    styles: {
        css,
        className: 'fire_detail'
    },
    
	render: ({name, location, number, open, handleOpen, handleClose, ...rest}) => (
		<Panel {...rest}>
			<Header title={name} />
            <Scroller>
                <img className="stream" src="https://cdn.pixabay.com/photo/2020/11/30/18/14/colorful-5791787_960_720.png"/>
                <div className="detail_info" style={{'margin': 50}}>
			        <div>number of detected people: {number}</div>
			        <div>location: {location}</div>
                </div>
                <Button className="complete">complete</Button>
                <Button className="map" onClick={handleOpen}>Map</Button>
            </Scroller>
            <Popup open={open} onClose={handleOpen} position="center" spotlightRestrict="self-first" style={{'width': 500, height: 500}}>
                <Map></Map>
            </Popup>
		</Panel>
	)
});

export default FireDetailBase;
export {
	FireDetailBase as FireDetail,
	FireDetailBase
};