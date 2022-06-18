import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type MarkerBarColorTypes = {
    primaryBgColor: string,
    secondaryBgColor: string,
}

export const colors: {[baseColor: string]: MarkerBarColorTypes} = {
    'slate': {
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].lightBackground).bgColor,
    },
    'gray': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].lightBackground).bgColor,
    },
    'zinc': {
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].lightBackground).bgColor,
    },
    'neutral': {
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].lightBackground).bgColor,
    },
    'stone': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].lightBackground).bgColor,
    },
    'red': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].lightBackground).bgColor,
    },
    'orange': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
    },
    'amber': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].lightBackground).bgColor,
    },
    'yellow': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].lightBackground).bgColor,
    },
    'lime': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].lightBackground).bgColor,
    },
    'green': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].lightBackground).bgColor,
    },
    'emerald': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
    },
    'teal': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].lightBackground).bgColor,
    },
    'cyan': {
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].lightBackground).bgColor,
    },
    'sky': {
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].lightBackground).bgColor,
    },
    'blue': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].lightBackground).bgColor,
    },
    'indigo': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].lightBackground).bgColor,
    },
    'violet': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].lightBackground).bgColor,
    },
    'purple': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].lightBackground).bgColor,
    },
    'fuchsia': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].lightBackground).bgColor,
    },
    'pink': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].lightBackground).bgColor,
    },
    'rose': { 
        primaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor,
        secondaryBgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
    }
};
