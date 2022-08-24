import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes, classNames, colorTheme, getColorVariantsFromColorThemeValue, spacing } from 'lib';
import { Color, MarginTop, Size } from '../../../lib';
import { badgeProportions, iconSizes } from './styles';

export interface BadgeProps {
    text: string,
    color?: Color,
    size?: Size,
    Icon?: React.ElementType,
    tooltip?: string,
    marginTop?: MarginTop,
}

const Badge = ({
    text,
    color = BaseColors.Blue,
    Icon,
    size = Sizes.SM,
    tooltip,
    marginTop = 'mt-0',
}: BadgeProps) => {
    return(
        <div className={ classNames(marginTop) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span className={ classNames(
                    'flex-shrink-0 inline-flex justify-center items-center rounded-full',
                    getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
                    getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor,
                    badgeProportions[size]?.paddingLeft,
                    badgeProportions[size]?.paddingRight,
                    badgeProportions[size]?.paddingTop,
                    badgeProportions[size]?.paddingBottom,
                    badgeProportions[size]?.fontSize,
                ) }>
                    { Icon ? (
                        <Icon className={ classNames(
                            spacing.twoXs.negativeMarginLeft,
                            spacing.xs.marginRight,
                            iconSizes[size]?.height,
                            iconSizes[size]?.width,
                        ) }
                        />
                    ) : null }
                    <p className="whitespace-nowrap">{ text }</p>
                </span>
            </Tooltip>
        </div>
    );
};

export default Badge;
