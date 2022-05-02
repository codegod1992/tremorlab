import React from 'react';

import { badgeProportions, iconProportions } from './mappings';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';

export interface BadgeStatusProps {
    text: string,
    badgeSize?: string
}

const BadgeStatus = ({
    text,
    badgeSize = 'sm'
}: BadgeStatusProps) => {
    return(
        <BadgeWrapper
            { ...badgeProportions[badgeSize] }
            bgColor={ 'bg-emerald-100' }
            textColor={ 'text-emerald-800' }
        >
            <svg
                className={ classNames( 
                    iconProportions[badgeSize].margin || '',
                    iconProportions[badgeSize].iconSize || '',
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
