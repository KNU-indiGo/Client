import React from 'react';
import { Link } from 'react-router-dom';

class StatisticsButton extends React.Component {
    render(props) {
        return (
            <Link {...props}
            to={{ pathname: `/statistics/${this.props.id}` }}
            style={{ textDecoration: "none" }}>
                <div
                style={{
                    background: "orange",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "500px",
                    margin: "10px",
                    textAlign: "center"
                }}>
                    See Statistics
                </div>
            </Link>
        );
    }
} 

export default StatisticsButton;