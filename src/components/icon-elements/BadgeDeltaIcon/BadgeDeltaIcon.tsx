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
        paddingX: 'px-1.5',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2',
        paddingY: 'py-1',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-2',
        paddingY: 'py-1',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

const iconProportionsAttributes: {[char: string]: IconProportions} = {
    xs: {
        margin: '',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: '',
        iconSize: 'w-6 h-6',
    },
};

export interface BadgeDeltaIconProps {
    deltaType: string,
    isIncreasePositive?: boolean,
    badgeSize: string
}

const IconDeltaBadge = ({
    deltaType,
    isIncreasePositive = true,
    badgeSize = 'sm'
}: BadgeDeltaIconProps) => {
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
        </BadgeWrapper>
    );
};

export default IconDeltaBadge;
