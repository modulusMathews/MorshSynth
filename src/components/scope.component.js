'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { colors, scopePoints, scopePointRadius, compScopePointCol, spacer } from './../utilities/space.view';


let Scope = ({vectors, selector, synths, octaves, focus}) => {
    let points = [];
    for(let i=0; i<12; i++) {
        const currentPoint = scopePoints[i];
        const pointIndex = String(i);
        let isEmpty = true;

        for (let j=0; j<5; j++) {
            const vecInd = String(j);

            if (selector[vecInd] && vectors[vecInd].hasOwnProperty(pointIndex)) {
                if (isEmpty) { isEmpty = false; }
            }
        }

        if (!isEmpty) {
            points.push(
                <g key={ 'point-' + i } >
                    <circle
                        key={ 'base-' + i }
                        cx={ currentPoint.x }
                        cy={ currentPoint.y }
                        r={ spacer(12) }
                        fill={ colors.black }
                    />

                    <circle
                        key={ 'mid-' + i }
                        cx={ currentPoint.x }
                        cy={ currentPoint.y }
                        r={ spacer(14) }
                        fill={ colors.white }
                    />

                    <circle
                        key={ 'top-' + i }
                        cx={ currentPoint.x }
                        cy={ currentPoint.y }
                        r={ spacer(17) }
                        fill={ focus === 'scope' ? colors.black : compScopePointCol(i, selector, vectors, synths, octaves) }
                    />

                </g>
            );
        }
    }

    return <g>{ points }</g>;
};

const mapStateToProps = (state) => {
    const synth = state.synth.toJS();
    const controller = state.controller.toJS();
    const header = state.header.toJS();

    return {
        vectors: synth.vectors,
        selector: controller.selector,
        synths: synth.synths,
        octaves: synth.octaves,
        focus: header.focus
    };
};


Scope = connect(
    mapStateToProps
)(Scope);

export default Scope;
