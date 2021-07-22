import React from 'react';
import Popup from '@enact/sandstone/Popup';

class CamDetail extends React.Component {
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

    render(props) {
        return (
          <div
            {...props}
            style={{ padding: "20px" }}
            onClick={() => {
              this.openPopup();
            }}>
            <img
              src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
              alt="cam_detail"
              style={{ width: "200px", height: "200px" }}/>
            <div>{this.props.name}</div>
            <Popup
              open={this.state.open}
              position="center"
              spotlightRestrict="self-first"
              onClose={() => {
                this.closePopup();
              }}
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
                    background: "green",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "200px",
                    margin: "10px",
                    textAlign: "center"
                    }}>
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
                    onClick={()=> this.closePopup()}>
                        Close
                    </div>
                </div>
            </Popup>
          </div>
        );
    }
}

export default CamDetail;