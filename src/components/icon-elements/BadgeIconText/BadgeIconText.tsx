import React from 'react';

import { BadgeProportions, IconProportions } from '@utils/component-utils';
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
        margin: 'mr-1',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-0.5 mr-1',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-4 h-4',
    },
    lg: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-5 h-5',
    },
};

export interface BadgeIconTextProps {
    text: string,
    badgeSize?: string,
    Icon: React.ElementType
}

const BadgeIconText = ({
    text,
    Icon,
    badgeSize = 'sm',
}: BadgeIconTextProps) => {
    return(
        <BadgeWrapper 
            {...badgeProportionsAttributes[badgeSize]}
            bgColor = {'bg-gray-100'}
            textColor = {'text-gray-800'}
        >
            <Icon className={ classNames(
                iconProportionsAttributes[badgeSize].margin || '',
                iconProportionsAttributes[badgeSize].iconSize || '',
            ) }
            />
            { text }
        </BadgeWrapper>
    );
};

export default BadgeIconText;
