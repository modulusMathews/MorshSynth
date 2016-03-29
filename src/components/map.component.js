'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { colors, spacer, mapPointRadius, mapPoints, initMapPaths, compMapPathCol, compMapPointCol } from './../utilities/space.view';


let Map = ({vectors, consumer, selector, synths, octaves}) => {
    const paths = initMapPaths();
    const pathColor = compMapPathCol(vectors,consumer,selector,synths,octaves);

    let points = [];
    for(let i=0; i<12; i++) {
        const currentPoint = mapPoints[i];
        const pointIndex = String(i);
        let isEmpty = true;

        for (let j=0; j<5; j++) {
            const vecInd = String(j);

            if (consumer && !selector[vecInd]) { continue; }
            if (vectors[vecInd].hasOwnProperty(pointIndex)) {
                if (isEmpty) { isEmpty = false; }

                if (paths[vecInd].first === null) { paths[vecInd].first = i; }

                const last = paths[vecInd].last;
                const pair = last + '-' + pointIndex;
                if (last !== null && !paths.pairs.has(pair)) {
                    paths.pairs.add(pair);
                    const lastPoint = mapPoints[String(last)];

                    paths.lines.push(
                        <line key={ pair }
                              x1={ lastPoint.x }
                              y1={ lastPoint.y }
                              x2={ currentPoint.x }
                              y2={ currentPoint.y }
                              stroke={ pathColor }
                              strokeWidth={ spacer(11) }
                        />
                    );
                }

                paths[vecInd].last = i;
            }
        }

        if (!isEmpty) {
            points.push(
                <g key={ 'point-' + i } >
                    <circle
                        key={ 'base-' + i }
                        cx={ currentPoint.x }
                        cy={ currentPoint.y }
                        r={ spacer(9) }
                        fill={ pathColor }
                    />

                    <circle
                        key={ 'mid-' + i }
                        cx={ currentPoint.x }
                        cy={ currentPoint.y }
                        r={ spacer(11) }
                        fill={ colors.black }
                    />

                    <circle
                        key={ 'top-' + i }
                        cx={ currentPoint.x }
                        cy={ currentPoint.y }
                        r={ spacer(14) }
                        fill={ compMapPointCol(i,vectors,consumer,selector,synths,octaves) }
                    />

                </g>
            );
        }
    }

    for (let j=0; j<5; j++) {
        const vecInd = String(j);
        if (consumer && !selector[vecInd]) { continue; }

        const first = paths[vecInd].first;
        const last = paths[vecInd].last;
        const pair = last + '-' + first;

        const lastPoint = mapPoints[last];
        const firstPoint = mapPoints[first];

        if (first !== null && first !== last && !paths.pairs.has(pair)) {
            paths.pairs.add(pair);

            paths.lines.push(
                <line
                    key={ pair }
                    x1={ lastPoint.x }
                    y1={ lastPoint.y }
                    x2={ firstPoint.x }
                    y2={ firstPoint.y }
                    stroke={ pathColor }
                    strokeWidth={ spacer(11) }
                />
            );
        }
    }

    return <g>{ paths.lines }{ points }</g>;
};

const mapStateToProps = (state) => {
    const synth = state.synth.toJS();
    const controller = state.controller.toJS();

    return {
        vectors: synth.vectors,
        consumer: controller.consumer,
        selector: controller.selector,
        synths: synth.synths,
        octaves: synth.octaves
    };
};

Map = connect(
    mapStateToProps
)(Map);

export default Map;
