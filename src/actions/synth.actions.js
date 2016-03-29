'use strict';

export
const INCREMENT_DENSITY = 'INCREMENT_DENSITY';

export
const DECREMENT_DENSITY = 'DECREMENT_DENSITY';

export
const INCREMENT_OFFSET = 'INCREMENT_OFFSET';

export
const DECREMENT_OFFSET = 'DECREMENT_OFFSET';

export
const ADD_FILTER = 'ADD_FILTER';

export
const REMOVE_FILTER = 'REMOVE_FILTER';

export
const SET_SYNTH = 'SET_SYNTH';

export
const ACTIVATE_SYNTH = 'ACTIVATE_SYNTH';

export
const DEACTIVATE_SYNTH = 'DEACTIVATE_SYNTH';

export
const SET_OCTAVE = 'SET_OCTAVE';

export
const RESET_VECTOR = 'RESET_VECTOR';

export
const RESET_SYNTH = "RESET_SYNTH";


export
const incrementDensity = (keys) => {
    return {
        type: INCREMENT_DENSITY,
        keys
    };
};

export
const decrementDensity = (keys) => {
    return {
        type: DECREMENT_DENSITY,
        keys
    };
};

export
const incrementOffset = (keys) => {
    return {
        type: INCREMENT_OFFSET,
        keys
    };
};

export
const decrementOffset = (keys) => {
    return {
        type: DECREMENT_OFFSET,
        keys
    };
};

export
const addFilter = (keys) => {
    return {
        type: ADD_FILTER,
        keys
    };
};

export
const removeFilter = (keys) => {
    return {
        type: REMOVE_FILTER,
        keys
    };
};

export
const setSynth = (keys,id) => {
    return {
        type: SET_SYNTH,
        keys,
        id
    }
};

export
const activateSynth = (keys) => {
    return {
        type: ACTIVATE_SYNTH,
        keys
    };
};

export
const deactivateSynth = (keys) => {
    return {
        type: DEACTIVATE_SYNTH,
        keys
    };
};

export
const setOctave = (keys,id) => {
    return {
        type: SET_OCTAVE,
        keys,
        id
    };
};

export
const resetVector = (keys) => {
    return {
        type: RESET_VECTOR,
        keys
    };
};

export
const resetSynth = () => {
    return {
        type: RESET_SYNTH
    };
};
