import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import {
    BaseColors,
    Sizes,
    classNames,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    isValidSize,
    spacing,
} from 'lib';
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
    const badgeSize = isValidSize(size) ? size : Sizes.SM;
    return(
        <div className={ classNames(marginTop) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span className={ classNames(
                    'flex-shrink-0 inline-flex justify-center items-center rounded-full',
                    getColorVariantsFromColorThemeValue(getColorTheme(color).text).textColor,
                    getColorVariantsFromColorThemeValue(getColorTheme(color).lightBackground).bgColor,
                    badgeProportions[badgeSize].paddingLeft,
                    badgeProportions[badgeSize].paddingRight,
                    badgeProportions[badgeSize].paddingTop,
                    badgeProportions[badgeSize].paddingBottom,
                    badgeProportions[badgeSize].fontSize,
                ) }>
                    { Icon ? (
                        <Icon className={ classNames(
                            spacing.twoXs.negativeMarginLeft,
                            spacing.xs.marginRight,
                            iconSizes[badgeSize].height,
                            iconSizes[badgeSize].width,
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
