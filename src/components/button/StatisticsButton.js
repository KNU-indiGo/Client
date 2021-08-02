import React from 'react';
import { Link } from 'react-router-dom';

const StatisticsButton = (props) => {
    return (
            <Link
            to={{ pathname: `/statistics/${props.id}`,
                state: {
                    id: props.id,
                    name: props.name,
                    addr: props.addr,
                    image_url: props.image_url,
                    back_history: 2
                }
            }}
            style={{ textDecoration: "none" }}>
                <div
                style={{
                    background: "orange",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "100%",
                    margin: "10px",
                    textAlign: "center"
                }}>
                    See<br/>
                    Statistics
                </div>
            </Link>
        );
} 

export default StatisticsButton;