import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { DeltaTypes } from '@common/component-utils';

export interface DeltaBarProps {
    widthPercentage: number,
    deltaType: string,
    barBgColor?: string,
    markerBgColor?: string
}

const DeltaBar = ({
    widthPercentage,
    deltaType,
    barBgColor = 'bg-gray-200',
    markerBgColor = 'bg-gray-400'
}: DeltaBarProps) => {
    return(
        <BarWrapper bgColor={ classNames(parseBgClassNames(barBgColor)) }>
            <div className="w-1/2 h-full flex justify-end bg-transparent rounded-l-full">
                { deltaType===DeltaTypes.Decrease ? (
                    <div className="bg-rose-500 rounded-l-full" style={ {'width': `${widthPercentage}%`} } />
                ) : null}
            </div>
            <div className={ classNames(
                parseBgClassNames(markerBgColor),
                'h-5 w-0.5'
            ) } 
            />
            <div className="w-1/2 h-full flex justify-start bg-transparent rounded-r-full">
                { deltaType===DeltaTypes.Increase ? (
                    <div className="bg-emerald-500 rounded-r-full" style={ {'width': `${widthPercentage}%`} } />
                ) : null}
            </div>
        </BarWrapper>
    );
};

export default DeltaBar;
