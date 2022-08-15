import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { DeltaTypes } from '@utils/objects';
import { defaultColors } from '@utils/colorTheme';
import { deltaBgColors } from './mappings';
import { mapInputsToDeltaType } from '@utils/utils';

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
        // change here
        <BarWrapper 
            bgColor={ getColorVariantsFromColorThemeValue(defaultColors.background).bgColor }
            marginTop={ parseMarginTopClassNames(marginTop) }
        >
            <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-lg">
                { percentageValue < 0 ? (
                    <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                        <div 
                            className={ classNames(
                                deltaBgColors[mapInputsToDeltaType(getDeltaType(percentageValue), isIncreasePositive)],
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
                                deltaBgColors[mapInputsToDeltaType(getDeltaType(percentageValue), isIncreasePositive)],
                                'rounded-r-full'
                            ) } 
                            style={ {'width': `${Math.abs(percentageValue)}%`} } 
                        />
                    </Tooltip>
                ) : null}
            </div>
        </BarWrapper>
    );
};

export default DeltaBar;
