import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface MarkerBarProps extends BaseComponentProps {
    markerPercentageValue: number,
    markerBgColor?: string,
    barBgColor?: string,
}

const MarkerBar = ({
    markerPercentageValue,
    markerBgColor = 'bg-blue-500',
    barBgColor = 'bg-gray-100',
    marginTop
}: MarkerBarProps) => {
    return(
        <BarWrapper
            bgColor={ parseBgClassNames(barBgColor) }
            marginTop={ parseMarginTopClassNames(marginTop) }
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
