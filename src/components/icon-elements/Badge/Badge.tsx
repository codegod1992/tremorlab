import React from 'react';

import { badgeProportionsTextOnly, badgeProportionsWithIcon, iconProportions } from './mappings';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';

export interface BadgeIconTextProps {
    text: string,
    size?: string,
    Icon?: React.ElementType
}

const Badge = ({
    text,
    Icon,
    size = 'sm',
}: BadgeIconTextProps) => {
    const badgeProportions = Icon ? badgeProportionsWithIcon : badgeProportionsTextOnly;
    return(
        <BadgeWrapper 
            {...badgeProportions[size]}
            bgColor = {'bg-gray-100'}
            textColor = {'text-gray-800'}
        >
            { Icon ? (
                <Icon className={ classNames(
                    iconProportions[size].margin || '',
                    iconProportions[size].iconSize || '',
                ) }
                />
            ) : null }
            { text }
        </BadgeWrapper>
    );
};

export default Badge;
