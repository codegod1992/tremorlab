import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { colors } from './styles';
import { defaultColors } from '@utils/colorTheme';

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
    return(
        <div className={
            classNames(
                'flex items-center w-full',
                parseMarginTopClassNames(marginTop),
            )
        }>
            <div className={ classNames(
                'relative h-2 w-full flex rounded-lg items-center',
                colors[color].secondaryBgColor,
            ) }>
                <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                    <div 
                        className={ classNames(
                            colors[color].primaryBgColor,
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
