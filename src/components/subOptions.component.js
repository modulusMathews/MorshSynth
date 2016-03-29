'use strict';

import React from 'react';
import { connect } from 'react-redux';

import SubSynth from './subSynth.component';

import { colors, palColors } from './../utilities/space.view';

let SubOptions = ({mode}) => {
    return (
        <g>
            { mode === 'synth' ? <SubSynth/> : null }
        </g>
    );
};

const mapStateToProps = (state) => {
    const header = state.header.toJS();
    return {
        mode: header.mode
    };
};


SubOptions = connect(
    mapStateToProps
)(SubOptions);

export default SubOptions;
