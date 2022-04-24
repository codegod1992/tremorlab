import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface MarkerBarProps {
    markerPercentageValue: number,
    markerBgColor?: string,
    barBgColor?: string,
}

const MarkerBar = ({
    markerPercentageValue,
    markerBgColor = 'bg-blue-500',
    barBgColor = 'bg-gray-100'
}: MarkerBarProps) => {
    return(
        <BarWrapper
            bgColor={ parseBgClassNames(barBgColor) }
        >
            <div className="bg-transparent" style={ {'width': `${markerPercentageValue}%` } } />
            <div className={ classNames(
                parseBgClassNames(markerBgColor),
                'h-5 w-1'
            ) }
            />
        </BarWrapper>
    );
};

export default MarkerBar;
