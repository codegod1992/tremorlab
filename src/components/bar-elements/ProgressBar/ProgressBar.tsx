import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface ProgressBarProps extends BaseComponentProps {
    widthPercentage: number,
    label?: string,
    color?: string,
}

const ProgressBar = ({
    widthPercentage,
    label,
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
                'w-full',
            ) }>
                <BarWrapper
                    bgColor={ colors[color].secondaryBgColor }
                >
                    <div 
                        className={ classNames(
                            colors[color].primaryBgColor,
                            'h-full flex-col rounded-lg'
                        ) }
                        style={ {'width': `${widthPercentage}%`} }
                    />
                </BarWrapper>
            </div>
            { label ? (
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                    'ml-2 truncate w-16 text-right'
                ) }>
                    <span className="whitespace-nowrap truncate">
                        { label }
                    </span>
                </div>
            ) : null }
        </div>
    );
};

export default ProgressBar;
