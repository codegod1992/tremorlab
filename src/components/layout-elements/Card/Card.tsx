import React from 'react';

import { BaseColors, HorizontalPositions, VerticalPositions } from 'lib/primitives';
import {
    classNames,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    parseMarginTopClassNames,
    parseMaxWidthClassNames,
} from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colorTheme';
import { spacing } from 'lib/spacing';

export interface CardProps {
    hFull?: boolean,
    maxWidth?: string,
    shadow?: boolean,
    decoration?: string,
    decorationColor?: string,
    marginTop?: string,
    children: React.ReactNode
}

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

const Card = ({
    hFull = false,
    maxWidth = '',
    shadow = true,
    decoration = '',
    decorationColor = BaseColors.Blue,
    marginTop,
    children
}: CardProps) => {
    return(
        <div className={ classNames(
            'relative w-full mx-auto text-left rounded-lg',
            parseMarginTopClassNames(marginTop),
            parseHFullOption(hFull),
            parseMaxWidthClassNames(maxWidth),
            getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
            getColorVariantsFromColorThemeValue(colorTheme[decorationColor].border).borderColor,
            parseDecorationAlignment(decoration),
            shadow ? 'shadow' : '',
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
