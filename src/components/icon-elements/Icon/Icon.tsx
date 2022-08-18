import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes } from 'lib/primitives';
import { classNames, parseMarginTopClassNames } from 'lib/classnameUtils';
import { colors, proportions, shape } from './styles';

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
    color?: string,
    marginTop?: string,
}

const Icon = ({
    Icon,
    variant = IconVariants.Simple,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop,
}: IconProps) => (
    <span className={ classNames(parseMarginTopClassNames(marginTop)) }>
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
                    proportions[size].paddingX,
                    proportions[size].paddingY,
                ) }
            >
                <Icon className={ classNames( proportions[size].iconSize ) } />
            </span>
        </Tooltip>
    </span>
);

export default Icon;
