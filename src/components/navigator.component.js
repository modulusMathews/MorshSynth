"use strict";

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';
import Logo from './logo.component';

import { activateNavigator, deactivateNavigator } from './../actions/controller.actions';
import { incrementDensity, decrementDensity,
            incrementOffset, decrementOffset, resetVector } from './../actions/synth.actions';
import { setFocus } from './../actions/header.actions';

import { colors, navSpacers, offColors, compNavOnColor } from './../utilities/space.view';


let Navigator = ({x, y, root, navigator, selector, synths, octaves, help, activate, deactivate, onHover}) => {
    const mid = {
        x: x + root / 2 - root / 8,
        y: y + root / 2 - root / 8,
        root: root / 4
    };

    const top = {
        x: x + root / 2 - root / 10,
        y: (y + mid.y) / 2 - root / 10,
        root: root / 5
    };

    const right = {
        x: ((mid.x + mid.root) + (x + root)) / 2 - root / 10,
        y: y + root / 2 - root / 10,
        root: root / 5
    };

    const bottom = {
        x: x + root / 2 - root / 10,
        y: ((mid.y + mid.root) + (y + root)) / 2 - root / 10,
        root: root / 5
    };

    const left = {
        x: (x + mid.x) / 2 - root / 10,
        y: y + root / 2 - root / 10,
        root: root / 5
    };

    let topChar, rightChar, bottomChar, leftChar, resetChar;
    if (help) {
        topChar = (
            <text
                x={ top.x + top.root / 2  }
                y={ top.y + top.root * 11 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ top.root / 3 }
                textAnchor={ 'middle '}
            >
                i
            </text>
        );

        rightChar = (
            <text
                x={ right.x + right.root / 2  }
                y={ right.y + right.root * 11 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ right.root / 3 }
                textAnchor={ 'middle '}
            >
                l
            </text>
        );

        bottomChar = (
            <text
                x={ bottom.x + bottom.root / 2  }
                y={ bottom.y + bottom.root * 9.5 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ bottom.root * 3.5 / 5 }
                textAnchor={ 'middle '}
            >
                ,
            </text>
        );

        leftChar = (
            <text
                x={ left.x + left.root / 2  }
                y={ left.y + left.root * 11 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ left.root / 3 }
                textAnchor={ 'middle '}
            >
                j
            </text>
        );

        resetChar = (
            <text
                x={ mid.x + mid.root / 2  }
                y={ mid.y + mid.root * 11 / 17 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.black }
                fontSize={ mid.root / 3 }
                textAnchor={ 'middle '}
            >
                k
            </text>
        );
    }

    return (
        <g>
            <Cell
                x={ top.x }
                y={ top.y }
                width={ top.root }
                height={ top.root }
                spacers={ navSpacers }
                colors={ navigator['up'] ? compNavOnColor(selector,synths,octaves) : offColors }
                onMouseDown={ activate('up',selector,navigator) }
                onMouseUp={ deactivate('up') }
                onMouseLeave={ deactivate('up') }
            />

            { topChar }

            <Cell
                x={ right.x }
                y={ right.y }
                width={ right.root }
                height={ right.root }
                spacers={ navSpacers }
                colors={ navigator['right'] ? compNavOnColor(selector,synths,octaves) : offColors }
                onMouseDown={ activate('right',selector,navigator) }
                onMouseUp={ deactivate('right') }
                onMouseLeave={ deactivate('right') }
            />

            { rightChar }

            <Cell
                x={ bottom.x }
                y={ bottom.y }
                width={ bottom.root }
                height={ bottom.root }
                spacers={ navSpacers }
                colors={ navigator['down'] ? compNavOnColor(selector,synths,octaves) : offColors }
                onMouseDown={ activate('down',selector,navigator) }
                onMouseUp={ deactivate('down') }
                onMouseLeave={ deactivate('down') }
            />

            { bottomChar }

            <Cell
                x={ left.x }
                y={ left.y }
                width={ left.root }
                height={ left.root }
                spacers={ navSpacers }
                colors={ navigator['left'] ? compNavOnColor(selector,synths,octaves) : offColors }
                onMouseDown={ activate('left',selector,navigator) }
                onMouseUp={ deactivate('left') }
                onMouseLeave={ deactivate('left') }
            />

            { leftChar }

            <rect
                x={ mid.x }
                y={ mid.y }
                width={ mid.root }
                height={ mid.root }
                fill={ 'transparent' }
                onMouseDown={ activate('reset',selector,navigator) }
                onMouseUp={ deactivate('reset') }
                onMouseOver={ onHover('scope') }
                onMouseLeave={ onHover(null) }
            />

            { resetChar }

        </ g>
    );
};

const mapStateToProps = (state) => {
    const controller = state.controller.toJS();
    const synth = state.synth.toJS();
    const header = state.header.toJS();

    return {
        navigator: controller.navigator,
        selector: controller.selector,
        synths:  synth.synths,
        octaves: synth.octaves,
        help: header.help
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        activate: (key,selector,navigator) => () => {
            let activeVecs = {};
            for(let j in selector) {
                if(selector[j]) { activeVecs[j] = j; }
            }

            let activeNav = null;
            for (let j in navigator) {
                if(navigator[j]) {
                    activeNav = j;
                    break;
                }
            }

            if (activeNav === key) { return; }
            if (activeNav !== null) {
                dispatch(deactivateNavigator(activeNav))
            }
            dispatch(activateNavigator(key));
            switch(key) {
                case 'up':
                    dispatch(incrementDensity(activeVecs));
                    break;
                case 'right':
                    dispatch(incrementOffset(activeVecs));
                    break;
                case 'down':
                    dispatch(decrementDensity(activeVecs));
                    break;
                case 'left':
                    dispatch(decrementOffset(activeVecs));
                    break;
                case 'reset':
                    dispatch(resetVector(activeVecs));
                    break;
            }
        },
        deactivate: (key) => () => dispatch(deactivateNavigator(key)),
        onHover: (focus) => () => dispatch(setFocus(focus))
    };
};

const mergeProps = (stateProps,dispatchProps,ownProps) => {
    return Object.assign({}, ownProps, {
        navigator: stateProps.navigator,
        selector: stateProps.selector,
        synths: stateProps.synths,
        octaves: stateProps.octaves,
        help: stateProps.help,
        activate: dispatchProps.activate,
        deactivate: dispatchProps.deactivate,
        onHover: dispatchProps.onHover
    });
};

Navigator = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Navigator);

export default Navigator;
