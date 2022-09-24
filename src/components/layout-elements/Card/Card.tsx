import React from 'react';

import { BaseColors, HorizontalPositions, VerticalPositions } from 'lib/primitives';
import { Color, HorizontalPosition, MarginTop, MaxWidth, VerticalPosition } from '../../../lib';
import {
    classNames,
    defaultColors,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    parseMarginTop,
    parseMaxWidth,
    spacing,
} from 'lib';

const parseDecorationAlignment = (decorationAlignment: string) => {
    if (!decorationAlignment) return '';
    switch(decorationAlignment) {
    case HorizontalPositions.Left:
        return 'border-l-4';
    case VerticalPositions.Top:
        return 'border-t-4';
    case HorizontalPositions.Right:
        return 'border-r-4';
    case VerticalPositions.Bottom:
        return 'border-b-4';
    default:
        return '';
    }
};

export interface CardProps {
    hFull?: boolean,
    maxWidth?: MaxWidth,
    shadow?: boolean,
    decoration?: HorizontalPosition | VerticalPosition | '',
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
            parseMarginTop(marginTop),
            parseHFullOption(hFull),
            parseMaxWidth(maxWidth),
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            shadow ? 'shadow' : '',
            getColorVariantsFromColorThemeValue(getColorTheme(decorationColor).border).borderColor,
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
