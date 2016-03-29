'use strict';

import React from 'react';

import Cell from './cell.component';
import Logo from './logo.component';
import Root from './root.component';
import Social from './social.component';

import { colors, spaceSize, spacer } from './../utilities/space.view';


const centerX = spaceSize.width / 2;

const logoRoot = spacer(2.25);

const nine = spacer(9);

const Vision = () => {
    return (
        <g>
            <Logo
                x={ centerX - logoRoot / 2 }
                y={ nine }
                root={ logoRoot }
                back={ colors.white }
                front={ colors.black }
            />

            <Root/>

            <Social/>

        </g>
    );
};

export default Vision;
