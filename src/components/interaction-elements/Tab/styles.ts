import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type ColorTypes = {
    textColor: string,
    borderColor: string,
}

export const colors: {[baseColor: string]: ColorTypes} = {
    'slate': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkBorder).borderColor,
    },
    'gray': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkBorder).borderColor,
    },
    'zinc': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkBorder).borderColor,
    },
    'neutral': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkBorder).borderColor,
    },
    'stone': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkBorder).borderColor,
    },
    'red': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkBorder).borderColor,
    },
    'orange': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkBorder).borderColor,
    },
    'amber': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkBorder).borderColor,
    },
    'yellow': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkBorder).borderColor,
    },
    'lime': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkBorder).borderColor,
    },
    'green': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkBorder).borderColor,
    },
    'emerald': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkBorder).borderColor,
    },
    'teal': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkBorder).borderColor,
    },
    'cyan': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkBorder).borderColor,
    },
    'sky': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkBorder).borderColor,
    },
    'blue': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkBorder).borderColor,
    },
    'indigo': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkBorder).borderColor,
    },
    'violet': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkBorder).borderColor,
    },
    'purple': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkBorder).borderColor,
    },
    'fuchsia': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkBorder).borderColor,
    },
    'pink': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkBorder).borderColor,
    },
    'rose': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkBorder).borderColor,
    }
};
