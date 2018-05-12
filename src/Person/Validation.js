import React from 'react';

const validation = (props) => {
    let length = props.text.length > 5 ? 'Text long enough' : 'Text too short'
    return (
        <div>{length}</div>
    )
};

export default validation;