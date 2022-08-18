import { BaseColors, DeltaTypes } from 'lib/primitives';
import colorTheme from 'lib/colorTheme';
import { getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';

export type ColorTypes = {
    bgColor: string,
}

export const colors: {[key: string]: ColorTypes} = {
    [DeltaTypes.Increase]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor
    },
    [DeltaTypes.ModerateIncrease]: { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor
    },
    [DeltaTypes.Decrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor
    },
    [DeltaTypes.ModerateDecrease]: { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor
    },
    [DeltaTypes.Unchanged]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].background).bgColor
    },
};
