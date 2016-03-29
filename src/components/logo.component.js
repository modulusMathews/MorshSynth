'use strict';

import React from 'react';

import { colors, colorMap } from './../utilities/space.view';


const Rect = (x,y,width,height) => {
    return {
        x: x,
        y: y,
        width: width,
        height: height,

        get minX () { return x; },
        get midX () { return x + width / 2; },
        get maxX () { return x + width; },
        get minY () { return y; },
        get midY () { return y + height / 2; },
        get maxY () { return y + height; }
    };
};

const Logo = ({x, y, root, back, front}) => {
    const spacer = n => root / Math.pow(n,2);

    const cont = new Rect(x,y,root,root);

    const mid = new Rect(
        cont.midX - spacer(2) / 2,
        cont.midY - spacer(2) / 2,
        spacer(2),
        spacer(2)
    );

    const corn = new Rect(
        (cont.maxX + mid.maxX) / 2 - spacer(2.5) / 2,
        (cont.minY + mid.minY) / 2 - spacer(2.5) / 2,
        spacer(2.5),
        spacer(2.5)
    );

    const edge = new Rect(
        (cont.maxX + mid.maxX) / 2 - spacer(3) / 2,
        cont.midY - spacer(3) / 2,
        spacer(3),
        spacer(3)
    );

    let outerPaths = [];
    for (let i=0; i<4; i++) {
        let transform;
        switch (i) {
            case 0: break;

            case 1:
                transform = `rotate(${90} ${cont.midX} ${cont.midY})`;
                break;
            case 2:
                transform = `rotate(${180} ${cont.midX} ${cont.midY})`;
                break;
            case 3:
                transform = `rotate(${270} ${cont.midX} ${cont.midY})`;
                break;
        }

        outerPaths.push(
          <g key={ i }>
              <g>
                  <circle
                      cx={ corn.midX }
                      cy={ corn.midY }
                      r={ spacer(2.5) / 2 }
                      fill={ front }
                      transform={ transform }
                  />

                  <circle
                      cx={ corn.midX }
                      cy={ corn.midY }
                      r={ spacer(2.5 + 1 / 3) / 2 }
                      fill={ back }
                      transform={ transform }
                  />

                  <circle
                      cx={ corn.midX }
                      cy={ corn.midY }
                      r={ spacer(2.5 + 2 / 3) / 2 }
                      fill={ front }
                      transform={ transform }
                  />

              </g>

              <g>
                  <circle
                      cx={ edge.midX }
                      cy={ edge.midY }
                      r={ spacer(3) / 2 }
                      fill={ front }
                      transform={ transform }
                  />

                  <circle
                      cx={ edge.midX }
                      cy={ edge.midY }
                      r={ spacer(3 + 2 / 3) / 2 }
                      fill={ back }
                      transform={ transform }
                  />

                  <circle
                      cx={ edge.midX }
                      cy={ edge.midY }
                      r={ spacer(3 + 2 * 2 / 3) / 2 }
                      fill={ front }
                      transform={ transform }
                  />

              </g>


              <circle
                  cx={ (cont.maxX + edge.maxX) / 2 }
                  cy={ edge.midY }
                  r={ (cont.maxX - edge.maxX) / 2 / 4 }
                  fill={ front }
                  transform={ transform }
              />

              <circle
                  cx={ (mid.maxX + edge.minX) / 2 }
                  cy={ edge.midY }
                  r={ (edge.minX - mid.maxX) / 2 / 4 }
                  fill={ front }
                  transform={ transform }
              />

              <circle
                  cx={ edge.midX }
                  cy={ (corn.maxY + edge.minY) / 2 }
                  r={ (edge.minY - corn.maxY) / 2 / 4 }
                  fill={ front }
                  transform={ transform }
              />

              <circle
                  cx={ edge.midX }
                  cy={ edge.maxY + edge.minY - (corn.maxY + edge.minY) / 2 }
                  r={ (edge.minY - corn.maxY) / 2 / 4 }
                  fill={ front }
                  transform={ transform }
              />

          </g>
        );
    }

    return (
        <g>
            <g>
                <circle
                    cx={ mid.midX }
                    cy={ mid.midY }
                    r={ spacer(2) / 2 }
                    fill={ front }
                />

                <circle
                    cx={ mid.midX }
                    cy={ mid.midY }
                    r={ spacer(2 + 0.5 / 3) / 2 }
                    fill={ back }
                />

                <circle
                    cx={ mid.midX }
                    cy={ mid.midY }
                    r={ spacer(2 + 0.5 * 2 / 3) / 2 }
                    fill={ front }
                />

            </g>

            { outerPaths }

        </g>
    );
};

export default Logo;