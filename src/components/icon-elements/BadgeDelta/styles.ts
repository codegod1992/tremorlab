import { BaseColors, DeltaTypes } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classnameUtils';

import { ArrowDownIcon, ArrowDownRightIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpRightIcon } from 'assets';

export type BadgeProportionTypes = {
    paddingX: string,
    paddingY: string,
    textSize: string,
}

export const badgeProportionsIconOnly: {[char: string]: BadgeProportionTypes} = {
    xs: {
        paddingX: 'px-1.5',
        paddingY: 'py-0.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-2',
        paddingY: 'py-1',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-2',
        paddingY: 'py-1',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-2',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

export type IconProportionTypes = {
    margin?: string,
    iconSize: string,
}

export const iconProportionsIconOnly: {[char: string]: IconProportionTypes} = {
    xs: {
        margin: '',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: '',
        iconSize: 'w-6 h-6',
    },
};

export const badgeProportionsWithText: {[char: string]: BadgeProportionTypes} = {
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

export const iconProportionsWithText: {[char: string]: IconProportionTypes} = {
    xs: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
    lg: {
        margin: '-ml-0.5 mr-0.5',
        iconSize: 'w-4 h-4',
    },
};

export type ColorTypes = {
    bgColor: string,
    textColor: string,
}

export const colors: {[key: string]: ColorTypes} = {
    [DeltaTypes.Increase]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    },
    [DeltaTypes.ModerateIncrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    },
    [DeltaTypes.Decrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    },
    [DeltaTypes.ModerateDecrease]: {
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    },
    [DeltaTypes.Unchanged]: { 
        bgColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
        textColor: getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).textColor,
    },
};

export const deltaIcons: {[key: string]: React.ElementType} = {
    [DeltaTypes.Increase]: ArrowUpIcon,
    [DeltaTypes.ModerateIncrease]: ArrowUpRightIcon,
    [DeltaTypes.Decrease]: ArrowDownIcon,
    [DeltaTypes.ModerateDecrease]: ArrowDownRightIcon,
    [DeltaTypes.Unchanged]: ArrowRightIcon,
};
