import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CompleteButton extends React.Component {
    

    handleComplete = index => {
        console.log(index);
        axios({
            url: "/api/fire/put-out/" + index,
            method: 'PUT'
        }).then((res) => {
        });
    }

    render() {
        const { current } = this.props;
        return (
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
            onClick={() => {this.handleComplete(current);} }>
                Complete
            </div>
        );
    }
}

const mapStateToProps = state => ({
    current: state.set.current,
});

export default connect(mapStateToProps)(CompleteButton);