'use strict';

import { fromJS, List, Map } from 'immutable';
import Tone from 'tone';

import { INCREMENT_DENSITY, DECREMENT_DENSITY,
            INCREMENT_OFFSET, DECREMENT_OFFSET,
                ADD_FILTER, REMOVE_FILTER,
                    ACTIVATE_SYNTH, DEACTIVATE_SYNTH,
                        SET_OCTAVE, SET_SYNTH,
                            RESET_VECTOR, RESET_SYNTH } from './../actions/synth.actions';

import getEuclidIndices from './../utilities/euclid.table';

const maxFilters = 2;
const resolution = 12;
const density = 0;
const offset = 0;
const indices = getEuclidIndices(density, resolution, offset);

const blankMap = fromJS({
    resolution: resolution,
    ids: [0, 1, 2, 3, 4],
    bases: {
        densities: {
            0: density,
            1: density,
            2: density,
            3: density,
            4: density
        },
        offsets: {
            0: offset,
            1: offset,
            2: offset,
            3: offset,
            4: offset
        },
        indices: {
            0: indices,
            1: indices,
            2: indices,
            3: indices,
            4: indices
        }
    },
    filters: {
        0: List(),
        1: List(),
        2: List(),
        3: List(),
        4: List()
    },
    vectors: {
        0: indices,
        1: indices,
        2: indices,
        3: indices,
        4: indices
    },
    synths: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4'
    },
    octaves: {
        0: '1',
        1: '1',
        2: '1',
        3: '1',
        4: '1'
    },
    actives: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    },
    notes: {
        0: List(),
        1: List(),
        2: List(),
        3: List(),
        4: List()
    }
});

const basePath = ['bases'];
const denPath = basePath.concat(['densities']);
const offPath = basePath.concat(['offsets']);
const indPath = basePath.concat(['indices']);
const filterPath = ['filters'];
const vecPath = ['vectors'];
const synthPath = ['synths'];
const octPath = ['octaves'];
const actPath = ['actives'];
const notesPath = ['notes'];

const Path = key => {
    return {
        density: denPath.concat(key),
        indices: indPath.concat(key),
        offset: offPath.concat(key),
        filter: filterPath.concat(key),
        vector: vecPath.concat(key),
        synth: synthPath.concat(key),
        octave: octPath.concat(key),
        active: actPath.concat(key),
        notes: notesPath.concat(key)
    };
};

const SimpleSynth = (atts) => {
    const synth = new Tone.PolySynth(resolution, Tone.MonoSynth).toMaster();
    synth.set(atts);
    return synth;
};

const octaves = {
    '0': ["C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3"],
    '1': ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4"],
    '2': ["C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5"]
};


const palette = {
    0: {
        oscillator: { type: 'square' },
        filter:{
            Q: 7,
            type: "lowpass",
            rolloff: -24
        },
        envelope:{
            attack: 0.005,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        },
        filterEnvelope:{
            attack: 0.06,
            decay: 0.1,
            sustain: 0.5,
            release: 2,
            baseFrequency: 220,
            octaves: 4,
            exponent: 3
        }
    },
    1: {
        oscillator: { type: 'square' },
        filter:{
            Q: 7,
            type: "allpass",
            rolloff: -24
        },
        envelope:{
            attack: 0.005,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        },
        filterEnvelope:{
            attack: 0.06,
            decay: 0.1,
            sustain: 0.5,
            release: 2,
            baseFrequency: 220,
            octaves: 3,
            exponent: 3
        }
    },
    2: {
        oscillator: { type: 'square' },
        filter:{
            Q: 7,
            type: "lowpass",
            rolloff: -24
        },
        envelope:{
            attack: 0.005,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        },
        filterEnvelope:{
            attack: 0.03,
            decay: 0.01,
            sustain: 1,
            release: 1,
            baseFrequency: 220,
            octaves: 3,
            exponent: 2
        }
    },
    3: {
        oscillator: { type: 'sawtooth' },
        filter:{
            Q: 7,
            type: "lowpass",
            rolloff: -24
        },
        envelope:{
            attack: 0.005,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        },
        filterEnvelope:{
            attack: 0.06,
            decay: 0.1,
            sustain: 0.5,
            release: 2,
            baseFrequency: 220,
            octaves: 5,
            exponent: 2
        }
    },
    4: {
        oscillator: { type: 'sawtooth' },
        filter:{
            Q: 7,
            type: "allpass",
            rolloff: -24
        },
        envelope:{
            attack: 0.005,
            decay: 0.1,
            sustain: 0.3,
            release: 1
        },
        filterEnvelope:{
            attack: 0.06,
            decay: 0.1,
            sustain: 0.5,
            release: 2,
            baseFrequency: 220,
            octaves: 4,
            exponent: 2
        }
    }
};

const getNotes = (id,vector) => {
    if (Map.isMap(vector) || vector.hasOwnProperty('size')) { return []; }
    const notes = octaves[id];
    const result = [];
    for (let i in vector) {
        result.push(notes[i]);
    }
    return result;
};

const voices = {
    0: SimpleSynth(palette['0']),
    1: SimpleSynth(palette['1']),
    2: SimpleSynth(palette['2']),
    3: SimpleSynth(palette['3']),
    4: SimpleSynth(palette['4'])
};

const initialMap = fromJS({
    resolution: resolution,
    ids: [0, 1, 2, 3, 4],
    bases: {
        densities: {
            0: 7,
            1: 7,
            2: 7,
            3: 7,
            4: 7
        },
        offsets: {
            0: 3,
            1: 3,
            2: 9,
            3: 3,
            4: 3
        },
        indices: {
            0: getEuclidIndices(7,resolution,3),
            1: getEuclidIndices(7,resolution,3),
            2: getEuclidIndices(7,resolution,9),
            3: getEuclidIndices(7,resolution,3),
            4: getEuclidIndices(7,resolution,3)
        }
    },
    filters: {
        0: List([new Filter(3,7,3)]),
        1: List([new Filter(3,7,0),new Filter(3,3,0)]),
        2: List([new Filter(1,7,0),new Filter(1,1,0)]),
        3: List([new Filter(3,7,2),new Filter(3,3,0)]),
        4: List([new Filter(3,7,6)])
    },
    vectors: {
        0: compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,3)]),
        1: compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,0),new Filter(3,3,0)]),
        2: compVector(getEuclidIndices(7,resolution,9),[new Filter(1,7,0),new Filter(1,1,0)]),
        3: compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,2),new Filter(3,3,0)]),
        4: compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,6)])
    },
    synths: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '0'
    },
    octaves: {
        0: '1',
        1: '0',
        2: '2',
        3: '0',
        4: '1'
    },
    actives: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    },
    notes: {
        0: getNotes('1',compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,3)])),
        1: getNotes('0',compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,0),new Filter(3,3,0)])),
        2: getNotes('2',compVector(getEuclidIndices(7,resolution,9),[new Filter(1,7,0),new Filter(1,1,0)])),
        3: getNotes('0',compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,2),new Filter(3,3,0)])),
        4: getNotes('1',compVector(getEuclidIndices(7,resolution,3),[new Filter(3,7,6)]))
    }
});

const synthReducer = (state = blankMap, action) => {
    switch (action.type) {
        case INCREMENT_DENSITY:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);
                    const size = tempState.getIn(path.filter).size;

                    if (size === 0) {
                        const density = value => (value < resolution) ? value + 1 : 0;
                        tempState.updateIn(path.density,density);

                        const indices = getEuclidIndices(tempState.getIn(path.density), resolution, tempState.getIn(path.offset));
                        tempState.setIn(path.indices,indices);
                    }
                    else {
                        const oldFilter = tempState.getIn(path.filter);
                        const lastFilter = oldFilter.last();
                        const oldDensity = lastFilter.density;
                        const resolution = lastFilter.resolution;
                        const density = (oldDensity < resolution) ? oldDensity + 1 : 0;

                        lastFilter.density = density;
                        lastFilter.indices = getEuclidIndices(lastFilter.density, lastFilter.resolution, lastFilter.offset);

                        tempState.setIn(path.filter, oldFilter.set(size - 1, lastFilter));
                    }

                    const vector = compVector(tempState.getIn(path.indices), tempState.getIn(path.filter).toJS());
                    const notes = getNotes(tempState.getIn(path.octave),vector);
                    tempState
                        .setIn(path.vector,vector)
                        .setIn(path.notes,notes);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes, undefined, 0.05);
                    }
                }
            });

        case DECREMENT_DENSITY:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);
                    const size = tempState.getIn(path.filter).size;

                    if (size === 0) {
                        const density = value => (value > 0) ? value - 1 : resolution;
                        tempState.updateIn(path.density,density);

                        const indices = getEuclidIndices(tempState.getIn(path.density), resolution, tempState.getIn(path.offset));
                        tempState.setIn(path.indices,indices);
                    }
                    else {
                        const oldFilter = tempState.getIn(path.filter);
                        const lastFilter = oldFilter.last();
                        const oldDensity = lastFilter.density;
                        const resolution = lastFilter.resolution;
                        const density = (oldDensity > 0) ? oldDensity - 1 : resolution;

                        lastFilter.density = density;
                        lastFilter.indices = getEuclidIndices(lastFilter.density, lastFilter.resolution, lastFilter.offset);

                        tempState.setIn(path.filter, oldFilter.set(size - 1, lastFilter));
                    }

                    const vector = compVector(tempState.getIn(path.indices), tempState.getIn(path.filter).toJS());
                    const notes = getNotes(tempState.getIn(path.octave),vector);
                    tempState
                        .setIn(path.vector,vector)
                        .setIn(path.notes,notes);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes, undefined, 0.05);
                    }
                }
            });

        case INCREMENT_OFFSET:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);
                    const size = tempState.getIn(path.filter).size;

                    if (size === 0) {
                        const offset = value => (value < resolution - 1) ? value + 1 : 0;
                        tempState.updateIn(path.offset,offset);

                        const indices = getEuclidIndices(tempState.getIn(path.density), resolution, tempState.getIn(path.offset));
                        tempState.setIn(path.indices,indices);
                    }
                    else {
                        const oldFilter = tempState.getIn(path.filter);
                        const lastFilter = oldFilter.last();
                        const oldOffset = lastFilter.offset;
                        const resolution = lastFilter.resolution;
                        const offset = (oldOffset < resolution - 1) ? oldOffset + 1 : 0;

                        lastFilter.offset = offset;
                        lastFilter.indices = getEuclidIndices(lastFilter.density, lastFilter.resolution, lastFilter.offset);

                        tempState.setIn(path.filter, oldFilter.set(size - 1, lastFilter));
                    }

                    const vector = compVector(tempState.getIn(path.indices), tempState.getIn(path.filter).toJS());
                    const notes = getNotes(tempState.getIn(path.octave),vector);
                    tempState
                        .setIn(path.vector,vector)
                        .setIn(path.notes,notes);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes, undefined, 0.05);
                    }
                }
            });

        case DECREMENT_OFFSET:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);
                    const size = tempState.getIn(path.filter).size;

                    if (size === 0) {
                        const offset = value => (value > 0) ? value - 1 : resolution - 1;
                        tempState.updateIn(path.offset,offset);

                        const indices = getEuclidIndices(tempState.getIn(path.density), resolution, tempState.getIn(path.offset));
                        tempState.setIn(path.indices,indices);
                    }
                    else {
                        const oldFilter = tempState.getIn(path.filter);
                        const lastFilter = oldFilter.last();
                        const oldOffset = lastFilter.offset;
                        const resolution = lastFilter.resolution;
                        const offset = (oldOffset > 0) ? oldOffset - 1 : resolution - 1;

                        lastFilter.offset = offset;
                        lastFilter.indices = getEuclidIndices(lastFilter.density, lastFilter.resolution, lastFilter.offset);

                        tempState.setIn(path.filter, oldFilter.set(size - 1, lastFilter));
                    }

                    const vector = compVector(tempState.getIn(path.indices), tempState.getIn(path.filter).toJS());
                    const notes = getNotes(tempState.getIn(path.octave),vector);
                    tempState
                        .setIn(path.vector,vector)
                        .setIn(path.notes,notes);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes, undefined, 0.05);
                    }
                }
            });

        case ADD_FILTER:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);
                    const size = tempState.getIn(path.filter).size;

                    if (size === maxFilters) { continue; }

                    let density;
                    if (size === 0) {
                        density = tempState.getIn(path.density);
                    }
                    else {
                        density = tempState.getIn(path.filter).last().density;
                    }

                    const filter = tempState.getIn(path.filter).push(new Filter(density,density));
                    const vector = compVector(tempState.getIn(path.indices), tempState.getIn(path.filter).toJS());
                    const notes = getNotes(tempState.getIn(path.octave),vector);

                    tempState
                        .setIn(path.filter,filter)
                        .setIn(path.vector,vector)
                        .setIn(path.notes,notes);

                }
            });

        case REMOVE_FILTER:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);

                    let filter = tempState.getIn(path.filter);
                    filter = filter.pop();
                    const vector = compVector(tempState.getIn(path.indices), filter.toJS());
                    const notes = getNotes(tempState.getIn(path.octave),vector);

                    tempState
                        .setIn(path.filter,filter)
                        .setIn(path.vector,vector)
                        .setIn(path.notes,notes);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes,undefined,0.05);
                    }
                }
            });


        case SET_OCTAVE:
            return state.withMutations(tempState => {
                const id = action.id;
                for(let key in action.keys) {
                    const path = new Path(key);

                    tempState.setIn(path.octave,id);

                    const vector = tempState.getIn(path.vector);
                    const notes = getNotes(tempState.getIn(path.octave),vector);
                    tempState.setIn(path.notes,notes);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes, undefined, 0.05);
                    }
                }
            });

        case SET_SYNTH:
            return state.withMutations(tempState => {
                const id = action.id;
                for(let key in action.keys) {
                    const path = new Path(key);

                    const vector = tempState.getIn(path.vector);
                    const notes = getNotes(tempState.getIn(path.octave),vector);

                    tempState
                        .setIn(path.synth,id)
                        .setIn(path.notes,notes);

                    voices[key].set(palette[id]);

                    if (tempState.getIn(path.active)) {
                        voices[key]
                            .releaseAll()
                            .triggerAttack(notes, undefined, 0.05);
                    }
                }
            });

        case ACTIVATE_SYNTH:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);

                    tempState.setIn(path.active, true);

                    let notes = tempState.getIn(path.notes);
                    //if (List.isList(notes)) { notes = notes.toJS(); } // TODO HACK Make initialState work
                    if (notes.size !== 0) {
                        voices[key].triggerAttack(notes, undefined, 0.05);
                    }
                }
            });


        case DEACTIVATE_SYNTH:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = actPath.concat(key);

                    tempState.setIn(path, false);

                    voices[key].releaseAll();
                }
            });


        case RESET_VECTOR:
            return state.withMutations(tempState => {
                for(let key in action.keys) {
                    const path = new Path(key);

                    tempState
                        .setIn(path.density, 0)
                        .setIn(path.offset, 0)
                        .setIn(path.indices, {})
                        .setIn(path.filter, List())
                        .setIn(path.vector, {})
                        .setIn(path.notes, []);

                    if (tempState.getIn(path.active)) {
                        voices[key].releaseAll()
                    }
                }
            });


        case RESET_SYNTH:
            return blankMap;
    }

    return state;
};

export default synthReducer;



function Filter(density,resolution,offset) {
    if (offset === undefined) { offset = 0; }
    const indices = getEuclidIndices(density, resolution, offset);
    return {
        density,
        resolution,
        offset,
        indices
    };
}

function compVector(base,filters) {
    //if (Map.isMap(base)) { base = base.toJS(); } // TODO HACK Make initialState work
    let indices = Object.keys(base);
    for (let i=0; i<filters.length; i++) {
        const filter = filters[i].indices;
        let newIndices = [];
        for (let i in filter) {
            newIndices.push(indices[filter[i]]);
        }
        indices = newIndices;
    }

    let vector = {};
    for (let i=0; i<indices.length; i++) {
        vector[indices[i]] = indices[i];
    }

    return vector;
}
