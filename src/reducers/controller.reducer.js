'use strict';

import { fromJS } from 'immutable';

import { ACTIVATE_CONSUMER, DEACTIVATE_CONSUMER,
            ACTIVATE_NAVIGATOR, DEACTIVATE_NAVIGATOR,
                ACTIVATE_SELECTOR, DEACTIVATE_SELECTOR,
                    ACTIVATE_PALETTE, DEACTIVATE_PALETTE,
                        ACTIVATE_FILTER, DEACTIVATE_FILTER,
                            ACTIVATE_OCTAVE, DEACTIVATE_OCTAVE,
                                RESET_CONTROLLER } from './../actions/controller.actions';


const blankMap = fromJS({
    consumer: false,
    navigator: {
        up: false,
        right: false,
        down: false,
        left: false,
        reset: false
    },
    selector: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    },
    palette: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    },
    filter: {
        add: false,
        remove: false
    },
    octave: {
        0: false,
        1: false,
        2: false
    }
});

const controllerReducer = (state = blankMap, action) => {
    switch (action.type) {
        case ACTIVATE_CONSUMER:
            if (state.get('consumer')) { break; }
            return state.set('consumer', true);

        case DEACTIVATE_CONSUMER:
            if (!state.get('consumer')) { break; }
            return state.set('consumer', false);

        case ACTIVATE_NAVIGATOR:
            if (state.getIn(['navigator', action.id])) { break; }
            return state.setIn(['navigator', action.id], true);

        case DEACTIVATE_NAVIGATOR:
            if (!state.getIn(['navigator', action.id])) { break; }
            return state.setIn(['navigator', action.id], false);

        case ACTIVATE_SELECTOR:
            if (state.getIn(['selector', action.id])) { break; }
            return state.setIn(['selector', action.id], true);

        case DEACTIVATE_SELECTOR:
            if (!state.getIn(['selector', action.id])) { break; }
            return state.setIn(['selector', action.id], false);

        case ACTIVATE_PALETTE:
            if (state.getIn(['palette', action.id])) { break; }
            return state.setIn(['palette', action.id], true);

        case DEACTIVATE_PALETTE:
            if (!state.getIn(['palette', action.id])) { break; }
            return state.setIn(['palette', action.id], false);

        case ACTIVATE_FILTER:
            if (state.getIn(['filter', action.id])) { break; }
            return state.setIn(['filter', action.id], true);

        case DEACTIVATE_FILTER:
            if (!state.getIn(['filter', action.id])) { break; }
            return state.setIn(['filter', action.id], false);

        case ACTIVATE_OCTAVE:
            if (state.getIn(['octave', action.id])) { break; }
            return state.setIn(['octave', action.id], true);

        case DEACTIVATE_OCTAVE:
            if (!state.getIn(['octave', action.id])) { break; }
            return state.setIn(['octave', action.id], false);

        case RESET_CONTROLLER:
            return blankMap;
    }

    return state;
};

export default controllerReducer;