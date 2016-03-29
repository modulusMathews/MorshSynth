'use strict';

import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

import controllerReducer from './controller.reducer.js';
import synthReducer from './synth.reducer';
import headerReducer from './header.reducer';

const reducer = combineReducers({
    controller: controllerReducer,
    synth: synthReducer,
    header: headerReducer
});

export default reducer;