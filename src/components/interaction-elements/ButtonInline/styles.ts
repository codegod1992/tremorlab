import colorTheme, { defaultColors } from '@utils/colorTheme';
import { BaseColors } from '@utils/objects';
import { IconProportionTypes } from '@common/common-types';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type ButtonProportionTypes = {
    textSize: string,
}

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    xs: {
        textSize: 'text-xs',
    },
    sm: {
        textSize: 'text-sm',
    },
    md: {
        textSize: 'text-base',
    },
    lg: {
        textSize: 'text-lg',
    },
};

export const iconLeftProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: 'mr-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: 'mr-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: 'mr-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: 'mr-1.5',
        iconSize: 'w-6 h-6',
    },
};

export const iconRightProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: 'ml-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: 'ml-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: 'ml-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: 'ml-1.5',
        iconSize: 'w-6 h-6',
    },
};

export type ColorTypes = {
    textColor: string,
    hoverTextColor: string,
    bgColor: string,
    hoverBgColor: string,
}

export const colors: {[baseColor: string]: ColorTypes} = {
    'slate': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'gray': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'zinc': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'neutral': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'stone': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'red': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'orange': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'amber': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'yellow': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'lime': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'green': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'emerald': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'teal': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'cyan': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'sky': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'blue': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'indigo': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'violet': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'purple': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'fuchsia': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'pink': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    },
    'rose': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
    }
};
