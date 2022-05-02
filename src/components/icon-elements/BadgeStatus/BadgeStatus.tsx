import React from 'react';

import { BadgeProportions, IconProportionTypes } from '@utils/component-utils';
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

const iconProportions: {[char: string]: IconProportionTypes} = {
    xs: {
        margin: 'ml-0.5 mr-1.5',
        iconSize: 'w-2 h-2',
    },
    sm: {
        margin: 'mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
    md: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
    lg: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
};

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
            { ...badgeProportionsAttributes[badgeSize] }
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
