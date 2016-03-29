'use strict';

import { incrementDensity, decrementDensity,
            incrementOffset, decrementOffset,
                addFilter, setSynth, setOctave } from './../actions/synth.actions';

import { setHelp } from './../actions/header.actions';

import { activateSelector } from './../actions/controller.actions';


const initialize = (dispatch) => {
    if (localStorage.getItem('notNew') === null) {
        localStorage.setItem('notNew',true);

        for (let i=0; i<7; i++) {
            dispatch(incrementDensity({
                0: '0',
                1: '1',
                2: '2',
                3: '3',
                4: '4'
            }));
        }

        for (let i=0; i<3; i++) {
            dispatch(incrementOffset({
                0: '0',
                1: '1',
                3: '3',
                4: '4'
            }));
        }

        dispatch(addFilter({
            0: '0',
            1: '1',
            3: '3',
            4: '4'
        }));

        for (let i=0; i<4; i++) {
            dispatch(decrementDensity({
                0: '0',
                1: '1',
                3: '3',
                4: '4'
            }));
        }

        for (let i=0; i<3; i++) {
            dispatch(
                incrementOffset({0: '0'})
            );
        }

        for (let i=0; i<2; i++) {
            dispatch(
                incrementOffset({1: '1'})
            );
        }

        dispatch(decrementOffset({4: '4'}));

        for (let i=0; i<3; i++) {
            dispatch(decrementOffset({2: '2'}));
        }

        dispatch(addFilter({2: '2'}));

        for (let i=0; i<2; i++) {
            dispatch(incrementDensity({2: '2'}))
        }

        dispatch(addFilter({1: '1', 2: '2', 3: '3'}));

        dispatch(setSynth({4: '4'},'0'));
        dispatch(setOctave({2: '2'},'2'));
        dispatch(setOctave({1: '1', 3: '3'},'0'));

        dispatch(activateSelector('0'));
        dispatch(activateSelector('2'));
        dispatch(activateSelector('4'));

        dispatch(setHelp(true));
    }

    document.getElementById('App').focus();
};

export default initialize;