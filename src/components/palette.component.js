'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { activatePalette, deactivatePalette } from './../actions/controller.actions';
import { setSynth } from './../actions/synth.actions';

import { colors, palColors } from './../utilities/space.view';
import { spacer, lineX, paletteSize, divSpacer, cellWidth, mid, maxH, cellHeight } from './../utilities/header.view';


let Palette = ({selector, palette, help, activate, deactivate}) => {
    let sounds = [];
    let palChars = [];

    const palY = mid - maxH * 8 / 11 * 3 / 8;

    for (let i=0; i<paletteSize; i++) {
        sounds.push(
            <Cell
                key={ i }
                x={ lineX + divSpacer + cellWidth * i + divSpacer * i }
                y={ palY }
                width={ cellWidth }
                height={ maxH }
                spacers={{0: spacer(4.5), 1: spacer(6), 2: spacer(7.5), 3: spacer(9)}}
                colors={{
                    0: palette[i] ? 'transparent' : palColors[i],
                    1: palette[i] ? palColors[i] : colors.white,
                    2: palette[i] ? colors.white : palColors[i],
                    3: palette[i] ? palColors[i] : 'transparent'
                }}
                onMouseDown={ activate(selector, String(i)) }
                onMouseUp={ deactivate(String(i)) }
                onMouseLeave={ deactivate(String(i)) }
            />
        );


        if (help) {
            let char;
            switch (i) {
                case 0:
                    char = '6';
                    break;

                case 1:
                    char = '7';
                    break;

                case 2:
                    char = '8';
                    break;

                case 3:
                    char = '9';
                    break;

                case 4:
                    char = '0';
                    break;
            }

            palChars.push(
                <text
                    key={ i }
                    x={ lineX + divSpacer + cellWidth * i + divSpacer * i + cellWidth / 2 }
                    y={ palY + maxH * 11.5 / 17 }
                    fontFamily={ 'BebasNeueRegular' }
                    fill={ colors.white }
                    fontSize={ maxH / 1.875 }
                    textAnchor={ 'middle '}
                >
                    { char }
                </text>
            );
        }
    }

    return <g>{ sounds }{ palChars }</g>;
};

const mapStateToProps = (state) => {
    const controller = state.controller.toJS();
    const header = state.header.toJS();

    return {
        selector: controller.selector,
        palette: controller.palette,
        help: header.help
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        activate: (selector,id) => () => {
            let selectors = {};
            for(let j in selector) {
                if(selector[j]) { selectors[j] = j; }
            }

            dispatch(activatePalette(id));
            dispatch(setSynth(selectors,id));
        },
        deactivate: (id) => () => {
            dispatch(deactivatePalette(id));
        }
    };
};

Palette = connect(
    mapStateToProps,
    mapDispatchToProps
)(Palette);

export default Palette;

