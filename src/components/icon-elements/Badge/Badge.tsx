import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes } from 'lib/primitives';
import { badgeProportionsTextOnly, badgeProportionsWithIcon, iconProportions } from './styles';
import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import colorTheme from 'lib/colorTheme';

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
    const badgeProportions = Icon ? badgeProportionsWithIcon : badgeProportionsTextOnly;
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span className={ classNames(
                    'flex-shrink-0 inline-flex justify-center items-center rounded-full',
                    getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
                    getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor,
                    badgeProportions[size]?.paddingX,
                    badgeProportions[size]?.paddingY,
                    badgeProportions[size]?.textSize,
                ) }>
                    { Icon ? (
                        <Icon className={ classNames(
                            iconProportions[size]?.margin || '',
                            iconProportions[size]?.iconSize,
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
