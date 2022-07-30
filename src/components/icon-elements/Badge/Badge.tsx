import React from 'react';

import { badgeProportionsTextOnly, badgeProportionsWithIcon, iconProportions } from './mappings';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BadgeWrapper from '@common/BadgeWrapper';
import BaseComponentProps from '@common/BaseComponentInterface';
import { Sizes } from '@utils/objects';
import { colors } from './mappings';

export interface BadgeIconTextProps extends BaseComponentProps {
    text: string,
    color?: string,
    size?: string,
    Icon?: React.ElementType
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
