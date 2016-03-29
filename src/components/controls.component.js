'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Cell from './cell.component';

import { spacer, colors } from './../utilities/space.view';


let Controls = ({x, y, width, height}) => {
    const titleF = spacer(3.5);
    const titleX = x + spacer(5);
    const titleY = y + spacer(3);

    const labelF = spacer(4.25);
    const labelFF = 'BebasNeueBook';
    const labelX = titleX + width * 1.5 / 7;
    const labelY = (j) => titleY + titleF + spacer(7) + j * labelF + j * spacer(8);

    const descF = spacer(5);
    const descFF = 'BebasNeueRegular';
    const descX = width * 4 / 7;
    const descA = 'start';

    let points = [];
    for (let j=0; j<11; j++) {
        points.push(
            <g key={ j }>
                <circle
                    cx={ descX - spacer(4.5) }
                    cy={ labelY(j) - 3 / 2 * spacer(11) }
                    r={ spacer(15) }
                    fill={ colors.black }
                />

                <circle
                    cx={ descX - spacer(4.5) }
                    cy={ labelY(j) - 3 / 2 * spacer(11) }
                    r={ spacer(18) }
                    fill={ colors.white }
                />
            </g>
        );
    }

    return (
        <g>
            <text
                x={ titleX }
                y={ titleY }
                fontFamily={ 'BebasNeueRegular' }
                fill={ colors.black }
                fontSize={ titleF }
                textAnchor={ 'start '}
            >
                Shapes
            </text>

            <text
                x={ labelX }
                y={ labelY(0) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Select
            </text>

            <text
                x={ descX  }
                y={ labelY(0) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
                ( a - s - d - f - g )
            </text>

            <text
                x={ labelX }
                y={ labelY(1) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Reset
            </text>

            <text
                x={ descX  }
                y={ labelY(1) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
               ( k )
            </text>

            <text
                x={ labelX  }
                y={ labelY(2) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Add Point
            </text>

            <text
                x={ descX }
                y={ labelY(2) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
               ( i )
            </text>

            <text
                x={ labelX }
                y={ labelY(3) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle ' }
            >
                Subtract Point
            </text>

            <text
                x={ descX  }
                y={ labelY(3) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
               ( , )
            </text>

            <text
                x={ labelX  }
                y={ labelY(4) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Rotate Right
            </text>

            <text
                x={ descX  }
                y={ labelY(4) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
                ( l )
            </text>

            <text
                x={ labelX  }
                y={ labelY(5) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Rotate Left
            </text>

            <text
                x={ descX  }
                y={ labelY(5) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
               ( j )
            </text>

            <text
                x={ labelX  }
                y={ labelY(6) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Add Layer
            </text>

            <text
                x={ descX  }
                y={ labelY(6) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
                ( / )
            </text>

            <text
                x={ labelX  }
                y={ labelY(7) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Remove Layer
            </text>

            <text
                x={ descX  }
                y={ labelY(7) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
               ( . )
            </text>

            <text
                x={ labelX  }
                y={ labelY(8) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Assign Octave
            </text>

            <text
                x={ descX  }
                y={ labelY(8) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
                ( o - p - [ )
            </text>

            <text
                x={ labelX  }
                y={ labelY(9) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Assign Sound
            </text>

            <text
                x={ descX  }
                y={ labelY(9) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
                ( 6 - 7 - 8 - 9 - 0 )
            </text>

            <text
                x={ labelX  }
                y={ labelY(10) }
                fontFamily={ labelFF }
                fill={ colors.black }
                fontSize={ labelF }
                textAnchor={ 'middle '}
            >
                Consume
            </text>

            <text
                x={ descX  }
                y={ labelY(10) }
                fontFamily={ descFF }
                fill={ colors.black }
                fontSize={ descF }
                textAnchor={ descA }
            >
                Spacebar
            </text>


            <rect
                x={ x + spacer(3.75) }
                y={ titleY + spacer(11) }
                width={ width / 4.375 }
                height={ spacer(13) }
                rx={ spacer(14) / 2 }
                ry={ spacer(14) / 2 }
                fill={ colors.black }
            />

            { points }
        </g>
    );
};

export default Controls;

//<rect
//    x={x}
//    y={y}
//    width={width}
//    height={height}
///>