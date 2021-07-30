import React from 'react';
import { connect } from 'react-redux';
import Popup from '@enact/sandstone/Popup';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

import { changeStatusComplete } from '../../store/actions/index';

const client = new W3CWebSocket('ws://210.204.38.60:8080/ws');

class CamDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            people: 0
        };
    }
    componentDidMount() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            this.setState({people: dataFromServer});
        }
    }
    componentDidUpdate() {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
        };

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            this.setState({people: dataFromServer});
        }
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
            style={{ padding: "20px", color: "black" }}>
            <img
              src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
              alt="cam_detail"
              style={{ width: "200px", height: "200px" }}
              onClick={() => { this.openPopup(); }}
              />
            <div>{this.props.name}</div>
            <Popup
              open={this.state.open}
              position="center"
              spotlightRestrict="self-first"
              onClose={() => { this.closePopup(); }}
              style={{ height: "800px", width: "800px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: "white" }}>
                    {this.props.name}
                </h1>
                <img
                  src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
                  alt="live_stream"
                  style={{ width: "600px", height: "300px" }}/>
                <h3 style={{ margin: "50px", color: "white" }}>
                  Current Number of People: {this.state.people}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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

const mapStateToProps = state => ({
    current: state.set.current,
});

const mapDispatchToProps = dispatch => ({
    changeStatusComplete: current => dispatch(changeStatusComplete(current)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CamDetail);