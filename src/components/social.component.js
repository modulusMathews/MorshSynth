/**
 * Created by jMath on 3/22/16.
 */
'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { setFocus } from './../actions/header.actions';

import { spacer, spaceSize, colors } from './../utilities/space.view';


const centerX = spaceSize.width / 2;

const fontSize = spacer(4.5);
const logoRoot = spacer(2.25);

const nine = spacer(9);
const thirteen = spacer(13);
const fontSpacer = spaceSize.height * 5 / 17 - spacer(5) + nine;

let Social = ({focus, onHover, onClick}) => {
    return (
        <g>
            <text
                x={ centerX - logoRoot / 7 }
                y={ fontSpacer + 9 * fontSize + nine + 3 * thirteen  }
                fontFamily={ "BebasNeueRegular" }
                fontSize={ fontSize }
                textAnchor={ 'end' }
                fill={ colors.black }
            >
                Math
            </text>

            <text
                x={ centerX + logoRoot / 7 }
                y={ fontSpacer + 9 * fontSize + nine + 3 * thirteen }
                fontFamily={ "BebasNeueRegular" }
                fontSize={ fontSize }
                textAnchor={ 'start' }
                fill={ colors.black }
            >
                Music
            </text>

            <circle
                cx={ centerX }
                cy={ fontSpacer + 9 * fontSize + nine + spacer(23) }
                r={ spacer(13) }
                fill={ colors.black }
            />

            <circle
                cx={ centerX }
                cy={ fontSpacer + 9 * fontSize + nine + spacer(23) }
                r={ spacer(15) }
                fill={ colors.white }
            />

            <text
                x={ centerX }
                y={ fontSpacer + 11 * fontSize + nine + 3 * thirteen }
                fontFamily={ "BebasNeueRegular" }
                fontSize={ 2.125 * fontSize }
                textAnchor={ 'middle' }
                fill={ colors.black }
            >
                Morsh
            </text>

            <g
                onMouseOver={ onHover('facebook') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('https://www.facebook.com/morshsynth/') }
            >
                <g transform={ `translate(${centerX - 2.5 - 11.5},${fontSpacer + 11.5 * fontSize + nine + 5 * thirteen}) scale(${0.008})` }>
                    <path
                        d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306    C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306    S459.64,584.182,306,584.182S27.818,459.64,27.818,306z"
                        fill={ focus === 'facebook' ? colors.grey : colors.black }
                    />

                    <path
                        d="M317.739,482.617V306h58.279l9.208-58.529h-67.487v-29.348c0-15.272,5.007-29.849,26.928-29.849h43.813v-58.418h-62.201    c-52.298,0-66.569,34.438-66.569,82.175v35.413h-35.885V306h35.885v176.617H317.739L317.739,482.617z"
                        fill={ focus === 'facebook' ? colors.grey : colors.black }
                    />
                </g>

                <circle
                    cx={ centerX - 11.5 }
                    cy={ fontSpacer + 11.5 * fontSize + nine + 5 * thirteen + 2.5 }
                    r={ 2.5 }
                    fill={ 'transparent' }
                />
            </g>

            <g
                onMouseOver={ onHover('twitter') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('https://www.twitter.com/morshsynth/') }
            >
                <g transform={ `translate(${centerX - 2.5},${fontSpacer + 11.5 * fontSize + nine + 5 * thirteen}) scale(${0.008})` }>
                    <path
                        d="M437.219,245.162c0-3.088-0.056-6.148-0.195-9.18c13.214-9.848,24.675-22.171,33.744-36.275    c-12.129,5.453-25.148,9.097-38.835,10.626c13.965-8.596,24.675-22.338,29.738-38.834c-13.075,7.928-27.54,13.603-42.924,16.552    c-12.323-14.021-29.904-22.95-49.35-23.284c-37.332-0.612-67.598,30.934-67.598,70.463c0,5.619,0.584,11.072,1.752,16.329    c-56.22-3.616-106.042-32.881-139.369-77c-5.814,10.571-9.152,22.922-9.152,36.164c0,25.037,11.934,47.291,30.071,60.421    c-11.099-0.5-21.503-3.866-30.627-9.375c0,0.306,0,0.612,0,0.918c0,34.996,23.312,64.316,54.245,71.159    c-5.675,1.613-11.656,2.448-17.804,2.421c-4.367-0.028-8.596-0.501-12.713-1.392c8.596,28.681,33.577,49.628,63.147,50.323    c-23.145,19.194-52.298,30.655-83.955,30.572c-5.453,0-10.849-0.361-16.135-1.029c29.933,20.53,65.456,32.491,103.65,32.491    C369.23,447.261,437.219,339.048,437.219,245.162z"
                        fill={ focus === 'twitter' ? colors.grey : colors.black }
                    />

                    <path
                        d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306    C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306    S459.64,584.182,306,584.182S27.818,459.64,27.818,306z"
                        fill={ focus === 'twitter' ? colors.grey : colors.black }
                    />
                </g>

                <circle
                    cx={ centerX }
                    cy={ fontSpacer + 11.5 * fontSize + nine + 5 * thirteen + 2.5 }
                    r={ 2.5 }
                    fill={ 'transparent' }
                />
            </g>

            <g
                onMouseOver={ onHover('google') }
                onMouseLeave={ onHover(null) }
                onClick={ onClick('https://aboutme.google.com/u/0/b/115781257024856993630/?referer=gplus') }
            >
                <g transform={ `translate(${centerX - 2.5 + 11.5},${fontSpacer + 11.5 * fontSize + nine + 5 * thirteen}) scale(${0.008})` }>
                    <path
                        d="M349.146,402.251c0-30.016-17.387-44.815-36.525-60.922l-15.662-12.185c-4.785-3.895-11.294-9.124-11.294-18.693    c0-9.57,6.537-15.662,12.184-21.309c18.249-14.354,36.526-29.571,36.526-61.756c0-33.076-20.892-50.462-30.878-58.724l0,0h26.956    L358.271,153h-89.603c-23.479,0-53.049,3.478-77.863,23.924c-18.693,16.079-27.818,38.278-27.818,58.279    c0,33.911,26.093,68.294,72.188,68.294c4.368,0,9.125-0.445,13.937-0.863c-2.17,5.23-4.34,9.569-4.34,16.97    c0,13.464,6.955,21.753,13.047,29.57c-19.556,1.308-56.109,3.478-83.065,20.001c-25.676,15.217-33.493,37.416-33.493,53.077    c0,32.186,30.461,62.201,93.525,62.201C309.561,484.454,349.146,443.116,349.146,402.251z M255.621,291.34    c-37.415,0-54.384-48.292-54.384-77.418c0-11.322,2.17-23.034,9.569-32.186c6.955-8.707,19.139-14.382,30.461-14.382    c36.108,0,54.802,48.738,54.802,80.033c0,7.845-0.862,21.754-10.877,31.768C278.237,286.11,266.498,291.312,255.621,291.34z     M256.066,466.177c-46.54,0-76.556-22.171-76.556-53.049s27.846-41.311,37.416-44.787c18.276-6.093,41.755-6.982,45.677-6.982    c4.34,0,6.51,0,9.987,0.445c33.076,23.479,47.402,35.218,47.402,57.416C319.992,446.176,297.821,466.177,256.066,466.177z"
                        fill={ focus === 'google' ? colors.grey : colors.black }
                    />

                    <polygon
                        points="353.068,317.768 400.164,317.768 400.164,364.836 423.699,364.836 423.699,317.768 470.768,317.768     470.768,294.233 423.699,294.233 423.699,247.165 400.164,247.165 400.164,294.233 353.068,294.233   "
                        fill={ focus === 'google' ? colors.grey : colors.black }
                    />

                    <path
                        d="M612,306C612,137.004,474.995,0,306,0C137.004,0,0,137.004,0,306c0,168.995,137.004,306,306,306    C474.995,612,612,474.995,612,306z M27.818,306C27.818,152.36,152.36,27.818,306,27.818S584.182,152.36,584.182,306    S459.64,584.182,306,584.182S27.818,459.64,27.818,306z"
                        fill={ focus === 'google' ? colors.grey : colors.black }
                    />
                </g>

                <circle
                    cx={ centerX + 11.5 }
                    cy={ fontSpacer + 11.5 * fontSize + nine + 5 * thirteen + 2.5 }
                    r={ 2.5 }
                    fill={ 'transparent' }
                />
            </g>
        </g>
    );
};

const mapStateToProps = (state) => {
    const header = state.header.toJS();
    return {
        focus: header.focus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHover: (focus) => () => dispatch(setFocus(focus)),
        onClick: (url) => () => window.open(url)
    };
};

Social = connect(
    mapStateToProps,
    mapDispatchToProps
)(Social);

export default Social;