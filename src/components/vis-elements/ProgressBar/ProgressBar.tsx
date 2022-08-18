import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classnameUtils';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import { BaseColors } from '@utils/objects';

export interface ProgressBarProps {
    percentageValue: number,
    label?: string,
    tooltip?: string,
    color?: string,
    marginTop?: string,
}

const ProgressBar = ({
    percentageValue,
    label,
    tooltip,
    color = BaseColors.Blue,
    marginTop
}: ProgressBarProps) => {
    const primaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor;
    const secondaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor;
    return(
        <div className={
            classNames(
                'flex items-center w-full',
                parseMarginTopClassNames(marginTop),
            )
        }>
            <div className={ classNames(
                'relative h-2 w-full flex rounded-lg items-center',
                secondaryBgColor,
            ) }>
                <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                    <div 
                        className={ classNames(
                            primaryBgColor,
                            'h-full flex-col rounded-lg'
                        ) }
                        style={ {'width': `${percentageValue}%`} }
                    />
                </Tooltip>
            </div>
            { label ? (
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    'ml-2 truncate w-16 text-right'
                ) }>
                    <span className="text-sm font-normal shrink-0 whitespace-nowrap truncate">
                        { label }
                    </span>
                </div>
            ) : null }
        </div>
    );
};

export default ProgressBar;
