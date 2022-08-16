import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes } from '@utils/objects';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import { iconProportions, proportionsTextOnly, proportionsWithIcon } from './styles';
import { colors } from './styles';

export interface BadgeIconTextProps {
    text: string,
    color?: string,
    size?: string,
    Icon?: React.ElementType,
    tooltip?: string,
    marginTop?: string,
}

const Badge = ({
    text,
    color = BaseColors.Blue,
    Icon,
    size = Sizes.SM,
    tooltip,
    marginTop,
}: BadgeIconTextProps) => {
    const proportions = Icon ? proportionsWithIcon : proportionsTextOnly;
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span className={ classNames(
                    'flex-shrink-0 inline-flex justify-center items-center rounded-full',
                    colors[color].bgColor,
                    colors[color].textColor,
                    proportions[size]?.paddingX,
                    proportions[size]?.paddingY,
                    proportions[size]?.textSize,
                ) }>
                    { Icon ? (
                        <Icon className={ classNames(
                            iconProportions[size]?.margin,
                            iconProportions[size]?.iconSize,
                        ) }
                        />
                    ) : null }
                    <p>{ text }</p>
                </span>
            </Tooltip>
        </div>
    );
};

export default Badge;
