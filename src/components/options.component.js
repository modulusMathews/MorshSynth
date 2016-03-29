'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { setFocus, setMode } from './../actions/header.actions';

import { colors } from './../utilities/space.view';
import { spacer, lineSpacers,
            lineColors, lineX, lineY,
                lineWidth, circleY, textY, textSize } from './../utilities/header.view';

const fontFF = 'BebasNeueRegular';

let Options = ({focus, onHover, onClick}) => {
    return (
        <g>
            <Cell
                x={ lineX }
                y={ lineY }
                width={ lineWidth }
                height={ spacer(4) }
                spacers={ lineSpacers }
                colors={ lineColors }
            />

            <text
                x={ lineX + lineWidth / 6 }
                y={ textY }
                fontFamily={ fontFF }
                fill={ focus === 'synth' ? colors.grey : colors.black }
                fontSize={ textSize }
                textAnchor={ 'middle' }
                onMouseOver={ onHover('synth') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('synth') }
            >
                Synth
            </text>

            <circle
                cx={ lineX + lineWidth / 3 }
                cy={ circleY }
                r={ spacer(4) }
                fill={ colors.black }
            />

            <circle
                cx={ lineX + lineWidth / 3 }
                cy={ circleY }
                r={ spacer(5) }
                fill={ colors.white }
            />

            <text
                x={ lineX + lineWidth / 2 }
                y={ textY }
                fontFamily={ fontFF }
                fill={ focus === 'vision' ? colors.grey : colors.black }
                fontSize={ textSize }
                textAnchor={ 'middle' }
                onMouseOver={ onHover('vision') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('vision') }
            >
                Vision
            </text>

            <circle
                cx={ lineX + lineWidth * 2 / 3 }
                cy={ circleY }
                r={ spacer(4) }
                fill={ colors.black }
            />

            <circle
                cx={ lineX + lineWidth * 2 / 3 }
                cy={ circleY }
                r={ spacer(5) }
                fill={ colors.white }
            />

            <text
                x={ lineX  + lineWidth * 5 / 6 }
                y={ textY }
                fontFamily={ fontFF }
                fill={ focus === 'guide' ? colors.grey : colors.black }
                fontSize={ textSize }
                textAnchor={ 'middle' }
                onMouseOver={ onHover('guide') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('guide') }
            >
                Learn
            </text>

        </g>
    );
};

const mapStateToProps = (state) => {
    const header = state.header.toJS();
    return {
        focus: header.focus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHover: (focus) => () => dispatch(setFocus(focus)),
        onClick: (mode) => () => dispatch(setMode(mode))
    };
};

Options = connect(
    mapStateToProps,
    mapDispatchToProps
)(Options);

export default Options;