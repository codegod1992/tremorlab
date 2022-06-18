import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface PeerComparisonBarProps extends BaseComponentProps {
    markerPercentage: number,
    peerGroupMinPercentage: number,
    peerGroupMaxPercentage: number, 
    markerBgColor?: string,
    peerGroupBgColor?: string,
    barBgColor?: string,
}

const PeerComparisonBar = ({
    markerPercentage,
    peerGroupMinPercentage,
    peerGroupMaxPercentage,
    markerBgColor = 'bg-blue-500',
    peerGroupBgColor = 'bg-gray-400',
    barBgColor = 'bg-gray-200',
    marginTop,
}: PeerComparisonBarProps) => {
    return(
        <BarWrapper
            bgColor={ classNames(parseBgClassNames(barBgColor)) }
            marginTop={ parseMarginTopClassNames(marginTop) } 
        >
            <div className="h-full bg-transparent" style={ {'width': `${peerGroupMinPercentage}%`} } />
            <div
                className={ classNames(
                    parseBgClassNames(peerGroupBgColor),
                    'h-full rounded-full'
                ) }
                style={ {'width': `${peerGroupMaxPercentage - peerGroupMinPercentage}%`} } 
            />
            <div 
                className="absolute inset-0 flex justify-end items-center"
                style={ {'width': `${markerPercentage}%`} }
            >
                <div className={ classNames(
                    parseBgClassNames(markerBgColor),
                    'h-4 w-1 rounded-full ring-2 ring-white'
                ) }
                />
            </div>
        </BarWrapper>
    );
};

export default PeerComparisonBar;
