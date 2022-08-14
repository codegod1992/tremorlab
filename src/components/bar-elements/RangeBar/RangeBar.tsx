import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';

export interface RangeBarProps {
    percentageValue: number,
    minRangeValue: number,
    maxRangeValue: number,
    color?: string,
    marginTop?: string,
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
            bgColor={ getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor }
            marginTop={ parseMarginTopClassNames(marginTop) } 
        >
            <div className="h-full bg-transparent" style={ {'width': `${minRangeValue}%`} } />
            <div
                className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.darkBackground).bgColor,
                    'h-full rounded-full'
                ) }
                style={ {'width': `${maxRangeValue - minRangeValue}%`} } 
            />
            <div 
                className="absolute inset-0 flex justify-end items-center"
                style={ {'width': `${percentageValue}%`} }
            >
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                    'h-4 w-1 rounded-full ring-2 ring-white flex-none'
                ) }
                />
            </div>
        </BarWrapper>
    );
};

export default RangeBar;
