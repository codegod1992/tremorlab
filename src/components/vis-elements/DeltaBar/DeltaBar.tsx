import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { DeltaTypes } from 'lib/objects';
import { colors } from './styles';
import { defaultColors } from 'lib/colorTheme';
import { mapInputsToDeltaType } from 'lib/utils';

const getDeltaType = (value: number) => (
    value >= 0 ? DeltaTypes.Increase : DeltaTypes.Decrease
);

export interface DeltaBarProps {
    percentageValue: number,
    isIncreasePositive?: boolean,
    tooltip?: string,
    marginTop?: string,
}

const DeltaBar = ({
    percentageValue,
    isIncreasePositive = true,
    tooltip,
    marginTop,
}: DeltaBarProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <div className={ classNames(
                'relative h-2 w-full flex rounded-lg items-center',
                getColorVariantsFromColorThemeValue(defaultColors.background).bgColor,
            ) }>
                <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-lg">
                    { percentageValue < 0 ? (
                        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                            <div 
                                className={ classNames(
                                    colors[mapInputsToDeltaType(
                                        getDeltaType(percentageValue),
                                        isIncreasePositive
                                    )].bgColor,
                                    'rounded-l-full'
                                ) } 
                                style={ {'width': `${Math.abs(percentageValue)}%`} } 
                            />
                        </Tooltip>
                    ) : null}
                </div>
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.darkBackground).bgColor,
                    'h-4 w-1 rounded-full ring-2 ring-white z-10'
                ) }
                />
                <div className="w-1/2 h-full flex justify-start bg-transparent rounded-r-lg">
                    { percentageValue >= 0 ? (
                        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                            <div
                                className={ classNames(
                                    colors[mapInputsToDeltaType(
                                        getDeltaType(percentageValue),
                                        isIncreasePositive
                                    )].bgColor,
                                    'rounded-r-full'
                                ) } 
                                style={ {'width': `${Math.abs(percentageValue)}%`} } 
                            />
                        </Tooltip>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default DeltaBar;
