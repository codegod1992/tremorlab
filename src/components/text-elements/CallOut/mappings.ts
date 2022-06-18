import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export interface CalloutColors {
    headerTextColor: string,
    bodyTextColor: string,
    bgColor: string,
    borderColor: string,
}

export const colors: {[baseColor: string]: CalloutColors} = {
    'slate': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Slate].border).borderColor,
    },
    'gray': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Gray].border).borderColor,
    },
    'zinc': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Zinc].border).borderColor,
    },
    'neutral': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Neutral].border).borderColor,
    },
    'stone': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Stone].border).borderColor,
    },
    'red': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Red].border).borderColor,
    },
    'orange': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].border).borderColor,
    },
    'amber': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Amber].border).borderColor,
    },
    'yellow': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Yellow].border).borderColor,
    },
    'lime': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Lime].border).borderColor,
    },
    'green': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Green].border).borderColor,
    },
    'emerald': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].border).borderColor,
    },
    'teal': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Teal].border).borderColor,
    },
    'cyan': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Cyan].border).borderColor,
    },
    'sky': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Sky].border).borderColor,
    },
    'blue': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Blue].border).borderColor,
    },
    'indigo': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Indigo].border).borderColor,
    },
    'violet': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Violet].border).borderColor,
    },
    'purple': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Purple].border).borderColor,
    },
    'fuchsia': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Fuchsia].border).borderColor,
    },
    'pink': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Pink].border).borderColor,
    },
    'rose': { 
        headerTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
        bodyTextColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].text).textColor,
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].canvasBackground).bgColor,
        borderColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].border).borderColor,
    }
};
