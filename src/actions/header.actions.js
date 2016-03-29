'use strict';


export
const SET_MODE = 'SET_MODE';

export
const SET_FOCUS = 'SET_FOCUS';

export
const SET_HELP = 'SET_HELP';


export
const setMode = (mode) => {
    return {
        type: SET_MODE,
        mode
    };
};

export
const setFocus = (focus) => {
    return {
        type: SET_FOCUS,
        focus
    };
};

export
const setHelp = (help) => {
    return {
        type: SET_HELP,
        help
    };
};