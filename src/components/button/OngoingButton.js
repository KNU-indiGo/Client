import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class OngoingButton extends React.Component {
    
    handleComplete = index => {
        console.log(index);
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/contain/" + index,
            method: 'PUT'
        }).then((res) => {
        });
    }

    render() {
        const { current } = this.props;
        return (
            <div
            style={{
                background: "orange",
                color: "white",
                padding: "20px",
                borderRadius: "20px",
                width: "200px",
                margin: "10px",
                textAlign: "center"
            }}
            onClick={() => {this.handleComplete(current);} }>
                진압 중
            </div>
        );
    }
} 

const mapStateToProps = state => ({
    current: state.set.current,
});

export default connect(mapStateToProps)(OngoingButton);