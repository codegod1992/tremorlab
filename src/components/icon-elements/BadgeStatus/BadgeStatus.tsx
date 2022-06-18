import React from 'react';

import { badgeProportions, iconProportions } from './mappings';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';
import { colors } from './mappings';

export interface BadgeStatusProps {
    text: string,
    color?: string,
    size?: string
}

const BadgeStatus = ({
    text,
    color = 'blue',
    size = 'sm'
}: BadgeStatusProps) => {
    return(
        <BadgeWrapper
            { ...badgeProportions[size] }
            bgColor={ colors[color].bgColor }
            textColor={ colors[color].textColor }
        >
            <svg
                className={ classNames( 
                    iconProportions[size] ? iconProportions[size].margin! : iconProportions['sm'].margin!,
                    iconProportions[size] ? iconProportions[size].iconSize : iconProportions['sm'].iconSize,
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
