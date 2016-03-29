'use strict';

import { spaceSize, colors } from './space.view';


export
const headerSize = {
    width: spaceSize.width * 0.9,
    height: spaceSize.height * 0.1
};

export
const root = headerSize.height;

export
const spacer = n => root / Math.pow(n,2);

export
const lineSpacers = {
    0: spacer(6),
    1: spacer(8),
    2: spacer(11),
    3: 0
};

export
const lineColors = {
    0: colors.black,
    1: 'transparent',
    2: 'transparent',
    3: 'transparent'
};

export
const lineX = headerSize.width * 3 / 8;

export
const lineY = headerSize.height * 7 / 12 - spacer(4) / 2;

export
const lineWidth = headerSize.width * 5 / 8;

export
const circleY = headerSize.height * 7 / 12 * 5 / 8;

export
const textY = headerSize.height * 7 / 12 - spacer(4);

export
const textSize = headerSize.height * 6 / 13;

export
const paletteSize = 5;

export
const bottom = headerSize.height - spacer(3.07);

export
const lineBot = lineY + spacer(4);

export
const maxH = bottom - lineBot;

export
const mid = (bottom + lineBot) / 2;

export
const divSpacer = spacer(2);

export
const divWidth = lineWidth - divSpacer;

export
const cellWidth = divWidth / 5 - divSpacer;

export
const cellHeight = maxH * 8 / 11;