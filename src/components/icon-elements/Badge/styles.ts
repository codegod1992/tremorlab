
import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type ProportionTypes = {
    paddingX: string,
    paddingY: string,
    textSize: string,
}

export const proportionsTextOnly: {[char: string]: ProportionTypes} = {
    xs: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2.5',
        paddingY: 'py-0.5',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-3',
        paddingY: 'py-1',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-3.5',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

export const proportionsWithIcon: {[char: string]: ProportionTypes} = {
    xs: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2.5',
        paddingY: 'py-0.5',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-3',
        paddingY: 'py-0.5',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-3',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

export type IconProportionTypes = {
    margin: string,
    iconSize: string,
}

export const iconProportions: {[char: string]: IconProportionTypes} = {
    xs: {
        margin: 'mr-1',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-0.5 mr-1',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-4 h-4',
    },
    lg: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-5 h-5',
    },
};

export const colors: {[baseColor: string]: {textColor: string, bgColor: string}} = {
    'slate': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].lightBackground).bgColor,
    },
    'gray': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].lightBackground).bgColor,
    },
    'zinc': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].lightBackground).bgColor,
    },
    'neutral': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].lightBackground).bgColor,
    },
    'stone': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].lightBackground).bgColor,
    },
    'red': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].lightBackground).bgColor,
    },
    'orange': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
    },
    'amber': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].lightBackground).bgColor,
    },
    'yellow': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].lightBackground).bgColor,
    },
    'lime': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].lightBackground).bgColor,
    },
    'green': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].lightBackground).bgColor,
    },
    'emerald': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
    },
    'teal': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].lightBackground).bgColor,
    },
    'cyan': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].lightBackground).bgColor,
    },
    'sky': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].lightBackground).bgColor,
    },
    'blue': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].lightBackground).bgColor,
    },
    'indigo': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].lightBackground).bgColor,
    },
    'violet': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].lightBackground).bgColor,
    },
    'purple': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].lightBackground).bgColor,
    },
    'fuchsia': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].lightBackground).bgColor,
    },
    'pink': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].lightBackground).bgColor,
    },
    'rose': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
    }
};
