'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { setFocus } from './../actions/header.actions';

import { colors, spacer } from './../utilities/space.view';


let Techs = ({x, y, width, height, focus, onHover, onClick}) => {
    const titleF = spacer(3.5);
    const titleX = x + spacer(5);
    const titleY = y + spacer(3);

    const labelF = spacer(4.25);
    const labelFF = 'BebasNeueBook';
    //const labelX = titleX + width * 1.5 / 7;
    //const labelY = (j) => titleY + titleF + spacer(7) + j * labelF + j * spacer(7);

    return (
        <g>
            <text
                x={ titleX }
                y={ titleY }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.black }
                fontSize={ titleF }
                textAnchor={ 'start '}
            >
                Tech
            </text>

            <text
                x={ titleX + width / 2 - width / 4 }
                y={ titleY + titleF + spacer(7) }
                fontFamily={ labelFF }
                fill={ focus === 'react' ? colors.grey : colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
                onMouseOver={ onHover('react') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('https://facebook.github.io/react/') }
            >
                React
            </text>

            <text
                x={ titleX + width / 2 }
                y={ titleY + titleF + spacer(7) }
                fontFamily={ labelFF }
                fill={ focus === 'redux' ? colors.grey : colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
                onMouseOver={ onHover('redux') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('http://redux.js.org/') }
            >
                Redux
            </text>

            <text
                x={ titleX + width / 2 + spacer(3.375) }
                y={ titleY + titleF + spacer(7) }
                fontFamily={ labelFF }
                fill={ focus === 'tone' ? colors.grey : colors.black }
                fontSize={ labelF }
                textAnchor={ 'start' }
                onMouseOver={ onHover('tone') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('https://www.npmjs.com/package/tone') }
            >
                Tone
            </text>

            <text
                x={ titleX + width / 2 }
                y={ titleY + titleF + labelF + 2 * spacer(8) }
                fontFamily={ labelFF }
                fill={ focus === 'immutable' ? colors.grey : colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle'}
                onMouseOver={ onHover('immutable') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('https://facebook.github.io/immutable-js/') }
            >
                Immutable
            </text>

            <rect
                x={ x + spacer(3.75) }
                y={ titleY + spacer(11) }
                width={ width / 4.375 }
                height={ spacer(13) }
                rx={ spacer(14) / 2 }
                ry={ spacer(14) / 2 }
                fill={ colors.black }
            />
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
        onClick: (url) => () => window.open(url)
    };
};

Techs = connect(
    mapStateToProps,
    mapDispatchToProps
)(Techs);


export default Techs;