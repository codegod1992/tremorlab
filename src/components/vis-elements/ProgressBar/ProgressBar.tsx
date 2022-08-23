import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { TwMarginTop, spacing } from 'lib/spacing';
import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colors';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import { sizing } from 'lib/sizing';

export interface ProgressBarProps {
    percentageValue: number,
    label?: string,
    tooltip?: string,
    color?: string,
    marginTop?: TwMarginTop,
}

const ProgressBar = ({
    percentageValue,
    label,
    tooltip,
    color = BaseColors.Blue,
    marginTop = 'mt-0',
}: ProgressBarProps) => {
    const primaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor;
    const secondaryBgColor = getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor;
    return(
        <div className={
            classNames(
                'flex items-center w-full',
                marginTop,
            )
        }>
            <div className={ classNames(
                'relative flex items-center w-full rounded-lg',
                secondaryBgColor,
                sizing.xs.height,
            ) }>
                <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                    <div 
                        className={ classNames(
                            primaryBgColor,
                            'flex-col h-full rounded-lg'
                        ) }
                        style={ {'width': `${percentageValue}%`} }
                    />
                </Tooltip>
            </div>
            { label ? (
                <div className={ classNames(
                    'w-16 truncate text-right',
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    spacing.sm.marginLeft,
                ) }>
                    <p className={ classNames(
                        'shrink-0 whitespace-nowrap truncate',
                        fontSize.sm,
                        fontWeight.sm,
                    ) }>
                        { label }
                    </p>
                </div>
            ) : null }
        </div>
    );
};

export default ProgressBar;
