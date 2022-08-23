import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, classNames, colorTheme, defaultColors, getColorVariantsFromColorThemeValue, sizing } from 'lib';
import { Colors, TwMarginTop } from '../../../lib';

export interface RangeBarProps {
    percentageValue: number,
    minRangeValue: number,
    maxRangeValue: number,
    markerTooltip?: string,
    rangeTooltip?: string,
    color?: Colors,
    marginTop?: TwMarginTop,
}

const RangeBar = ({
    percentageValue,
    minRangeValue,
    maxRangeValue,
    markerTooltip,
    rangeTooltip,
    color = BaseColors.Blue,
    marginTop = 'mt-0',
}: RangeBarProps) => {
    return(
        <div className={ classNames(
            'relative flex items-center w-full rounded-lg',
            marginTop,
            getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor,
            sizing.xs.height,
        ) }>
            <Tooltip content={ rangeTooltip } className={ rangeTooltip ? '' : 'hidden' }>
                <div
                    className={ classNames(
                        'absolute h-full rounded-lg',
                        getColorVariantsFromColorThemeValue(defaultColors.darkBackground).bgColor,
                    ) }
                    style={ {'left': `${minRangeValue}%`, 'width': `${maxRangeValue - minRangeValue}%`} } 
                />
            </Tooltip>
            <div className="absolute" style={ { 'left': `${percentageValue}%` } }>
                <Tooltip content={ markerTooltip } className={ markerTooltip ? '' : 'hidden' }>
                    <div
                        className={ classNames(
                            'rounded-lg ring-2 right-1/2 -translate-x-1/2',
                            getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                            getColorVariantsFromColorThemeValue(defaultColors.white).ringRolor,
                            sizing.md.height,
                            sizing.twoXs.width,
                        ) }
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default RangeBar;
