"use strict";

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';
import Logo from './logo.component';
import Map from './map.component';

import { activateConsumer, deactivateConsumer } from './../actions/controller.actions';
import { activateSynth, deactivateSynth } from './../actions/synth.actions';
import { setFocus } from './../actions/header.actions';

import { colors, coreSpacers, compCoreColors, contentSpacer } from './../utilities/space.view';


let Core = ({x, y, root, vectors, consumer, selector, synths, octaves, toggle, focus, help, onHover}) => {
    let coreCols = [];
    if (focus === 'core') {
        coreCols = compCoreColors(vectors,true,selector,synths,octaves);
    }
    else {
        coreCols = compCoreColors(vectors,consumer,selector,synths,octaves);
    }

    let consumeChar;
    if (help) {
        consumeChar = (
            <text
                x={ x + contentSpacer + 6 }
                y={ y + contentSpacer + 4 }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.white }
                fontSize={ 3 }
                textAnchor={ 'middle '}
            >
                spacebar
            </text>
        );
    }

    return (
        <g
            onMouseDown={ toggle(selector,consumer) }
            onMouseOver={ onHover('core') }
            onMouseLeave={ onHover(null) }
        >
            <Cell
                x={ x }
                y={ y }
                width={ root }
                height={ root }
                spacers={ coreSpacers }
                colors={ coreCols }
            />

            <Map
                x={ x + contentSpacer }
                y={ y + contentSpacer }
                root={ root - 2 * contentSpacer }
            />

            { consumeChar }

        </g>
    );
};

const mapStateToProps = (state) => {
    const synth = state.synth.toJS();
    const controller = state.controller.toJS();
    const header = state.header.toJS();
    return {
        vectors: synth.vectors,
        consumer: controller.consumer,
        selector: controller.selector,
        synths: synth.synths,
        octaves: synth.octaves,
        focus: header.focus,
        help: header.help
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (selector,consumer) => () => {
            let selectors = {};
            for(let j in selector) {
                if(selector[j]) { selectors[j] = j; }
            }

            if (consumer) {
                dispatch(deactivateConsumer());
                dispatch(deactivateSynth(selectors));
            }
            else {
                dispatch(activateConsumer());
                dispatch(activateSynth(selectors));
            }
        },
        onHover: (focus) => () => dispatch(setFocus(focus))
    };
};

Core = connect(
    mapStateToProps,
    mapDispatchToProps
)(Core);

export default Core;