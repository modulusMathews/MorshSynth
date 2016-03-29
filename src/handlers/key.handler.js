'use strict';

import { activateConsumer, deactivateConsumer,
            activateNavigator, deactivateNavigator,
                activateSelector, deactivateSelector,
                    activatePalette, deactivatePalette,
                        activateFilter, deactivateFilter,
                            activateOctave, deactivateOctave,
                                resetController } from './../actions/controller.actions';

import { incrementDensity, decrementDensity,
            incrementOffset, decrementOffset,
                addFilter, removeFilter,
                    activateSynth, deactivateSynth,
                        setOctave, setSynth,
                            resetVector, resetSynth } from './../actions/synth.actions';

const KeyHandler = (store) => {
    return {
        onDown: onDownHandler,
        onUp: onUpHandler
    };

    function onDownHandler(event){
        const state = store.getState();
        if (state.header.get('mode') !== 'synth') { return; }
        const controller = state.controller.toJS();
        const consuming = controller.consumer;
        const keyCode = String(event.keyCode);
        console.log(keyCode)

        let activeVecs = {};
        let activePal = null;
        const selector = controller.selector;
        const palette = controller.palette;
        for(let j in selector) {
            if(selector[j]) { activeVecs[j] = j; }
            if(palette[j]) { activePal = j }
        }

        let activeNav = null;
        const navigator = controller.navigator;
        for (let j in navigator) {
            if(navigator[j]) {
                activeNav = j;
                break;
            }
        }

        let activeOct = null;
        const octave = controller.octave;
        for (let j in octave) {
            if(octave[j]) {
                activeOct = j;
                break;
            }
        }

        let activeFilt = null;
        const filter = controller.filter;
        if (filter.add) {
            activeFilt = 'add';
        }
        else if (filter.remove) {
            activeFilt = 'remove';
        }

        switch(keyCode) {
            case '32':
                if (consuming) { return; }
                store.dispatch(activateConsumer());
                store.dispatch(activateSynth(activeVecs));
                return;


            case '73': // i
                if (activeNav === 'up') { return; }
                if (activeNav !== null) {
                    store.dispatch(deactivateNavigator(activeNav))
                }
                store.dispatch(activateNavigator('up'));
                store.dispatch(incrementDensity(activeVecs));
                return;

            case '76': // l
                if (activeNav === 'right') { return; }
                if (activeNav !== null) {
                    store.dispatch(deactivateNavigator(activeNav))
                }
                store.dispatch(activateNavigator('right'));
                store.dispatch(incrementOffset(activeVecs));
                return;

            case '188': // ,
                if (activeNav === 'down') { return; }
                if (activeNav !== null) {
                    store.dispatch(deactivateNavigator(activeNav))
                }
                store.dispatch(activateNavigator('down'));
                store.dispatch(decrementDensity(activeVecs));
                return;

            case '74': // j
                if (activeNav === 'left') { return; }
                if (activeNav !== null) {
                    store.dispatch(deactivateNavigator(activeNav))
                }
                store.dispatch(activateNavigator('left'));
                store.dispatch(decrementOffset(activeVecs));
                return;

            case '75': // k
                if (activeNav === 'reset') { return; }
                if (activeNav !== null) {
                    store.dispatch(deactivateNavigator(activeNav))
                }
                store.dispatch(activateNavigator('reset'));
                store.dispatch(resetVector(activeVecs));
                return;


            case '65': // a
                if (activeVecs.hasOwnProperty('0')) { return; }
                store.dispatch(activateSelector('0'));
                if (consuming) { store.dispatch(activateSynth({'0': 0})); }
                return;

            case '83': // s
                if (activeVecs.hasOwnProperty('1')) { return; }
                store.dispatch(activateSelector('1'));
                if (consuming) { store.dispatch(activateSynth({'1': 1})); }
                return;

            case '68': // d
                if (activeVecs.hasOwnProperty('2')) { return; }
                store.dispatch(activateSelector('2'));
                if (consuming) { store.dispatch(activateSynth({'2': 2})); }
                return;

            case '70': // f
                if (activeVecs.hasOwnProperty('3')) { return; }
                store.dispatch(activateSelector('3'));
                if (consuming) { store.dispatch(activateSynth({'3': 3})); }
                return;

            case '71': // g
                if (activeVecs.hasOwnProperty('4')) { return; }
                store.dispatch(activateSelector('4'));
                if (consuming) { store.dispatch(activateSynth({'4': 4})); }
                return;


            case '190': // ,
                if (activeFilt === 'remove') { return; }
                if (activeFilt !== null) {
                    store.dispatch(deactivateFilter(activeFilt));
                }
                store.dispatch(activateFilter('remove'));
                store.dispatch(removeFilter(activeVecs));
                return;

            case '191': // /
                if (activeFilt === 'add') { return; }
                if (activeFilt !== null) {
                    store.dispatch(deactivateFilter(activeFilt));
                }
                store.dispatch(activateFilter('add'));
                store.dispatch(addFilter(activeVecs));
                return;


            case '79': // o
                if (activeOct === '0') { return; }
                if (activeOct !== null) {
                    store.dispatch(deactivateOctave(activeOct))
                }
                store.dispatch(activateOctave('0'));
                store.dispatch(setOctave(activeVecs,'0'));
                return;

            case '80': // p
                if (activeOct === '1') { return; }
                if (activeOct !== null) {
                    store.dispatch(deactivateOctave(activeOct))
                }
                store.dispatch(activateOctave('1'));
                store.dispatch(setOctave(activeVecs,'1'));
                return;

            case '219': // [
                if (activeOct === '2') { return; }
                if (activeOct !== null) {
                    store.dispatch(deactivateOctave(activeOct))
                }
                store.dispatch(activateOctave('2'));
                store.dispatch(setOctave(activeVecs,'2'));
                return;


            case '54': // 6
                if (activePal === '0') { return; }
                if (activePal !== null) {
                    store.dispatch(deactivatePalette(activePal));
                }
                store.dispatch(activatePalette('0'));
                store.dispatch(setSynth(activeVecs,'0'));
                return;

            case '55': // 7
                if (activePal === '1') { return; }
                if (activePal !== null) {
                    store.dispatch(deactivatePalette(activePal));
                }
                store.dispatch(activatePalette('1'));
                store.dispatch(setSynth(activeVecs,'1'));
                return;

            case '56': // 8
                if (activePal === '2') { return; }
                if (activePal !== null) {
                    store.dispatch(deactivatePalette(activePal));
                }
                store.dispatch(activatePalette('2'));
                store.dispatch(setSynth(activeVecs,'2'));
                return;

            case '57': // 9
                if (activePal === '3') { return; }
                if (activePal !== null) {
                    store.dispatch(deactivatePalette(activePal));
                }
                store.dispatch(activatePalette('3'));
                store.dispatch(setSynth(activeVecs,'3'));
                return;

            case '48': // 0
                if (activePal === '4') { return; }
                if (activePal !== null) {
                    store.dispatch(deactivatePalette(activePal));
                }
                store.dispatch(activatePalette('4'));
                store.dispatch(setSynth(activeVecs,'4'));
                return;

            default:
                console.log(keyCode);
        }
    }

    function onUpHandler(event){
        const state = store.getState();
        if (state.header.get('mode') !== 'synth') { return; }
        const isShift = event.shiftKey;
        const keyCode = String(event.keyCode);

        switch(keyCode) {
            case '32':
                if (isShift) { return; }
                store.dispatch(deactivateConsumer());

                let activeVecs = {};
                const selector = state.controller.get('selector').toJS();
                for(let j in selector) {
                    if(selector[j]) { activeVecs[j] = j; }
                }
                store.dispatch(deactivateSynth(activeVecs));
                return;


            case '73': // i
                store.dispatch(deactivateNavigator('up'));
                return;

            case '76': // l
                store.dispatch(deactivateNavigator('right'));
                return;

            case '188': // ,
                store.dispatch(deactivateNavigator('down'));
                return;

            case '74': // j
                store.dispatch(deactivateNavigator('left'));
                return;

            case '75': // k
                store.dispatch(deactivateNavigator('reset'));
                return;

            case '65': // a
                if (isShift) { return; }
                store.dispatch(deactivateSelector('0'));
                store.dispatch(deactivateSynth({'0': 0}));
                return;

            case '83': // s
                if (isShift) { return; }
                store.dispatch(deactivateSelector('1'));
                store.dispatch(deactivateSynth({'1': 1}));
                return;

            case '68': // d
                if (isShift) { return; }
                store.dispatch(deactivateSelector('2'));
                store.dispatch(deactivateSynth({'2': 2}));
                return;

            case '70': // f
                if (isShift) { return; }
                store.dispatch(deactivateSelector('3'));
                store.dispatch(deactivateSynth({'3': 3}));
                return;

            case '71': // g
                if (isShift) { return; }
                store.dispatch(deactivateSelector('4'));
                store.dispatch(deactivateSynth({'4': 4}));
                return;


            case '54': // 6
                store.dispatch(deactivatePalette('0'));
                return;

            case '55': // 7
                store.dispatch(deactivatePalette('1'));
                return;

            case '56': // 8
                store.dispatch(deactivatePalette('2'));
                return;

            case '57': // 9
                store.dispatch(deactivatePalette('3'));
                return;

            case '48': // 0
                store.dispatch(deactivatePalette('4'));
                return;


            case '190': // .
                store.dispatch(deactivateFilter('remove'));
                return;

            case '191': // /
                store.dispatch(deactivateFilter('add'));
                return;


            case '79': // o
                store.dispatch(deactivateOctave('0'));
                return;

            case '80': // p
                store.dispatch(deactivateOctave('1'));
                return;

            case '219': // [
                store.dispatch(deactivateOctave('2'));
                return;


            default:
                console.log(keyCode);
        }
    }
};

export default KeyHandler;