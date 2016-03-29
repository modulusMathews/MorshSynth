'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Filter from './filter.component';
import Octave from './octave.component';
import Cell from './cell.component';

import { spacer, colors } from './../utilities/space.view';

let Tator = ({x, y, width, height}) => {
    return (
        <g>
            <Filter
                x={ x }
                y={ y }
                width={ width * 2 / 9 }
                height={ height }
            />

            <Octave
                x={ x + width * 2 / 9  }
                y={ y }
                width={ width * 7 / 9 }
                height={ height - spacer(12) }
            />

        </g>
    );
};

export default Tator;



//<rect
//    x={ x + width * 2 / 9 + spacer(12) * 1.5 - spacer(19) / 2 }
//    y={ y + (height - spacer(12)) * 2.5 / 12 }
//    width={ spacer(19) }
//    height={ (height - spacer(12)) * 7 / 12 }
//    rx={ spacer(22) / 2 }
//    ry={ spacer(22) / 2 }
//    fill={ colors.black }
///>