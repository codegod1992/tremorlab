import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

export interface PeerComparisonBarProps extends BaseComponentProps {
    markerPercentage: number,
    peerGroupMinPercentage: number,
    peerGroupMaxPercentage: number,
    color?: string,
}

const PeerComparisonBar = ({
    markerPercentage,
    peerGroupMinPercentage,
    peerGroupMaxPercentage,
    color = BaseColors.Blue,
    marginTop,
}: PeerComparisonBarProps) => {
    return(
        <BarWrapper
            bgColor={ colors[color].secondaryBgColor }
            marginTop={ parseMarginTopClassNames(marginTop) } 
        >
            <div className="h-full bg-transparent" style={ {'width': `${peerGroupMinPercentage}%`} } />
            <div
                className={ classNames(
                    colors[color].primaryBgColor,
                    'h-full rounded-full'
                ) }
                style={ {'width': `${peerGroupMaxPercentage - peerGroupMinPercentage}%`} } 
            />
            <div 
                className="absolute inset-0 flex justify-end items-center"
                style={ {'width': `${markerPercentage}%`} }
            >
                <div className={ classNames(
                    'bg-blue-500',
                    'h-4 w-1 rounded-full ring-2 ring-white flex-none'
                ) }
                />
            </div>
        </BarWrapper>
    );
};

export default PeerComparisonBar;
