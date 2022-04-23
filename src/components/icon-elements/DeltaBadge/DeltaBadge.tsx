import React from 'react';

import { 
    BadgeProportions,
    DeltaBgColors,
    DeltaIcons,
    DeltaTextColors,
    IconProportions, 
    mapInputsToDeltaType
} from '@common/component-utils';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';

const badgeProportionsAttributes: {[char: string]: BadgeProportions} = {
    xs: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2.5',
        paddingY: 'py-0.5',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-3',
        paddingY: 'py-0.5',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-3',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

const iconProportionsAttributes: {[char: string]: IconProportions} = {
    xs: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
    lg: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
};

export interface DeltaBadgeProps {
    delta: string,
    deltaType: string,
    isIncreasePositive?: boolean,
    badgeSize?: string
}

const DeltaBadge = ({
    delta,
    deltaType,
    isIncreasePositive = true,
    badgeSize = 'sm'
}: DeltaBadgeProps) => {
    const Icon = DeltaIcons[deltaType];
    const mappedDeltaType = mapInputsToDeltaType(deltaType, isIncreasePositive);
    return(
        <BadgeWrapper
            {...badgeProportionsAttributes[badgeSize]}
            bgColor={ DeltaBgColors[mappedDeltaType] }
            textColor={ DeltaTextColors[mappedDeltaType] }
        >
            <Icon className={ classNames(
                iconProportionsAttributes[badgeSize].margin || '',
                iconProportionsAttributes[badgeSize].iconSize || '',
            ) }
            />
            { delta }
        </BadgeWrapper>
    );
};

export default DeltaBadge;
