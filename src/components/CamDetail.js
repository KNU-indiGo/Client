import React from 'react';

class CamDetail extends React.Component {
    render(props) {
        return (
            <div {...props} style={{ padding: '20px' }}>
                <img 
                src="https://image.flaticon.com/icons/png/512/1160/1160041.png" 
                alt="cam_detail" 
                style={{ width: '200px', height:'200px' }} />
                <div>CAM</div>
            </div>
        )
    }
}

export default CamDetail;