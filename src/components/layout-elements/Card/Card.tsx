import React from 'react';

import { BaseColors, HorizontalPositionTypes, VerticalPositionTypes } from 'lib/primitives';
import { Color, MarginTop, MaxWidth } from '../../../lib';
import {
    classNames,
    colorTheme,
    defaultColors,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    spacing,
} from 'lib';

const parseDecorationAlignment = (decorationAlignment: string) => {
    if (!decorationAlignment) return '';
    switch(decorationAlignment) {
    case HorizontalPositionTypes.Left:
        return 'border-l-4';
    case VerticalPositionTypes.Top:
        return 'border-t-4';
    case HorizontalPositionTypes.Right:
        return 'border-r-4';
    case VerticalPositionTypes.Bottom:
        return 'border-b-4';
    default:
        return '';
    }
};

export interface CardProps {
    hFull?: boolean,
    maxWidth?: MaxWidth,
    shadow?: boolean,
    decoration?: string,
    decorationColor?: Color,
    marginTop?: MarginTop,
    children: React.ReactNode
}

const Card = ({
    hFull = false,
    maxWidth = 'max-w-none',
    shadow = true,
    decoration = '',
    decorationColor = BaseColors.Blue,
    marginTop = 'mt-0',
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            'relative w-full mx-auto text-left rounded-lg ring-1',
            marginTop,
            parseHFullOption(hFull),
            maxWidth,
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            shadow ? 'shadow' : '',
            getColorVariantsFromColorThemeValue(colorTheme[decorationColor].border).borderColor,
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).ringRolor,
            parseDecorationAlignment(decoration),
            spacing.threeXl.paddingLeft,
            spacing.threeXl.paddingRight,
            spacing.threeXl.paddingTop,
            spacing.threeXl.paddingBottom,
        ) }
        >
            { children }
        </div>
    );
};

export default Card;
