'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { activateOctave, deactivateOctave } from './../actions/controller.actions';
import {setOctave } from './../actions/synth.actions';

import { spacer, colors, compNavOnColor, offColors } from './../utilities/space.view';


const numOcts = 3;

let Octave = ({x, y, width, height, selector, octave, synths, octs, help, activate, deactivate}) => {
    const octX = x + spacer(12) * 4;
    const octS = spacer(15) + spacer(18);
    const octH = (height - 6 * octS) / 3;
    const octW = width - 2 * spacer(12) * 3;

    let octaves = [];
    for (let i=0; i<numOcts; i++) {
        const id = String(numOcts - i - 1);
        octaves.push(
            <Cell
                key={ id }
                x={ octX }
                y={ y + octS + octH * i + 2 * octS * i }
                width={ octW }
                height={ octH }
                spacers={{
                    0: spacer(13),
                    1: spacer(16),
                    2: spacer(19),
                    3: spacer(22)
                }}
                colors={ octave[id] ? compNavOnColor(selector,synths,octs) : offColors }
                onMouseDown={ activate(id,selector) }
                onMouseUp={ deactivate(id) }
                onMouseLeave={ deactivate(id) }
            />
        );
    }

    let chars = [];
    if (help) {
        for (let i=0; i<numOcts; i++) {
            let char;
            if (i === 0) {
                char = 'o';
            }
            else if (i === 1) {
                char = 'p';
            }
            else if (i === 2) {
                char = '[';
            }

            chars.push(
                <text
                    key={ i }
                    x={ octX + octW / 2 }
                    y={ y + octS + octH * i + 2 * octS * i + octH * 11.5 / 17 }
                    fontFamily={ 'BebasNeueRegular' }
                    fill={ colors.white }
                    fontSize={ octH / 2  }
                    textAnchor={ 'middle '}
                >
                    { char }
                </text>
            );
        }
    }

    return <g>{ octaves }{ chars }</g>;
};

const mapStateToProps = (state) => {
    const synth = state.synth.toJS();
    const controller = state.controller.toJS();
    const header = state.header.toJS();

    return {
        synths: synth.synths,
        octs: synth.octaves,
        selector: controller.selector,
        octave: controller.octave,
        help: header.help
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        activate: (id,selector) => () => {
            let selectors = {};
            for(let j in selector) {
                if(selector[j]) { selectors[j] = j; }
            }

            dispatch(activateOctave(id));
            dispatch(setOctave(selectors,id));
        },
        deactivate: (id) => () => {
            dispatch(deactivateOctave(id));
        }
    };
};

Octave = connect(
    mapStateToProps,
    mapDispatchToProps
)(Octave);

export default Octave;
