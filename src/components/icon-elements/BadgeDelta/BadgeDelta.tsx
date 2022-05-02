import React from 'react';

import { 
    DeltaBgColors,
    DeltaIcons,
    DeltaTextColors,
    mapInputsToDeltaType 
} from '@utils/component-utils';
import { 
    badgeProportionsIconOnly,
    badgeProportionsWithText,
    iconProportionsIconOnly,
    iconProportionsWithText
} from './mappings';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';

export interface BadgeDeltaProps {
    delta?: string,
    deltaType: string,
    isIncreasePositive?: boolean,
    size?: string
}

const BadgeDelta = ({
    delta,
    deltaType,
    isIncreasePositive = true,
    size = 'sm'
}: BadgeDeltaProps) => {
    const Icon = DeltaIcons[deltaType];
    const mappedDeltaType = mapInputsToDeltaType(deltaType, isIncreasePositive);
    const badgeProportions = delta ? badgeProportionsWithText : badgeProportionsIconOnly;
    return(
        <BadgeWrapper
            { ...badgeProportions[size] }
            bgColor={ DeltaBgColors[mappedDeltaType] }
            textColor={ DeltaTextColors[mappedDeltaType] }
        >
            <Icon className={ classNames(
                delta ? (iconProportionsWithText[size].margin || '') : (iconProportionsIconOnly[size].margin || '') ,
                delta ? (iconProportionsWithText[size].iconSize || '') : (iconProportionsIconOnly[size].iconSize || '')
            ) }
            />
            { delta ? delta : null}
        </BadgeWrapper>
    );
};

export default BadgeDelta;
