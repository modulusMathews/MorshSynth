"use strict";

import React  from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { activateSelector, deactivateSelector } from './../actions/controller.actions';
import { activateSynth, deactivateSynth } from './../actions/synth.actions';

import { colors, palColors, selSpacers, compSelX, compSelY, compSelColor} from './../utilities/space.view';


let Selector = ({x, y, width, height, selector, octaves, consumer, toggle, filters, synths, help}) => {
    const yStep = height / 5;
    const selWidth = width * 5 / 8;
    const selHeight = yStep * 5 / 7;
    const selSpacer = selSpacers['1'] + selSpacers['2'] + selSpacers['3'];
    const divContWidth = selWidth - 2 * selSpacer;
    const divHeight = selHeight - 2 * selSpacer;


    let selectors = [];
    let selChars = [];

    for (let j=0; j<5; j++) {
        const filter = filters[j];
        const count = filter.length + 1;
        const selX = compSelX(selector[j],x,width);
        const selY = compSelY(y,yStep,j);
        const isActive = selector[j];
        const selColors = compSelColor(synths[j],octaves[j],isActive);
        const divWidth = (divContWidth - (count - 1) * selSpacers['3']) / count;
        const tdh = (divHeight - (count - 1) * selSpacers['3']) / count ;


        let divs = [];
        if (selector[j]) {
            for (let i=0; i<count; i++) {
                for (let k=0; k<count; k++) {
                    divs.push(
                        <rect
                            key={ i + '-' + k }
                            x={ selX + selSpacer + k * (divWidth + selSpacers['3'])  }
                            y={ selY + selSpacer + i * (tdh + selSpacers['3'])}
                            width={ divWidth }
                            height={ tdh }
                            rx={ selSpacers['3'] }
                            ry={ selSpacers['3'] }
                            fill={ selColors['1'] }
                        />
                    );
                }
            }
        }

        selectors.push(
            <g key={ j } onMouseDown={ toggle(String(j),selector,consumer) }>
                <Cell
                    x={ selX }
                    y={ selY }
                    width={ selWidth }
                    height={ selHeight }
                    spacers={ selSpacers }
                    colors={ selColors }
                />

                { divs }
            </g>
        );

        if (help) {
            let char;
            switch (j) {
                case 0:
                    char = 'a';
                    break;

                case 1:
                    char = 's';
                    break;

                case 2:
                    char = 'd';
                    break;

                case 3:
                    char = 'f';
                    break;

                case 4:
                    char = 'g';
                    break;
            }

            let charX;
            let charCol;
            let charH;
            if (selector[j]) {
                charX = selX - selWidth / 5;
                charCol = colors.black;
                charH = selHeight / 2.375;
            }
            else {
                charX = selX + selWidth / 2;
                charCol = colors.white;
                charH = selHeight / 2.5;
            }

            selChars.push(
                <text
                    key={j}
                    x={ charX }
                    y={ selY + selHeight * 11 / 17 }
                    fontFamily={ 'BebasNeueRegular' }
                    fill={ charCol }
                    fontSize={ charH }
                    textAnchor={ 'middle '}
                >
                    { char }
                </text>
            );
        }
    }


    return <g>{ selectors }{ selChars }</g>;
};

const mapStateToProps = (state) => {
    const controller = state.controller.toJS();
    const synth = state.synth.toJS();
    const header = state.header.toJS();

    return {
        consumer: controller.consumer,
        selector: controller.selector,
        filters: synth.filters,
        synths: synth.synths,
        octaves: synth.octaves,
        help: header.help
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (id, selector, consumer) => () => {
            const synth = {};
            synth[id] = id;

            if (selector[id]) {
                dispatch(deactivateSelector(id));
                dispatch(deactivateSynth(synth));
            }
            else {
                dispatch(activateSelector(id));
                if (consumer) { dispatch(activateSynth(synth)); }
            }
        }
    };
};

Selector = connect(
    mapStateToProps,
    mapDispatchToProps
)(Selector);

export default Selector;

//onMouseEnter={ onHover(j) }
//onMouseLeave={ onHover(null) }