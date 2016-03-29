'use strict';

const compEuclidCore = (lhs, rhs) => {
    if(lhs === 0 && rhs === 0) { return ''; }

    return lhs > 0 ?
        recCoreGen(lhs, '1', rhs, '0') : '0';

    function recCoreGen(lhs, lhsStr, rhs, rhsStr) {
        if(rhs === 0) { return lhsStr; }

        return lhs > rhs ?
            recCoreGen(lhs - rhs, lhsStr, rhs, lhsStr + rhsStr):
            recCoreGen(lhs, lhsStr + rhsStr, rhs - lhs, rhsStr);
    }
};

const coreToWhole = (coreStr, resolution, offset) => {
    if (coreStr === '') { return coreStr; }

    let result = '';
    const coreLength = coreStr.length;

    for(let i=0; i<resolution; i++) {
        const index = (resolution - offset + i) % resolution;
        result += coreStr[index % coreLength];
    }

    return result;
};

const compEuclidStr = (numerator, denominator, offset) => {
    const lhs = numerator;
    const rhs = denominator - numerator;

    const coreStr = compEuclidCore( lhs, rhs);

    return coreToWhole(coreStr, denominator, offset);
};

export default compEuclidStr;

export
const compEuclidIndices = (numerator, denominator) => {
    const string = compEuclidStr(numerator, denominator, 0);
    const indices = {};

    for(let i=0; i<string.length; i++) {
        if (string[i] === '1') { indices[i] = i; }
    }

    return indices;
};