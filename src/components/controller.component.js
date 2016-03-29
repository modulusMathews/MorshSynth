"use strict";

import React from 'react';

import Navigator from './navigator.component';
import Selector from './selector.component';
import Scope from './scope.component';
import Tator from './tator.component';

import { spacer, colors } from './../utilities/space.view';


const Controller = ({x, y, width, height}) => {
    const contS = height / Math.pow(7,2);
    const contH = height - 2 * contS

    const navProps = {
        x: x + contS,
        y: y + contS,
        root: width - 2 * contS
    };

    const selProps = {
        x: x + contS,
        y: contS + contH * 4 / 7 + contS * 3 / 14,
        width: width - 2 * contS,
        height: contH * 3 / 7 - 25 / 14 * contS
    };

    return (
        <g className="controller">
            <Scope/>

            <Navigator
                x={ navProps.x }
                y={ navProps.y }
                root={ navProps.root }
            />

            <Tator
                x={ selProps.x * 1.75 }
                y={ navProps.y + width - 1.5 * contS }
                width={ selProps.width - 1.75 * selProps.x }
                height={ 8.275 * contS }
            />

            <rect
                x={ selProps.x + selProps.width * 2.5 / 12 }
                y={ contS + contH * 4 / 7 - spacer(19) * 2 / 3 - contS * 3 / 14 }
                width={ selProps.width * 7 / 12 }
                height={ spacer(19) }
                rx={ spacer(22) / 2 }
                ry={ spacer(22) / 2 }
                fill={ colors.black }
            />

            <Selector
                x={ selProps.x }
                y={ selProps.y }
                width={ selProps.width }
                height={ selProps.height }
            />

        </g>
    );
};

export default Controller;

//<Filter
//    x={ selProps.x }
//    y={ (navProps.y + navProps.root + selProps.y) / 2 - spacer}
//    width={ selProps.width }
//    height={ 2 * spacer }
///>

//<rect
//    x={ x + width * 1.5 / 19 }
//    y={ navProps.y + navProps.root - 0.5 * contS }
//    width={ width * 17 / 19 - width * 1.25 / 19 }
//    height={ spacer(19) }
//    rx={ spacer(22) / 2 }
//    ry={ spacer(22) / 2 }
//    fill={ colors.black }
///>
//selProps.y - 0.25 * contS