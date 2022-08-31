import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes, classNames, isBaseColor, isValidSize } from 'lib';
import { Color, MarginTop, Size } from '../../../lib';
import { colors, iconSizes, shape, wrapperProportions } from './styles';

export const IconVariants = {
    Simple: 'simple',
    Light: 'light',
    Shadow: 'shadow',
    Solid: 'solid',
    Outlined: 'outlined'
};

export interface IconProps {
    Icon: React.ElementType,
    variant?: string,
    tooltip?: string,
    size?: Size,
    color?: Color,
    marginTop?: MarginTop,
}

const Icon = ({
    Icon,
    variant = IconVariants.Simple,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop = 'mt-0',
}: IconProps) => {
    const iconColors = isBaseColor(color) ? colors[variant][color] : colors[variant][BaseColors.Blue];
    const iconSize = isValidSize(size) ? size : Sizes.SM;
    return (
        <span className={ classNames(marginTop) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <span
                    className={ classNames(
                        'inline-flex flex-shrink-0 items-center',
                        iconColors.bgColor,
                        iconColors.textColor,
                        iconColors.borderColor,
                        iconColors.ringColor,
                        shape[variant].rounded,
                        shape[variant].border,
                        shape[variant].shadow,
                        shape[variant].ring,
                        wrapperProportions[iconSize].paddingLeft,
                        wrapperProportions[iconSize].paddingRight,
                        wrapperProportions[iconSize].paddingTop,
                        wrapperProportions[iconSize].paddingBottom,
                    ) }
                >
                    <Icon className={ classNames(
                        iconSizes[iconSize].height,
                        iconSizes[iconSize].width,
                    ) } />
                </span>
            </Tooltip>
        </span>
    );
};

export default Icon;
