import { Link } from 'react-router-dom';

const StatisticsButton = (props) => {
    return (
        <div>
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
                    background: "#fd7567",
                    color: "white",
                    padding: "20px",
                    borderRadius: "20px",
                    width: "200px",
                    margin: "10px",
                    textAlign: "center",
                }}>
                    See<br/>
                    Statistics
                </div>
            </Link>
            </div>
        );
} 

export default StatisticsButton;