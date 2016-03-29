'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { activateFilter, deactivateFilter } from './../actions/controller.actions';
import { addFilter, removeFilter } from './../actions/synth.actions';

import { colors, palColors, offColors, compNavOnColor, spacer } from './../utilities/space.view';



let Filter = ({x, y, width, height, selector, filter, synths, octaves, help, activate, deactivate}) => {
    let remColor = offColors;
    if (filter['remove']) {
        remColor = compNavOnColor(selector,synths,octaves)
    }

    let addColor = offColors;
    if (filter['add']) {
        addColor = compNavOnColor(selector,synths,octaves)
    }

    const filtH = height / 2 * 11 / 13;
    const filtW = width - 2 * spacer(12);

    let addChar, removeChar;
    if (help) {
        addChar = (
            <text
                x={ x + spacer(12) + filtW / 2 }
                y={ y + filtH * 11 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ filtH / 3 }
                textAnchor={ 'middle '}
            >
                /
            </text>
        );

        removeChar = (
            <text
                x={ x + spacer(12) + filtW / 2 }
                y={ y + height / 2 + height / 13 / 2 + filtH * 10 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ filtH / 1.5 }
                textAnchor={ 'middle '}
            >
                .
            </text>
        );
    }

    return (
        <g>
            <Cell
                x={ x + spacer(12) }
                y={ y }
                width={ filtW }
                height={ filtH }
                spacers={{0: spacer(12), 1: spacer(15), 2: spacer(18), 3: spacer(21)}}
                colors={ addColor }
                onMouseDown={ activate(selector,'add') }
                onMouseUp={ deactivate(selector,'add') }
                onMouseLeave={ deactivate(selector,'add') }
            />

            { addChar }

            <Cell
                x={ x + spacer(12) }
                y={ y + height / 2 + height / 13 / 2}
                width={ filtW }
                height={ filtH }
                spacers={{0: spacer(12), 1: spacer(15), 2: spacer(18), 3: spacer(21)}}
                colors={ remColor }
                onMouseDown={ activate(selector,'remove') }
                onMouseUp={ deactivate(selector,'remove') }
                onMouseLeave={ deactivate(selector,'remove') }
            />

            { removeChar }

        </g>
    );
};

const mapStateToProps = (state) => {
    const controller = state.controller.toJS();
    const synth = state.synth.toJS();
    const header = state.header.toJS();

    return {
        selector: controller.selector,
        filter: controller.filter,
        synths: synth.synths,
        octaves: synth.octaves,
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

            dispatch(activateFilter(id))
            if (id === 'add') {
                dispatch(addFilter(selectors))
            }
            else {
                dispatch(removeFilter(selectors))
            }
        },
        deactivate: (selector,id) => () => {
             dispatch(deactivateFilter(id))
        }
    };
};

Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

export default Filter;



//let circs = [];
//for (let i=1; i<=4; i++) {
//    circs.push(
//        <circle
//            cx={ lineX + divSpacer / 2 + divWidth / 5 * i }
//            cy={ mid - maxH * 7 / 11 * 3 / 8 + cellHeight * 7 / 12 }
//            r={ spacer(6) }
//            fill={ colors.black }
//        />
//    );
//}