'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { setFocus, setHelp } from './../actions/header.actions';

import { colors } from './../utilities/space.view';


let Help = ({help, focus, onHover, onClick}) => {
    let circCol;
    let pathCol;
    const focused = focus === 'help';

    if (help) {
        circCol = focused ? colors.grey : colors.black;
        pathCol = colors.white;
    }
    else {
        circCol = 'transparent';
        pathCol = focused ? colors.grey : colors.black;
    }

    return (
        <g
            onMouseOver={ onHover('help') }
            onMouseLeave={ onHover(null) }
            onMouseDown={ onClick(!help) }
        >
            <circle
                cx={ 43.675 }
                cy={ 5.675 }
                r={ 1.225 }
                fill={ circCol }
            />

            <g transform={ `translate(${42.5},${4.5}) scale(${0.004})` }>
                <path
                    d="M336.962,200.875c7.956,9.792,11.906,21.337,11.906,34.634c0,9.514-2.727,18.666-8.151,27.512    c-2.977,5.007-6.898,9.848-11.795,14.465l-16.301,16.107c-15.634,15.356-25.732,28.958-30.35,40.865    c-4.618,11.878-6.927,27.54-6.927,46.957h36.275c0-17.108,1.947-30.044,5.814-38.807c3.866-8.763,12.323-19.444,25.37-32.102    c17.942-17.387,29.849-30.572,35.746-39.53s8.874-20.641,8.874-35.051c0-23.756-8.039-43.285-24.146-58.585    c-16.106-15.3-37.526-22.922-64.288-22.922c-28.931,0-51.686,8.929-68.266,26.789s-24.87,41.449-24.87,70.797h36.275    c0.667-17.665,3.478-31.184,8.346-40.559c8.679-16.83,24.369-25.259,47.068-25.259    C315.875,186.187,329.033,191.083,336.962,200.875z"
                    fill={ pathCol }
                />

                <path
                    d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306    C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306    S459.64,584.182,306,584.182S27.818,459.64,27.818,306z"
                    fill={ help ? 'transparent' : pathCol }
                />

                <rect
                    x="274.51"
                    y="415.214"
                    width="40.559"
                    height="42.367"
                    fill={ pathCol }
                />

            </g>
        </g>
    );
};

const mapStateToProps = (state) => {
    const header = state.header.toJS();
    return {
        help: header.help,
        focus: header.focus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHover: (focus) => () => dispatch(setFocus(focus)),
        onClick: (help) => () => dispatch(setHelp(help))
    };
};

Help = connect(
    mapStateToProps,
    mapDispatchToProps
)(Help);

export default Help;