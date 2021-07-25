import React from 'react';
import Popup from '@enact/sandstone/Popup';

import MapOnce from './MapOnce';

class CompleteDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
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

    render(props) {
        return (
          <div
            {...props}
            style={{ padding: "20px" }}>
            <div style={{display: "flex"}} onClick={() => { this.openPopup(); }}>
                <MapOnce lat={this.props.lat} lng={this.props.lng} ></MapOnce>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.address}</p>
                </div>
            </div>
            <Popup
              open={this.state.open}
              position="center"
              spotlightRestrict="self-first"
              onClose={() => { this.closePopup(); }}
              style={{ height: "800px", width: "800px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: "white" }}>
                    {this.props.name}
                </h1>
                <MapOnce lat={this.props.lat} lng={this.props.lng} ></MapOnce>
                <h3 style={{ margin: "50px", color: "white" }}>
                  주소, 화재 발생 시간, 화재 진압 시간 등..
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div
                    style={{
                    background: "green",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "200px",
                    margin: "10px",
                    textAlign: "center"
                    }}
                    onClick={() => {this.closePopup();} }
                    >
                        Complete
                    </div>
                    <div
                    style={{
                    background: "red",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "200px",
                    margin: "10px",
                    textAlign: "center"
                    }}
                    onClick={()=> {this.closePopup();} }>
                        Close
                    </div>
                </div>
            </Popup>
          </div>
        );
    }
}

export default CompleteDetail;