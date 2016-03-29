'use strict';

import React from 'react';


const Cell = ({x, y, width, height, spacers, colors, onMouseDown, onMouseUp, onMouseOver, onMouseEnter, onMouseLeave}) => {
    let layers = [];
    let rects = [];

    for (let i=0; i<4; i++) {
        if (i === 0) {
            layers.push({x, y, width, height});
        }
        else {
            layers.push({
                x: layers[i - 1].x + spacers[i],
                y: layers[i - 1].y + spacers[i],
                width: layers[i - 1].width - 2 * spacers[i],
                height: layers[i - 1].height - 2 * spacers[i]
            });
        }

        rects.push(
            <rect
                key={ i }
                x={ layers[i].x }
                y={ layers[i].y }
                width={ layers[i].width }
                height={ layers[i].height }
                rx={ spacers[i] }
                ry={ spacers[i] }
                fill={ colors[i] }
            />
        );
    }

    return <g onMouseDown={ onMouseDown } onMouseUp={ onMouseUp } onMouseOver={ onMouseOver } onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave }>{ rects }</g>;
};

export default Cell;