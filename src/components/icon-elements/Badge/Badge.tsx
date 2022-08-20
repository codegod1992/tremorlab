import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes } from 'lib/primitives';
import { badgeProportions, iconSizes } from './styles';
import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import colorTheme from 'lib/colorTheme';
import { spacing } from 'lib/spacing';

export interface BadgeProps {
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
}: BadgeProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
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
                            spacing.xs.marginRight,
                            spacing.threeXs.negativeMarginLeft,
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
