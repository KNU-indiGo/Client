const StatisticsDetail = (props) => {    
    return (
            <div {...props} 
            style={{ 
                width: "400px", 
                height: "100%", 
                padding: "1rem", 
                background: "white", 
                color: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: "1px 3px 8px 3px lightgray"
                }}>
                <img src="https://image.flaticon.com/icons/png/512/3616/3616479.png" style={{ width: '50px', height: '50px' }} />
                <h3>{props.name}</h3>
                {props.address}
            </div>
        )
}

export default StatisticsDetail;