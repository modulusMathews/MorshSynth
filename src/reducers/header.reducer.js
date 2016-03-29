'use strict';

import { fromJS } from 'immutable';

import { SET_MODE, SET_FOCUS, SET_HELP } from './../actions/header.actions';


const headerMap = fromJS({
    mode: 'synth',
    focus: null,
    help: false
});

const headerReducer = (state = headerMap, action) => {
    switch (action.type) {
        case SET_MODE:
            return state.set('mode', action.mode);

        case SET_FOCUS:
            return state.set('focus', action.focus);

        case SET_HELP:
            return state.set('help', action.help);
    }

    return state;
};

export default headerReducer;