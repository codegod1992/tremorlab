import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colors';
import { BaseColors } from 'lib/primitives';
import { sizing } from 'lib/sizing';

export interface MarkerBarProps {
    percentageValue: number,
    color?: string,
    tooltip?: string,
    marginTop?: string,
}

const MarkerBar = ({
    percentageValue,
    color = BaseColors.Blue,
    tooltip,
    marginTop
}: MarkerBarProps) => {
    const primaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor;
    const secondaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor;
    return(
        <div className={ classNames(
            'relative flex items-center w-full rounded-lg',
            classNames(parseMarginTopClassNames(marginTop)),
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
