import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { changeStatusComplete } from '../store/actions/index';

class CompleteButton extends React.Component {
    

    handleComplete = index => {
        const { changeStatusComplete } = this.props;
        console.log(index);
        changeStatusComplete(index);
        axios({
            url: "/api/fire/contain/" + index,
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

const mapDispatchToProps = dispatch => ({
    changeStatusComplete: current => dispatch(changeStatusComplete(current)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CompleteButton);