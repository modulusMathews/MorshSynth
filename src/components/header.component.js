'use strict';

import React from 'react';
import { connect } from 'react-redux';

import SVG from './svg.component';
import LogoName from './logoName.component';
import Options from './options.component';
import SubOptions from './subOptions.component';

import { headerSize } from './../utilities/header.view';


const Header = () => {
    return (
        <SVG width={ headerSize.width } height={ headerSize.height }>
            <LogoName/>

            <Options/>

            <SubOptions/>

        </SVG>
    );
};

export default Header;










//<text
//    x={ lineX + lineWidth / 3 - (lineWidth * 2 / 3 / 3) }
//    y={ headerSize.height - spacer(4) }
//    fontFamily={ 'BebasNeueLight' }
//    fill={ colors.black }
//    fontSize={ headerSize.height * 4 / 13 }
//    textAnchor={ 'middle' }
//>
//    0
//</text>
//
//<circle
//cx={ lineX + lineWidth / 3 - lineWidth * 2 / 3 / 6 }
//cy={ headerSize.height - 2 * spacer(4) }
//r={ spacer(5) }
//fill={ colors.black }
///>
//
//<text
//x={ lineX + lineWidth / 3 }
//y={ headerSize.height - spacer(4) }
//fontFamily={ 'BebasNeueLight' }
//fill={ colors.black }
//fontSize={ headerSize.height * 4 / 13 }
//textAnchor={ 'middle' }
//    >
//    0 0
//</text>
//
//<circle
//cx={ lineX + lineWidth / 3 + lineWidth * 2 / 3 / 6 }
//cy={ headerSize.height - 2 * spacer(4) }
//r={ spacer(5) }
//fill={ colors.black }
///>
//
//<text
//x={ lineX + lineWidth / 3 + (lineWidth * 2 / 3 / 3) }
//y={ headerSize.height - spacer(4) }
//fontFamily={ 'BebasNeueLight' }
//fill={ colors.black }
//fontSize={ headerSize.height * 4 / 13 }
//textAnchor={ 'middle' }
//    >
//    0 0 0
//</text>



//<text
//    x={ lineX + lineWidth / 2 - (lineWidth * 2 / 3 / 3) }
//    y={ headerSize.height - spacer(4) }
//    fontFamily={ 'BebasNeueLight' }
//    fill={ colors.black }
//    fontSize={ headerSize.height * 4 / 13 }
//    textAnchor={ 'middle' }
//>
//    Music
//</text>
//
//<circle
//cx={ lineX + lineWidth / 2 - lineWidth * 2 / 3 / 6 }
//cy={ headerSize.height - 2 * spacer(4) }
//r={ spacer(5) }
//fill={ colors.black }
///>
//
//<text
//x={ lineX + lineWidth / 2 }
//y={ headerSize.height - spacer(4) }
//fontFamily={ 'BebasNeueLight' }
//fill={ colors.black }
//fontSize={ headerSize.height * 4 / 13 }
//textAnchor={ 'middle' }
//    >
//    Math
//    </text>
//
//    <circle
//cx={ lineX + lineWidth / 2 + lineWidth * 2 / 3 / 6 }
//cy={ headerSize.height - 2 * spacer(4) }
//r={ spacer(5) }
//fill={ colors.black }
///>
//
//<text
//x={ lineX + lineWidth / 2 + (lineWidth * 2 / 3 / 3) }
//y={ headerSize.height - spacer(4) }
//fontFamily={ 'BebasNeueLight' }
//fill={ colors.black }
//fontSize={ headerSize.height * 4 / 13 }
//textAnchor={ 'middle' }
//    >
//    Self
//    </text>



//<text
//    x={ lineX + lineWidth * 2 / 3 - (lineWidth * 2 / 3 / 3) }
//    y={ headerSize.height - spacer(4) }
//    fontFamily={ 'BebasNeueLight' }
//    fill={ colors.black }
//    fontSize={ headerSize.height * 4 / 13 }
//    textAnchor={ 'middle' }
//>
//    Brief
//</text>
//
//<circle
//cx={ lineX + lineWidth * 2 / 3 - lineWidth * 2 / 3 / 6 }
//cy={ headerSize.height - 2 * spacer(4) }
//r={ spacer(5) }
//fill={ colors.black }
///>
//
//<text
//x={ lineX + lineWidth * 2 / 3 }
//y={ headerSize.height - spacer(4) }
//fontFamily={ 'BebasNeueLight' }
//fill={ colors.black }
//fontSize={ headerSize.height * 4 / 13 }
//textAnchor={ 'middle' }
//    >
//    Super
//    </text>
//
//    <circle
//cx={ lineX + lineWidth * 2 / 3 + lineWidth * 2 / 3 / 6 }
//cy={ headerSize.height - 2 * spacer(4) }
//r={ spacer(5) }
//fill={ colors.black }
///>
//
//<text
//x={ lineX + lineWidth * 2 / 3 + (lineWidth * 2 / 3 / 3) }
//y={ headerSize.height - spacer(4) }
//fontFamily={ 'BebasNeueLight' }
//fill={ colors.black }
//fontSize={ headerSize.height * 4 / 13 }
//textAnchor={ 'middle' }
//    >
//    Book
//    </text>