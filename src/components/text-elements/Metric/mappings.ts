import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type MetricColorTypes = {
    textColor: string,
}

export const colors: {[baseColor: string]: MetricColorTypes} = {
    'slate': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkText).textColor,
    },
    'gray': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkText).textColor,
    },
    'zinc': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkText).textColor,
    },
    'neutral': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkText).textColor,
    },
    'stone': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkText).textColor,
    },
    'red': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkText).textColor,
    },
    'orange': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).textColor,
    },
    'amber': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkText).textColor,
    },
    'yellow': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkText).textColor,
    },
    'lime': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkText).textColor,
    },
    'green': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkText).textColor,
    },
    'emerald': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    },
    'teal': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkText).textColor,
    },
    'cyan': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkText).textColor,
    },
    'sky': {
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkText).textColor,
    },
    'blue': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkText).textColor,
    },
    'indigo': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkText).textColor,
    },
    'violet': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkText).textColor,
    },
    'purple': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkText).textColor,
    },
    'fuchsia': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkText).textColor,
    },
    'pink': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkText).textColor,
    },
    'rose': { 
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    }
};
