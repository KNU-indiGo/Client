const MarkerInfo = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
        }}>
            <img src="http://maps.google.com/mapfiles/ms/micons/green.png" alt="green_marker" />
            <div style={{color: "gray", fontSize: "20px", marginRight: "1rem"}}> No fire or Fire control Complete  </div>
            <img src="http://maps.google.com/mapfiles/ms/micons/red.png" alt="red_marker" />
            <div style={{color: "gray", fontSize: "20px", marginRight: "1rem"}}> Fire outbreak </div>
            <img src="http://maps.google.com/mapfiles/ms/micons/orange.png" alt="orange_marker" />
            <div style={{color: "gray", fontSize: "20px", marginRight: "1rem"}}> Under fire control </div>
        </div>
    )
}

export default MarkerInfo;