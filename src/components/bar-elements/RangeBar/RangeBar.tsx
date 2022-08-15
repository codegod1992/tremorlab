import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';

export interface RangeBarProps {
    percentageValue: number,
    minRangeValue: number,
    maxRangeValue: number,
    markerTooltip?: string,
    rangeTooltip?: string,
    color?: string,
    marginTop?: string,
}

const RangeBar = ({
    percentageValue,
    minRangeValue,
    maxRangeValue,
    markerTooltip,
    rangeTooltip,
    color = BaseColors.Blue,
    marginTop,
}: RangeBarProps) => {
    return(
        <BarWrapper
            bgColor={ getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor }
            marginTop={ parseMarginTopClassNames(marginTop) } 
        >
            <Tooltip content={ rangeTooltip } className={ rangeTooltip ? '' : 'hidden' }>
                <div
                    className={ classNames(
                        getColorVariantsFromColorThemeValue(defaultColors.darkBackground).bgColor,
                        'absolute h-full rounded-full'
                    ) }
                    style={ {'left': `${minRangeValue}%`, 'width': `${maxRangeValue - minRangeValue}%`} } 
                />
            </Tooltip>
            <div className="absolute" style={ { 'left': `${percentageValue}%` } }>
                <Tooltip content={ markerTooltip } className={ markerTooltip ? '' : 'hidden' }>
                    <div
                        className={ classNames(
                            'h-4 w-1 rounded-lg ring-2 ring-white',
                            'right-1/2 -translate-x-1/2',
                            getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                        ) }
                    />
                </Tooltip>
            </div>
        </BarWrapper>
    );
};

export default RangeBar;
