import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface TrapezoidProps {
    wrapperPixelWidth: number,
    topWidthPercentage: number,
    bottomWidthPercentage: number,
    pixelHeight: number,
    textColor?: string
}

const Trapezoid = ({
    wrapperPixelWidth,
    topWidthPercentage,
    bottomWidthPercentage,
    pixelHeight = 70,
    textColor = 'text-gray-100'
}: TrapezoidProps) => {

    const calculateSideBorderWidth = (
        wrapperPixelWidth: number,
        topWidthPercentage: number,
        bottomWidthPercentage: number
    ): number => (
        Math.floor((wrapperPixelWidth*(topWidthPercentage/100) - wrapperPixelWidth*(bottomWidthPercentage/100)) / 2)
    );

    return(
        <div
            className={ classNames(
                parseTextColorClassNames(textColor),
                'boder-b-0 h-0'
            )}
            style={{
                width: `${topWidthPercentage}%`,
                borderTop: `${pixelHeight}px solid`,
                borderLeft: `${
                    calculateSideBorderWidth(
                        wrapperPixelWidth,
                        topWidthPercentage,
                        bottomWidthPercentage
                    )}px solid transparent`,
                borderRight: `${
                    calculateSideBorderWidth(
                        wrapperPixelWidth,
                        topWidthPercentage,
                        bottomWidthPercentage
                    )}px solid transparent`,
            }}
        />
    );
};

export default Trapezoid;
