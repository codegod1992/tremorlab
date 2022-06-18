import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

export interface MarkerBarProps extends BaseComponentProps {
    markerPercentageValue: number,
    color?: string,
}

const MarkerBar = ({
    markerPercentageValue,
    color = BaseColors.Blue,
    marginTop
}: MarkerBarProps) => {
    return(
        <BarWrapper
            bgColor={ colors[color].secondaryBgColor }
            marginTop={ parseMarginTopClassNames(marginTop) }
        >
            <div className="bg-transparent" style={ {'width': `${markerPercentageValue}%` } } />
            <div className={ classNames(
                colors[color].primaryBgColor,
                'h-4 w-1 rounded-lg ring-2 ring-white'
            ) }
            />
        </BarWrapper>
    );
};

export default MarkerBar;
