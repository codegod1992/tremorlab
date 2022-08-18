import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { BaseColors } from 'lib/objects';
import colorTheme from 'lib/colorTheme';

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
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <div className={ classNames(
                'relative h-2 w-full flex rounded-lg items-center',
                secondaryBgColor,
            ) }>
                <div className="absolute" style={ { 'left': `${percentageValue}%` } }>
                    <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                        <div
                            className={ classNames(
                                'h-4 w-1 rounded-lg ring-2 ring-white',
                                'right-1/2 -translate-x-1/2',
                                primaryBgColor,
                            ) }
                        />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default MarkerBar;
