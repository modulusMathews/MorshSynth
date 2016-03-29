'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Logo from './logo.component';

import { colors } from './../utilities/space.view';
import { headerSize, spacer, lineY } from './../utilities/header.view';

const mid = lineY + spacer(4) / 2;
const quart = (headerSize.height - mid);

const LogoName = () => {
    return (
        <g>
            <Logo
                x={ spacer(2.75) }
                y={ 0 }
                root={ headerSize.height }
                back={ colors.white }
                front={ colors.black }
            />

            <text
                x={ headerSize.height + spacer(4) + spacer(3) }
                y={ headerSize.height - spacer(3.07) }
                fontFamily={ 'BebasNeueBold' }
                fill={ colors.black }
                fontSize={ headerSize.height * 15 / 17 }
            >
                Morsh
            </text>

        </g>
    );
};

export default LogoName;


//<Logo
//    x={ 0 }
//    y={ 0 }
//    root={ headerSize.height }
//    back={ colors.white }
//    front={ colors.black }
///>
//headerSize.height + spacer(4)