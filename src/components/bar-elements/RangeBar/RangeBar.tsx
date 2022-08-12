import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

export interface RangeBarProps extends BaseComponentProps {
    percentageValue: number,
    minRangeValue: number,
    maxRangeValue: number,
    color?: string,
}

const RangeBar = ({
    percentageValue,
    minRangeValue,
    maxRangeValue,
    color = BaseColors.Blue,
    marginTop,
}: RangeBarProps) => {
    return(
        <BarWrapper
            bgColor={ colors[color].secondaryBgColor }
            marginTop={ parseMarginTopClassNames(marginTop) } 
        >
            <div className="h-full bg-transparent" style={ {'width': `${minRangeValue}%`} } />
            <div
                className={ classNames(
                    colors[color].primaryBgColor,
                    'h-full rounded-full'
                ) }
                style={ {'width': `${maxRangeValue - minRangeValue}%`} } 
            />
            <div 
                className="absolute inset-0 flex justify-end items-center"
                style={ {'width': `${percentageValue}%`} }
            >
                <div className={ classNames(
                    colors[color].markerBgColor,
                    'h-4 w-1 rounded-full ring-2 ring-white flex-none'
                ) }
                />
            </div>
        </BarWrapper>
    );
};

export default RangeBar;
