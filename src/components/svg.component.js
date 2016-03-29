'use strict';

import React from 'react';


const defaultStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%'
};

const SVG = ({width, height, children}) => {
    return (
        <svg viewBox={`0 0 ${ width } ${ height }`} style={ defaultStyle }>
            { children }
        </svg>
    );
};

export default SVG;