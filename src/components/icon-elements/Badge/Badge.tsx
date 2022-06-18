import React from 'react';

import { badgeProportionsTextOnly, badgeProportionsWithIcon, iconProportions } from './mappings';
import BadgeWrapper from '@common/BadgeWrapper';
import { classNames } from '@utils/classname-utils';
import { colors } from './mappings';

export interface BadgeIconTextProps {
    text: string,
    color?: string,
    size?: string,
    Icon?: React.ElementType
}

const Badge = ({
    text,
    color = 'blue',
    Icon,
    size = 'sm',
}: BadgeIconTextProps) => {
    const badgeProportions = Icon ? badgeProportionsWithIcon : badgeProportionsTextOnly;
    return(
        <BadgeWrapper 
            { ...badgeProportions[size] }
            bgColor = { colors[color].bgColor }
            textColor = { colors[color].textColor }
        >
            { Icon ? (
                <Icon className={ classNames(
                    iconProportions[size] ? iconProportions[size].margin! : iconProportions['sm'].margin!,
                    iconProportions[size] ? iconProportions[size].iconSize! : iconProportions['sm'].iconSize!,
                ) }
                />
            ) : null }
            { text }
        </BadgeWrapper>
    );
};

export default Badge;
