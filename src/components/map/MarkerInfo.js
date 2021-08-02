const MarkerInfo = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem"
        }}>
            <img src="http://maps.google.com/mapfiles/ms/micons/green.png" />
            <div style={{color: "gray", fontSize: "20px", marginRight: "1rem"}}> No fire or Fire control Complete  </div>
            <img src="http://maps.google.com/mapfiles/ms/micons/orange.png" />
            <div style={{color: "gray", fontSize: "20px", marginRight: "1rem"}}> Under fire control </div>
            <img src="http://maps.google.com/mapfiles/ms/micons/red.png" />
            <div style={{color: "gray", fontSize: "20px", marginRight: "1rem"}}> Fire outbreak </div>
        </div>
    )
}

export default MarkerInfo;