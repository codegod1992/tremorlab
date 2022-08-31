import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes, classNames, isBaseColor, isValidSize } from 'lib';
import { Color, IconVariant, MarginTop, Size } from '../../../lib';
import { colors, iconSizes, shape, wrapperProportions } from './styles';

export const IconVariants: {[key: string]: IconVariant} = {
    Simple: 'simple',
    Light: 'light',
    Shadow: 'shadow',
    Solid: 'solid',
    Outlined: 'outlined'
};

const isValidIconVariant = (iconVariant: IconVariant): boolean => {
    return Object.values(IconVariants).includes(iconVariant);
};

export interface IconProps {
    Icon: React.ElementType,
    variant?: IconVariant,
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
    const iconSize = isValidSize(size) ? size : Sizes.SM;
    const iconVariant = isValidIconVariant(variant) ? variant : IconVariants.Simple;
    const iconColors = isBaseColor(color) ? colors[iconVariant][color] : colors[iconVariant][BaseColors.Blue];

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
                        shape[iconVariant].rounded,
                        shape[iconVariant].border,
                        shape[iconVariant].shadow,
                        shape[iconVariant].ring,
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
