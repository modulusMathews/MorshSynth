'use strict';

import React from 'react';

import Controls from './controls.component';
import Tutorials from './tutorials.component';
import Techs from './techs.component';

import { colors, spaceSize, spacer } from './../utilities/space.view';


const Guide = () => {
    return (
        <g>
            <Controls
                x={ 0 }
                y={ 0 }
                width={ spaceSize.width * 3 / 5 }
                height={ spaceSize.height }
            />

            <Tutorials
                x={ spaceSize.width * 3 / 5 }
                y={ 0 }
                width={ spaceSize.width * 2 / 5 }
                height={ spaceSize.height * 3 / 5 }
            />

            <Techs
                x={ spaceSize.width * 3 / 5 }
                y={ spaceSize.height * 3 / 5 }
                width={ spaceSize.width * 2 / 5 }
                height={ spaceSize.height * 2 / 5 }
            />

        </g>
    );
};

export default Guide;