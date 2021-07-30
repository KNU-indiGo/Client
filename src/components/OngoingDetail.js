import React from 'react';
import Popup from '@enact/sandstone/Popup';
import { Link } from 'react-router-dom';

import MapOnce from './MapOnce';

class OngoingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            people: 0
        };
    }

    openPopup() {
        this.setState({
            open: true
        });
        console.log('open popup');
    }

    closePopup() {
        this.setState({
            open: false
        });
        console.log('close popup');
    }

    render() {
        return (
          <div
            style={{ padding: "20px" }}>
            <div style={{display: "flex"}}>
                <MapOnce lat={this.props.lat} lng={this.props.lng} ></MapOnce>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.address}</p>
                </div>
            </div>
          </div>
        );
    }
}

export default OngoingDetail;