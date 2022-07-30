import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { DeltaTypes } from '@utils/objects';
import { defaultColors } from '@utils/colorTheme';
import { deltaBgColors } from './mappings';
import { mapInputsToDeltaType } from '@utils/utils';

const getDelatType = (value: number) => (
    value >= 0 ? DeltaTypes.Increase : DeltaTypes.Decrease
);

export interface DeltaBarProps extends BaseComponentProps {
    percentageValue: number,
    isIncreasePositive?: boolean,
    markerBgColor?: string
}

const DeltaBar = ({
    percentageValue,
    isIncreasePositive = true,
    marginTop,
}: DeltaBarProps) => {
    return(
        // change here
        <BarWrapper 
            bgColor={ getColorVariantsFromColorThemeValue(defaultColors.background).bgColor }
            marginTop={ parseMarginTopClassNames(marginTop) }
        >
            <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-lg">
                { percentageValue < 0 ? (
                    <div 
                        className={ classNames(
                            deltaBgColors[mapInputsToDeltaType(getDelatType(percentageValue), isIncreasePositive)],
                            'rounded-l-full'
                        ) } 
                        style={ {'width': `${Math.abs(percentageValue)}%`} } 
                    />
                ) : null}
            </div>
            <div className={ classNames(
                getColorVariantsFromColorThemeValue(defaultColors.darkBackground).bgColor,
                'h-4 w-1 rounded-full ring-2 ring-white z-10'
            ) }
            />
            <div className="w-1/2 h-full flex justify-start bg-transparent rounded-r-lg">
                { percentageValue >= 0 ? (
                    <div 
                        className={ classNames(
                            deltaBgColors[mapInputsToDeltaType(getDelatType(percentageValue), isIncreasePositive)],
                            'rounded-r-full'
                        ) } 
                        style={ {'width': `${Math.abs(percentageValue)}%`} } 
                    />
                ) : null}
            </div>
        </BarWrapper>
    );
};

export default DeltaBar;
