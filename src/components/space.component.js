'use strict';

import React from 'react';
import { connect } from 'react-redux';

import SVG from './svg.component';
import Synth from './synth.component';
import Vision from './vision.component';
import Guide from './guide.component';

import { colors, spaceSize } from './../utilities/space.view';


let Space = ({ mode }) => {
    let content;
    switch (mode) {
        case 'synth':
            content = <Synth/>;
            break;

        case 'vision':
            content = <Vision/>;
            break;

        case 'guide':
            content = <Guide/>;
            break;
    }

    return (
        <SVG width={ spaceSize.width } height={ spaceSize.height }>
            { content }
        </ SVG>
    );
};

const mapStateToProps = (state) => {
    return {
        mode: state.header.toJS().mode
    };
};

Space = connect(
    mapStateToProps
)(Space);

export default Space;