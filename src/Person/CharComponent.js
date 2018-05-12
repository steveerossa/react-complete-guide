import React from 'react';

const charcomponent = (props) => {
    return (
        <div onClick={props.click}>{props.letter}</div>
    )
};

export default charcomponent;