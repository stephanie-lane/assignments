import React from 'react';

const Die5 = (props) => {
    const die = {
        border: '5px solid black',
        fontSize: '50px',
        padding: '20px'
    }
    return (
        <div>
            <div style={die}>{props.num}</div>
        </div>
    )
}

export default Die5;