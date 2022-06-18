import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

export const deltaBgColors: {[key: string]: string} = {
    'increase': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor,
    'moderateIncrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].background).bgColor,
    'decrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor,
    'moderateDecrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].background).bgColor,
    'unchanged': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].background).bgColor,
};
