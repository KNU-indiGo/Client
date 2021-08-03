import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import WebFont from 'webfontloader';

const OngoingButton = (props) => {
    const [current, setCurrent] = useState(props.current)

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto']
            }
        });
    }, [])

    const handleComplete = (index) => {
        console.log(index);
        axios({
            url: "http://ec2-52-78-90-230.ap-northeast-2.compute.amazonaws.com:8080/api/fire/contain/" + index,
            method: 'PUT'
        }).then((res) => {
        });
    }

    return (
            <div
            style={{
                background: "#fbbf00",
                color: "white",
                padding: "20px",
                borderRadius: "20px",
                width: "200px",
                margin: "10px",
                textAlign: "center",
                fontFamily: "Roboto"
            }}
            onClick={() => {handleComplete(current);} }>
                Change State<br/>
                to Ongoing
            </div>
        );
} 

const mapStateToProps = state => ({
    current: state.set.current,
});

export default connect(mapStateToProps)(OngoingButton);