import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, SizeTypes, classNames } from 'lib';
import { Color, MarginTop } from '../../../lib';
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
    size?: string,
    color?: Color,
    marginTop?: MarginTop,
}

const Icon = ({
    Icon,
    variant = IconVariants.Simple,
    tooltip,
    size = SizeTypes.SM,
    color = BaseColors.Blue,
    marginTop = 'mt-0',
}: IconProps) => (
    <span className={ classNames(marginTop) }>
        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
            <span
                className={ classNames(
                    'inline-flex flex-shrink-0 items-center',
                    colors[variant][color].bgColor,
                    colors[variant][color].textColor,
                    colors[variant][color].borderColor,
                    colors[variant][color].ringColor,
                    shape[variant].rounded,
                    shape[variant].border,
                    shape[variant].shadow,
                    shape[variant].ring,
                    wrapperProportions[size].paddingLeft,
                    wrapperProportions[size].paddingRight,
                    wrapperProportions[size].paddingTop,
                    wrapperProportions[size].paddingBottom,
                ) }
            >
                <Icon className={ classNames(
                    iconSizes[size].height,
                    iconSizes[size].width,
                ) } />
            </span>
        </Tooltip>
    </span>
);

export default Icon;
