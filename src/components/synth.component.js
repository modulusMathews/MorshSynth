'use strict';

import React from 'react';

import Core from './core.component';
import Controller from './controller.component';

import { colors, spaceSize, coreSquare, controllerRect } from './../utilities/space.view';


const Synth = () => {
    return (
        <g>
            <Core
                x={ coreSquare.x }
                y={ coreSquare.y }
                root={ coreSquare.root }
            />

            <Controller
                x={ controllerRect.x }
                y={ controllerRect.y }
                width={ controllerRect.width }
                height={ controllerRect.height }
            />

        </g>
    );
};

export default Synth;