import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@enact/sandstone/Icon';

const GoBackButton = (props) => {
    if (props.back_history === 1) var next = '/';
    else if (props.back_history === 2) next = '/statistics';
    return (
            <Link
            to={next}
            style={{ textDecoration: "none", margin: "20px" }}>
                <Icon style={{color: "black"}}>arrowlargeleft</Icon>
            </Link>
        );
} 

export default GoBackButton;

