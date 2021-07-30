import React from 'react';
import { Link } from 'react-router-dom';

class GoBackButton extends React.Component {
    render() {
        return (
            <Link
            to='/'
            style={{ textDecoration: "none", margin: "20px" }}>
                <div
                style={{
                    background: "green",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "100px",
                    margin: "10px",
                    textAlign: "center"
                }}>
                    Go Back
                </div>
            </Link>
        );
    }
} 

export default GoBackButton;

