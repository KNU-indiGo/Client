import React from 'react';

const StatisticsDetail = (props) => {    
    return (
            <div {...props} 
            style={{ 
                width: "400px", 
                height: "200px", 
                padding: "1rem", 
                background: "lightgray", 
                color: "black",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column" 
                }}>
                <h3>{props.name}</h3>
                <p>{props.address}</p>
            </div>
        )
}

export default StatisticsDetail;