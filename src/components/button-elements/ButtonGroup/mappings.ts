import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export type ButtonGroupColorTypes = {
    bgColor: string,
    textColor: string,
    borderColor: string,
}

export const colors: {[baseColor: string]: ButtonGroupColorTypes} = {
    'slate': {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].border).borderColor,
    },
    'gray': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].border).borderColor,
    },
    'zinc': {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].border).borderColor,
    },
    'neutral': {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].border).borderColor,
    },
    'stone': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].border).borderColor,
    },
    'red': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].border).borderColor,
    },
    'orange': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].border).borderColor,
    },
    'amber': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].border).borderColor,
    },
    'yellow': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].border).borderColor,
    },
    'lime': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].border).borderColor,
    },
    'green': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].border).borderColor,
    },
    'emerald': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].border).borderColor,
    },
    'teal': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].border).borderColor,
    },
    'cyan': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].border).borderColor,
    },
    'sky': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].border).borderColor,
    },
    'blue': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].border).borderColor,
    },
    'indigo': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].border).borderColor,
    },
    'violet': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].border).borderColor,
    },
    'purple': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].border).borderColor,
    },
    'fuchsia': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].border).borderColor,
    },
    'pink': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].border).borderColor,
    },
    'rose': { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].canvasBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].border).borderColor,
    }
};
