'use strict';


import { compEuclidIndices } from './euclid.computation.js';


const compEuclidIndicesTable = (n) => {
    let map = {};

    for (let i=1; i<=n; i++) {
        map[i] = {};
        for (let j=1; j<=i; j++) {
            map[i][j] = compEuclidIndices(j,i);
        }
    }

    return map;
};

const euclidIndices = compEuclidIndicesTable(12);

const getEuclidIndices = (numerator, denominator, offset) => {
    if ( numerator === 0 ) { return {}; }
    const indices = euclidIndices[denominator][numerator];

    const newIndices = {};
    for (let key in indices) {
        const newVal = (indices[key] + offset) % denominator;
        newIndices[newVal] = newVal;
    }

    return newIndices;

    //return Object.keys(newIndices);
};

export default getEuclidIndices;