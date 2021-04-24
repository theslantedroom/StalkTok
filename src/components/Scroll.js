import React from 'react';
import './scroll.css';

const Scroll = (props) => {
    return (
        <div className="scrollDiv" style={{
            overflowY: 'scroll', 
            border: '2px solid black', 
            height: '60vh',
            boxsizing: 'border-box'
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;