'use strict';

import React from 'react';

import { spacer, colors, spaceSize } from './../utilities/space.view';


const centerX = spaceSize.width / 2;

const fontSize = spacer(4.5);

const nine = spacer(9);
const thirteen = spacer(13);
const fontSpacer = spaceSize.height * 5 / 17 - spacer(5) + nine;

const Root = () => {
    return (
        <g>
            <text
                x={ centerX }
                y={ fontSpacer + nine }
                fontFamily={ "BebasNeueBook" }
                fontSize={ fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                Math is the definition
            </text>

            <text
                x={ centerX }
                y={ fontSpacer + fontSize + nine + thirteen }
                fontFamily={ "BebasNeueBook" }
                fontSize={ fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                Music is the celebration
            </text>

            <text
                x={ centerX }
                y={ fontSpacer + 2 * fontSize + nine + 2 * thirteen  }
                fontFamily={ "BebasNeueBook" }
                fontSize={ fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                Together they are the reason
            </text>

            <text
                x={ centerX }
                y={ fontSpacer + 4 * fontSize + nine + 2 * thirteen  }
                fontFamily={ "BebasNeueBook" }
                fontSize={ fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                With them we are everything
            </text>

            <text
                x={ centerX }
                y={ fontSpacer + 5 * fontSize + nine + 3 * thirteen }
                fontFamily={ "BebasNeueBook" }
                fontSize={ fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                Without them we are nothing
            </text>

            <text
                x={ centerX }
                y={ fontSpacer + 7 * fontSize + nine + 3 * thirteen  }
                fontFamily={ "BebasNeueBook" }
                fontSize={ fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                Through them we are one
            </text>
        </g>
    );
};

export default Root;