import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';
import { getColorVariantsFromColorThemeValue } from '@utils/classname-utils';

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
    margin: string,
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

export const deltaBgColors: {[key: string]: string} = {
    'increase': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
    'moderateIncrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].lightBackground).bgColor,
    'decrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
    'moderateDecrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].lightBackground).bgColor,
    'unchanged': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].lightBackground).bgColor,
};

export const deltaTextColors: {[key: string]: string} = {
    'increase': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    'moderateIncrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Emerald].darkText).textColor,
    'decrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    'moderateDecrease': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Rose].darkText).textColor,
    'unchanged': getColorVariantsFromColorThemeValue(colorTheme[BaseColors.Orange].darkText).textColor,
};

export const deltaIcons: {[key: string]: React.ElementType} = {
    'increase': ArrowUpIcon,
    'moderateIncrease': ArrowUpRightIcon,
    'decrease': ArrowDownIcon,
    'moderateDecrease': ArrowDownRightIcon,
    'unchanged': ArrowRightIcon,
};
