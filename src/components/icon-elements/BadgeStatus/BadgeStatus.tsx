import React from 'react';

import { badgeProportions, iconProportions } from './mappings';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';
import { colors } from './mappings';

export interface BadgeStatusProps {
    text: string,
    color?: string,
    badgeSize?: string
}

const BadgeStatus = ({
    text,
    color = 'blue',
    badgeSize = 'sm'
}: BadgeStatusProps) => {
    console.log(badgeSize);
    return(
        <BadgeWrapper
            { ...badgeProportions[badgeSize] }
            bgColor={ colors[color].bgColor }
            textColor={ colors[color].textColor }
        >
            <svg
                className={ classNames( 
                    iconProportions[badgeSize] ? iconProportions[badgeSize].margin! : iconProportions['sm'].margin!,
                    iconProportions[badgeSize] ? iconProportions[badgeSize].iconSize : iconProportions['sm'].iconSize,
                )}
                fill="currentColor" viewBox="0 0 8 8"
            >
                <circle cx={4} cy={4} r={3} />
            </svg>
            { text }
        </BadgeWrapper>
    );
};

export default BadgeStatus;
