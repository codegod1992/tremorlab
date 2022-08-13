import React from 'react';

import { badgeProportionsTextOnly, badgeProportionsWithIcon, iconProportions } from './mappings';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BadgeWrapper from '@common/BadgeWrapper';
import { Sizes } from '@utils/objects';
import { colors } from './mappings';

export interface BadgeIconTextProps {
    text: string,
    color?: string,
    size?: string,
    Icon?: React.ElementType,
    marginTop?: string,
}

const Badge = ({
    text,
    color = 'blue',
    Icon,
    size = Sizes.SM,
    marginTop,
}: BadgeIconTextProps) => {
    const badgeProportions = Icon ? badgeProportionsWithIcon : badgeProportionsTextOnly;
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
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
        </div>
    );
};

export default Badge;
