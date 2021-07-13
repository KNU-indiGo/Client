import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import GoogleMap from "google-map-react";

const Map = kind ({
    name: 'Map',

    propTypes: {
        lat: PropTypes.number,
        lng: PropTypes.number
    },

    styles: { 
        className: 'map'
    },

    render: ({lat, lng, ...rest}) => {
        return (
            <div className="map">
                <GoogleMap 
                    bootstrapURLKeys = {{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                    style={{width: '100%', height: '100%'}}
                    defaultZoom={15}
                    defaultCenter={{ lat: 37.5, lng: 127 }}
                ></GoogleMap>
            </div>
        );
    }
});

export default Map;