'use strict';

import React from 'react';

import { colors, spacer } from './../utilities/space.view';


let Tutorials = ({x, y, width, height}) => {
    const titleF = spacer(3.5);
    const titleX = x + spacer(5);
    const titleY = y + spacer(3);

    const labelF = spacer(4.25);
    const labelFF = 'BebasNeueBook';

    return (
        <g>
            <text
                x={ titleX }
                y={ titleY }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.black }
                fontSize={ titleF }
                textAnchor={ 'start '}
            >
                Tutorials
            </text>

            <text
                x={ titleX + width / 2 }
                y={ titleY + titleF + spacer(7) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Coming Soon . . .
            </text>

            <rect
                x={ x + spacer(3.75) }
                y={ titleY + spacer(11) }
                width={ width / 2.1 }
                height={ spacer(13) }
                rx={ spacer(14) / 2 }
                ry={ spacer(14) / 2 }
                fill={ colors.black }
            />
        </g>
    );
};

export default Tutorials;

//<rect
//    x={x}
//    y={y}
//    width={width}
//    height={height}
///>