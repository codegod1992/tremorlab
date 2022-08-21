import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colorTheme';
import { BaseColors } from 'lib/primitives';
import { sizing } from 'lib/sizing';

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
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <div className={ classNames(
                'relative flex items-center w-full rounded-lg',
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
        </div>
    );
};

export default RangeBar;
