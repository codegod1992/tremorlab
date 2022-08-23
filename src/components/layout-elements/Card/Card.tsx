import React from 'react';

import { BaseColors, HorizontalPositions, VerticalPositions } from 'lib/primitives';
import {
    classNames,
    getColorVariantsFromColorThemeValue,
    parseHFullOption,
    parseMaxWidthClassNames,
} from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colors';
import { TwMarginTop } from 'lib/inputTypes';
import { spacing } from 'lib/spacing';

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
    maxWidth?: string,
    shadow?: boolean,
    decoration?: string,
    decorationColor?: string,
    marginTop?: TwMarginTop,
    children: React.ReactNode
}

const Card = ({
    hFull = false,
    maxWidth = '',
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
            parseMaxWidthClassNames(maxWidth),
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
