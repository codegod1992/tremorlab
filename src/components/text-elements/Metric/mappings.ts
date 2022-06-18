import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type MetricColorTypes = {
    textColor: string,
}

export const colors: {[baseColor: string]: MetricColorTypes} = {
    'slate': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
    },
    'gray': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
    },
    'zinc': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
    },
    'neutral': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
    },
    'stone': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
    },
    'red': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
    },
    'orange': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
    },
    'amber': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
    },
    'yellow': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
    },
    'lime': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
    },
    'green': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
    },
    'emerald': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
    },
    'teal': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
    },
    'cyan': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
    },
    'sky': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
    },
    'blue': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
    },
    'indigo': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
    },
    'violet': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
    },
    'purple': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
    },
    'fuchsia': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
    },
    'pink': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
    },
    'rose': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
    }
};
