import { useEffect } from 'react';
import WebFont from 'webfontloader';

const CamDetail = (props) => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto']
            }
        });
    }, [])

    return (
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        color: 'black',
        boxShadow: "1px 3px 8px 3px lightgray",
        borderRadius: "10px",
        margin: "1rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        fontFamily: "Roboto"
       }}>
          <img
            src="https://image.flaticon.com/icons/png/512/1160/1160041.png"
            alt="live_stream"
            style={{ width: '50px', height: '50px', marginRight: '1rem' }}/>
          <h3>{props.name}</h3>
      </div>
    );
}

export default CamDetail;