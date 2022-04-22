import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { DeltaTypes } from '@common/component-utils';

export interface DeltaBarProps {
    widthPercentage: number,
    deltaType: string,
    isIncreasePositive: boolean,
    barBgColor?: string,
    markerBgColor?: string
}

const DeltaTypeBgColors = {
    Increase: 'bg-emerald-500',
    Decrease: 'bg-rose-500'
};

const DeltaBar = ({
    widthPercentage,
    deltaType,
    isIncreasePositive = true,
    barBgColor = 'bg-gray-200',
    markerBgColor = 'bg-gray-400'
}: DeltaBarProps) => {
    return(
        <BarWrapper bgColor={ classNames(parseBgClassNames(barBgColor)) }>
            <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-full">
                { deltaType===DeltaTypes.Decrease ? (
                    <div 
                        className={ classNames(
                            isIncreasePositive ? DeltaTypeBgColors.Decrease : DeltaTypeBgColors.Increase,
                            'rounded-l-full'
                        ) } 
                        style={ {'width': `${widthPercentage}%`} } 
                    />
                ) : null}
            </div>
            <div className={ classNames(
                parseBgClassNames(markerBgColor),
                'h-5 w-0.5'
            ) } 
            />
            <div className="w-1/2 h-full flex justify-start bg-transparent rounded-r-full">
                { deltaType===DeltaTypes.Increase ? (
                    <div 
                        className={ classNames(
                            isIncreasePositive ? DeltaTypeBgColors.Increase : DeltaTypeBgColors.Decrease,
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
