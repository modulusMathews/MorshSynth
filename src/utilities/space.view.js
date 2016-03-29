'use strict';

import { Map } from 'immutable';

//// General
export
const root = 100;

export
const spacer = n => root / Math.pow(n,2);


//// Colors
export
const colors = {
    black: 'rgb(41,41,41)',
    grey: 'rgb(127,127,127)',
    white: 'rgb(211,211,211)',
    red: 'rgb(127,41,41)',
    green: 'rgb(41,127,41',
    blue: 'rgb(41,41,127)',
    darkBlue: 'rgb(41,83,127)',
    darkTeal: 'rgb(41,127,83)',
    darkPurple: 'rgb(83,41,127)',
    darkGreen: 'rgb(83,127,41)',
    darkPink: 'rgb(127,41,83)',
    lightBlue: 'rgb(127,167,211)',
    lightTeal: 'rgb(127,211,167)',
    lightPurple: 'rgb(167,127,211)',
    lightGreen: 'rgb(167,211,127)',
    lightPink: 'rgb(211,127,167)'
};

export
const colorMap = {
    black: {r: 41, g: 41, b: 41},
    grey: {r: 127, g: 127, b: 127},
    white: {r: 211, g: 211, b: 211},
    darkBlue: {r: 41, g: 83, b: 127},
    darkTeal: {r: 41, g: 127, b: 83},
    darkPurple: {r: 83, g: 41, b: 127},
    darkGreen: {r: 83, g: 127, b: 41},
    darkPink: {r: 127, g: 41, b: 83},
    lightBlue: {r: 127, g: 167, b: 211},
    lightTeal: {r: 127, g: 211, b: 167},
    lightPurple: {r: 167, g: 127, b: 211},
    lightGreen: {r: 167, g: 211, b: 127},
    lightPink: {r: 211, g:127 , b: 167}
};

const palColorMap = {
    0: colorMap.darkBlue,
    1: colorMap.darkTeal,
    2: colorMap.darkPurple,
    3: colorMap.darkGreen,
    4: colorMap.darkPink
};

const darkPCM = {
    0: {
        r: Math.round(palColorMap['0'].r - 41 * 2 / 3),
        g: Math.round(palColorMap['0'].g - 41 * 2 / 3),
        b: Math.round(palColorMap['0'].b - 41 * 2 / 3)
    },
    1: {
        r: Math.round(palColorMap['1'].r - 41 * 2 / 3),
        g: Math.round(palColorMap['1'].g - 41 * 2 / 3),
        b: Math.round(palColorMap['1'].b - 41 * 2 / 3)
    },
    2: {
        r: Math.round(palColorMap['2'].r - 41 * 2 / 3),
        g: Math.round(palColorMap['2'].g - 41 * 2 / 3),
        b: Math.round(palColorMap['2'].b - 41 * 2 / 3)
    },
    3: {
        r: Math.round(palColorMap['3'].r - 41 * 2 / 3),
        g: Math.round(palColorMap['3'].g - 41 * 2 / 3),
        b: Math.round(palColorMap['3'].b - 41 * 2 / 3)
    },
    4: {
        r: Math.round(palColorMap['4'].r - 41 * 2 / 3),
        g: Math.round(palColorMap['4'].g - 41 * 2 / 3),
        b: Math.round(palColorMap['4'].b - 41 * 2 / 3)
    }
};

const lightPCM = {
    0: {
        r: Math.round(palColorMap['0'].r + 41 * 2 / 3),
        g: Math.round(palColorMap['0'].g + 41 * 2 / 3),
        b: Math.round(palColorMap['0'].b + 41 * 2 / 3)
    },
    1: {
        r: Math.round(palColorMap['1'].r + 41 * 2 / 3),
        g: Math.round(palColorMap['1'].g + 41 * 2 / 3),
        b: Math.round(palColorMap['1'].b + 41 * 2 / 3)
    },
    2: {
        r: Math.round(palColorMap['2'].r + 41 * 2 / 3),
        g: Math.round(palColorMap['2'].g + 41 * 2 / 3),
        b: Math.round(palColorMap['2'].b + 41 * 2 / 3)
    },
    3: {
        r: Math.round(palColorMap['3'].r + 41 * 2 / 3),
        g: Math.round(palColorMap['3'].g + 41 * 2 / 3),
        b: Math.round(palColorMap['3'].b + 41 * 2 / 3)
    },
    4: {
        r: Math.round(palColorMap['4'].r + 41 * 2 / 3),
        g: Math.round(palColorMap['4'].g + 41 * 2 / 3),
        b: Math.round(palColorMap['4'].b + 41 * 2 / 3)
    }
};

export
const palColors = {
    0: colors.darkBlue,
    1: colors.darkTeal,
    2: colors.darkPurple,
    3: colors.darkGreen,
    4: colors.darkPink
};


export
const offColors = {
    0: colors.black,
    1: colors.white,
    2: colors.black,
    3: 'transparent'
};

export
const colStr = (red,green,blue) => `rgb(${red},${green},${blue})`;

//// Space
export
const spaceSize = {
    width: root + root * 3 / 8 - spacer(7),
    height: root
};


//// Core
export
const coreSquare = {
    x: spaceSize.width - spaceSize.height,
    y: 0,
    root: root
};

export
const coreSpacers = {
    0: 0,
    1: spacer(7),
    2: spacer(9),
    3: spacer(11)
};

export
const coreColors = {
    0: colors.white,
    1: colors.black,
    2: colors.white,
    3: colors.black
};

export
const compCoreColors = (vectors,consumer,selector,synths,octaves) => {
    return {
        0: colors.white,
        1: colors.black,
        2: consumer ? compMapPathCol(vectors,consumer,selector,synths,octaves) : colors.white,
        3: colors.black
    };
};


//// Map
export
const contentSpacer = coreSpacers[1] + coreSpacers[2] + coreSpacers[3];

export
const mapPointRadius = spacer(9);

const compMapPoints = () => {
    const contentX =  root * 3 / 8 - spacer(7) + contentSpacer;
    const contentY = contentSpacer;
    const contentRoot = root - 2 * contentSpacer;

    const circle = {
        cx: contentX + contentRoot / 2,
        cy: contentY + contentRoot / 2,
        radius: contentRoot / 2 * 11 / 13
    };

    let points = [];
    for (let i=0; i<12; i++) {
        const index = i + 9;
        points.push({
            x: Math.cos(0.5235987 * index) * circle.radius + circle.cx,
            y: Math.sin(0.5235987 * index) * circle.radius + circle.cy
        });
    }

    return points;
};

export
const mapPoints = compMapPoints();

export
const initMapPaths = () => {
    let paths = {lines: [], pairs: new Set()};
    for (let i = 0; i<5; i++) {
        paths[i] = {first: null, last: null};
    }
    return paths;
};

const vecColorMap = {
    0: colorMap.lightBlue,
    1: colorMap.lightTeal,
    2: colorMap.lightPurple,
    3: colorMap.lightGreen,
    4: colorMap.lightPink
};

const lightVCM = {
    0: {
        r: Math.round(vecColorMap['0'].r + 41 * 2 / 3),
        g: Math.round(vecColorMap['0'].g + 41 * 2 / 3),
        b: Math.round(vecColorMap['0'].b + 41 * 2 / 3)
    },
    1: {
        r: Math.round(vecColorMap['1'].r + 41 * 2 / 3),
        g: Math.round(vecColorMap['1'].g + 41 * 2 / 3),
        b: Math.round(vecColorMap['1'].b + 41 * 2 / 3)
    },
    2: {
        r: Math.round(vecColorMap['2'].r + 41 * 2 / 3),
        g: Math.round(vecColorMap['2'].g + 41 * 2 / 3),
        b: Math.round(vecColorMap['2'].b + 41 * 2 / 3)
    },
    3: {
        r: Math.round(vecColorMap['3'].r + 41 * 2 / 3),
        g: Math.round(vecColorMap['3'].g + 41 * 2 / 3),
        b: Math.round(vecColorMap['3'].b + 41 * 2 / 3)
    },
    4: {
        r: Math.round(vecColorMap['4'].r + 41 * 2 / 3),
        g: Math.round(vecColorMap['4'].g + 41 * 2 / 3),
        b: Math.round(vecColorMap['4'].b + 41 * 2 / 3)
    }
};

const darkVCM = {
    0: {
        r: Math.round(vecColorMap['0'].r - 41 * 2 / 3),
        g: Math.round(vecColorMap['0'].g - 41 * 2 / 3),
        b: Math.round(vecColorMap['0'].b - 41 * 2 / 3)
    },
    1: {
        r: Math.round(vecColorMap['1'].r - 41 * 2 / 3),
        g: Math.round(vecColorMap['1'].g - 41 * 2 / 3),
        b: Math.round(vecColorMap['1'].b - 41 * 2 / 3)
    },
    2: {
        r: Math.round(vecColorMap['2'].r - 41 * 2 / 3),
        g: Math.round(vecColorMap['2'].g - 41 * 2 / 3),
        b: Math.round(vecColorMap['2'].b - 41 * 2 / 3)
    },
    3: {
        r: Math.round(vecColorMap['3'].r - 41 * 2 / 3),
        g: Math.round(vecColorMap['3'].g - 41 * 2 / 3),
        b: Math.round(vecColorMap['3'].b - 41 * 2 / 3)
    },
    4: {
        r: Math.round(vecColorMap['4'].r - 41 * 2 / 3),
        g: Math.round(vecColorMap['4'].g - 41 * 2 / 3),
        b: Math.round(vecColorMap['4'].b - 41 * 2 / 3)
    }
};

export
const compMapPathCol = (vectors,consumer,selector,synths,octaves) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let popSize = 0;

    for (let i=0; i<5; i++) {
        if (consumer && !selector[i]) { continue; }
        if (vectors[i].hasOwnProperty('size')) { continue; }
        const vecSize = Object.keys(vectors[i]).length;
        popSize += vecSize;

        switch (octaves[i]) {
            case '0':
                red += vecSize * darkVCM[synths[i]].r;
                green += vecSize * darkVCM[synths[i]].g;
                blue += vecSize * darkVCM[synths[i]].b;
                break;
            case '1':
                red += vecSize * vecColorMap[synths[i]].r;
                green += vecSize * vecColorMap[synths[i]].g;
                blue += vecSize * vecColorMap[synths[i]].b;
                break;
            case '2':
                red += vecSize * lightVCM[synths[i]].r;
                green += vecSize * lightVCM[synths[i]].g;
                blue += vecSize * lightVCM[synths[i]].b;
                break;
        }
    }

    if (popSize === 0) {
        red = colorMap.white.r;
        green = colorMap.white.g;
        blue = colorMap.white.b;
    }
    else {
        red = Math.round(red / popSize);
        green = Math.round(green / popSize);
        blue = Math.round(blue / popSize);
    }


    return `rgb(${red},${green},${blue})`;
};

export
const compMapPointCol = (index,vectors,consumer,selector,synths,octaves) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let popSize = 0;

    for (let i=0; i<5; i++) {
        if (consumer && !selector[i]) { continue; }
        if (vectors[i].hasOwnProperty(index)) {
            switch (octaves[i]) {
                case '0':
                    red += darkVCM[synths[i]].r;
                    green += darkVCM[synths[i]].g;
                    blue += darkVCM[synths[i]].b;
                    break;
                case '1':
                    red += vecColorMap[synths[i]].r;
                    green += vecColorMap[synths[i]].g;
                    blue += vecColorMap[synths[i]].b;
                    break;
                case '2':
                    red += lightVCM[synths[i]].r;
                    green += lightVCM[synths[i]].g;
                    blue += lightVCM[synths[i]].b;
                    break;
            }
            popSize += 1;
        }
    }

    red = Math.round(red / popSize);
    green = Math.round(green / popSize);
    blue = Math.round(blue / popSize);

    return `rgb(${red},${green},${blue})`;
};


//// Controller
export
const controllerRect = {
    x: 0,
    y: 0,
    width: root * 3 / 8,
    height: spaceSize.height
};

//// Selector
export
const selOnColors = {
    0: {
        0: 'transparent',
        1: colors.darkBlue,
        2: colors.white,
        3: 'transparent'
    },
    1: {
        0: 'transparent',
        1: colors.darkTeal,
        2: colors.white,
        3: 'transparent'
    },
    2: {
        0: 'transparent',
        1: colors.darkPurple,
        2: colors.white,
        3: 'transparent'
    },
    3: {
        0: 'transparent',
        1: colors.darkGreen,
        2: colors.white,
        3: 'transparent'
    },
    4: {
        0: 'transparent',
        1: colors.darkPink,
        2: colors.white,
        3: 'transparent'
    }
};

export
const selSpacers = {
    0: spacer(11),
    1: spacer(14),
    2: spacer(17),
    3: spacer(20)
};

export
const compSelX = (isActive, x, width) => {
    const notActiveX = 1.75 * x;
    const activeX = x + width - width * 5 / 8 - x * 0.75;

    return isActive ? activeX : notActiveX;
};

export
const compSelY = (y, yStep, j) => {
    return y + yStep * j + yStep * 3 / 14;
};

export
const compSelColor = (palIndex,oct,isActive) => {
    let result = offColors;
    if (isActive) {
        let scm;
        switch (oct) {
            case '0':
                scm = darkPCM[palIndex];
                break;
            case '1':
                scm = palColorMap[palIndex];
                break;
            case '2':
                scm = lightPCM[palIndex];
                break;
        }

        const onColor = colStr(scm.r,scm.g,scm.b);

        result = {
            0: 'transparent',
            1: onColor,
            2: colors.white,
            3: 'transparent'
        };
    }
    return result;
};

//// Navigator
export
const navSpacers = {
    0: spacer(10),
    1: spacer(13),
    2: spacer(16),
    3: spacer(19)
};


export
const compNavOnColor = (selector,synths,octaves) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let actCount = 0;
    for (let i=0; i<5; i++) {
        if(selector[i]) {
            actCount += 1;
            switch (octaves[i]) {
                case '0':
                    red += darkPCM[synths[i]].r;
                    green += darkPCM[synths[i]].g;
                    blue += darkPCM[synths[i]].b;
                    break;
                case '1':
                    red += palColorMap[synths[i]].r;
                    green += palColorMap[synths[i]].g;
                    blue += palColorMap[synths[i]].b;
                    break;
                case '2':
                    red += lightPCM[synths[i]].r;
                    green += lightPCM[synths[i]].g;
                    blue += lightPCM[synths[i]].b;
                    break;
            }

        }
    }

    red = Math.round(red / actCount);
    green = Math.round(green / actCount);
    blue = Math.round(blue / actCount);

    if (actCount < 1) {red = 41; green = 41; blue = 41;}

    const onColor = `rgb(${red},${green},${blue})`;

    return {
        0: colors.white,
        1: onColor,
        2: colors.white,
        3: onColor
    };
};


//// Scope
export
const scopeSpacer = spacer(7);

export
const scopeRoot =  root * 3 / 8 - 2 * scopeSpacer;

export
const scopePointRadius = spacer(12);

export
const scopeRect = {
    x: scopeSpacer + scopeRoot / 2 - scopeRoot / 8,
    y: scopeSpacer + scopeRoot / 2 - scopeRoot / 8,
    root: scopeRoot / 4
};

const compScopePoints = () => {
    const circle = {
        cx: scopeRect.x + scopeRect.root / 2,
        cy: scopeRect.y + scopeRect.root / 2,
        radius: scopeRect.root / 2
    };


    let points = [];
    for (let i=0; i<12; i++) {
        const index = i + 9;

        points.push({
            x: Math.cos(0.5235987 * index) * circle.radius + circle.cx,
            y: Math.sin(0.5235987 * index) * circle.radius + circle.cy
        });
    }

    return points;
};

export
const scopePoints = compScopePoints();

export
const compScopePointCol = (index, selector, vectors, synths, octaves) => {
    let red = 0;
    let green = 0;
    let blue = 0;
    let actCount = 0;

    for (let i=0; i<5; i++) {
        if(selector[i] && vectors[i].hasOwnProperty(index)) {
            actCount += 1;

            switch (octaves[i]) {
                case '0':
                    red += darkPCM[synths[i]].r;
                    green += darkPCM[synths[i]].g;
                    blue += darkPCM[synths[i]].b;
                    break;
                case '1':
                    red += palColorMap[synths[i]].r;
                    green += palColorMap[synths[i]].g;
                    blue += palColorMap[synths[i]].b;
                    break;
                case '2':
                    red += lightPCM[synths[i]].r;
                    green += lightPCM[synths[i]].g;
                    blue += lightPCM[synths[i]].b;
                    break;
            }
        }
    }

    red = Math.round(red / actCount);
    green = Math.round(green / actCount);
    blue = Math.round(blue / actCount);

    const pointColor = `rgb(${red},${green},${blue})`;

    return pointColor;
};
