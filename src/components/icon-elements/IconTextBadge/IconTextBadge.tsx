import React from 'react';

import { BadgeProportions, IconProportions } from '@common/component-utils';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';

// { id: 1, px: "px-2", py: "py-0.5", textSize: "text-xs", icon: MailIcon, iconSize: "w-4 h-4", margin: "mr-1"},
// { id: 2, px: "px-2.5", py: "py-0.5", textSize: "text-sm", icon: MailIcon,  iconSize: "w-4 h-4", margin: "-ml-0.5 mr-1"},
// { id: 3, px: "px-3", py: "py-0.5", textSize: "text-md", icon: MailIcon, iconSize: "w-4 h-4", margin: "-ml-0.5 mr-1.5"},
// { id: 4, px: "px-3", py: "py-0.5", textSize: "text-lg", icon: MailIcon, iconSize: "w-5 h-5", margin: "-ml-0.5 mr-1.5"},

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

export interface IconTextBadgeProps {
    text: string,
    badgeSize?: string,
    Icon: React.ElementType
}

const IconTextBadge = ({
    text,
    Icon,
    badgeSize = 'sm',
}: IconTextBadgeProps) => {
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

export default IconTextBadge;
