import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, classNames, colorTheme, defaultColors, getColorVariantsFromColorThemeValue, sizing } from 'lib';
import { Colors, TwMarginTop } from '../../../lib';

export interface MarkerBarProps {
    percentageValue: number,
    color?: Colors,
    tooltip?: string,
    marginTop?: TwMarginTop,
}

const MarkerBar = ({
    percentageValue,
    color = BaseColors.Blue,
    tooltip,
    marginTop = 'mt-0',
}: MarkerBarProps) => {
    const primaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor;
    const secondaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor;
    return(
        <div className={ classNames(
            'relative flex items-center w-full rounded-lg',
            marginTop,
            secondaryBgColor,
            sizing.xs.height,
        ) }>
            <div className="absolute" style={ { 'left': `${percentageValue}%` } }>
                <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                    <div
                        className={ classNames(
                            'rounded-lg ring-2 right-1/2 -translate-x-1/2',
                            primaryBgColor,
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

export default MarkerBar;
