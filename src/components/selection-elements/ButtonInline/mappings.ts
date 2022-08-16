import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes, IconProportionTypes } from '@common/common-types';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import { BaseColors } from '@utils/objects';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    xs: {
        paddingX: '',
        paddingY: '',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: '',
        paddingY: '',
        textSize: 'text-sm',
    },
    md: {
        paddingX: '',
        paddingY: '',
        textSize: 'text-base',
    },
    lg: {
        paddingX: '',
        paddingY: '',
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

export const buttonShape: ButtonShapeTypes = {
    rounded: '',
    border: '',
    shadow: ''
};

export const buttonColors: {[baseColor: string]: ButtonColorTypes} = {
    'slate': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'gray': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'zinc': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'neutral': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'stone': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'red': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'orange': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'amber': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'yellow': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'lime': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'green': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'emerald': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'teal': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'cyan': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'sky': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'blue': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'indigo': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'violet': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'purple': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'fuchsia': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'pink': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    },
    'rose': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
        hoverTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).hoverTextColor,
        bgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
        hoverBgColor: getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: '',
    }
};
