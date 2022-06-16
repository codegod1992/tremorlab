import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { DeltaTypes } from '@utils/objects';
import { deltaBgColors } from './mappings';
import { mapInputsToDeltaType } from '@utils/utils';

export interface DeltaBarProps extends BaseComponentProps {
    // change param here
    widthPercentage: number,
    deltaType: string,
    isIncreasePositive?: boolean,
    barBgColor?: string,
    markerBgColor?: string
}

const DeltaBar = ({
    // change param here
    widthPercentage,
    deltaType,
    isIncreasePositive = true,
    barBgColor = 'bg-gray-200',
    markerBgColor = 'bg-gray-400',
    marginTop,
}: DeltaBarProps) => {
    return(
        // change here
        <BarWrapper 
            bgColor={ classNames(parseBgClassNames(barBgColor)) }
            marginTop={ parseMarginTopClassNames(marginTop) }
        >
            <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-lg">
                { deltaType===DeltaTypes.Decrease ? (
                    <div 
                        className={ classNames(
                            deltaBgColors[mapInputsToDeltaType(deltaType, isIncreasePositive)],
                            'rounded-l-full'
                        ) } 
                        style={ {'width': `${widthPercentage}%`} } 
                    />
                ) : null}
            </div>
            <div className={ classNames(
                parseBgClassNames(markerBgColor),
                // color of marker: same as delta?
                'h-4 w-1 rounded-full ring-2 ring-white z-10'
            ) } 
            />
            <div className="w-1/2 h-full flex justify-start bg-transparent rounded-r-lg">
                { deltaType===DeltaTypes.Increase ? (
                    <div 
                        className={ classNames(
                            deltaBgColors[mapInputsToDeltaType(deltaType, isIncreasePositive)],
                            'rounded-r-full'
                        ) } 
                        style={ {'width': `${widthPercentage}%`} } 
                    />
                ) : null}
            </div>
        </BarWrapper>
    );
};

export default DeltaBar;
