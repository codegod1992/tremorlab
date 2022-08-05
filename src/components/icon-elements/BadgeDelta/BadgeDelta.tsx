import React from 'react';

import { 
    badgeProportionsIconOnly,
    badgeProportionsWithText,
    deltaBgColors,
    deltaIcons,
    deltaTextColors,
    iconProportionsIconOnly,
    iconProportionsWithText,
} from './mappings';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BadgeWrapper from '@common/BadgeWrapper';
import BaseComponentProps from '@common/BaseComponentInterface';
import { mapInputsToDeltaType } from '@utils/utils';

export interface BadgeDeltaProps extends BaseComponentProps {
    text?: string,
    deltaType: string,
    isIncreasePositive?: boolean,
    size?: string
}

const BadgeDelta = ({
    text,
    deltaType,
    isIncreasePositive = true,
    size = 'sm',
    marginTop,
}: BadgeDeltaProps) => {
    const Icon = deltaIcons[deltaType];
    const mappedDeltaType = mapInputsToDeltaType(deltaType, isIncreasePositive);
    const badgeProportions = text ? badgeProportionsWithText : badgeProportionsIconOnly;
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <BadgeWrapper
                { ...badgeProportions[size] }
                bgColor={ deltaBgColors[mappedDeltaType] }
                textColor={ deltaTextColors[mappedDeltaType] }
            >
                <Icon className={ classNames(
                    text
                        ? (iconProportionsWithText[size].margin || '')
                        : (iconProportionsIconOnly[size].margin || '') ,
                    text
                        ? (iconProportionsWithText[size].iconSize || '')
                        : (iconProportionsIconOnly[size].iconSize || '')
                ) }
                />
                { text ? text : null}
            </BadgeWrapper>
        </div>
    );
};

export default BadgeDelta;
