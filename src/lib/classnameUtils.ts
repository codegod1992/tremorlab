import { ColorTypes, colorVariantMapping } from './colorVariantMapping';
import {
    TwHeight,
    TwMarginTop,
    TwPaddinLeft,
    TwPaddinRight,
    TwPaddingBottom,
    TwPaddingTop,
    TwWidth
} from './inputTypes';
import { stringIsNumeric } from 'lib/utils';
import { twColorsHex } from 'lib/colors';
import { twUnits } from 'lib/twUnits';

interface StringJoiner {
    (...classes: (string)[]): string
}

interface TailwindClassParser {
    (twClassName: string|undefined): string
}

interface TailwindClassConverter {
    (twClassName: string): string
}

interface BoolClassParser {
    (twClassName: boolean): string
}

export const classNames: StringJoiner = (
    ...classes: string[]
): string => {
    return classes.filter(Boolean).join(' ');
};

export const getPixelsFromTwClassName = (
    twClassName: TwMarginTop | TwPaddinLeft | TwPaddinRight | TwPaddingTop | TwPaddingBottom | TwHeight | TwWidth
): number => {
    const classNameParts = twClassName.split('-');
    if (classNameParts.length !== 2) throw 'Invalid input value. Please provide a valid Tailwind Class Name.';

    const tailwindUnit = classNameParts[1];
    if (!stringIsNumeric(tailwindUnit) && twUnits.has(Number(tailwindUnit))) {
        throw 'Invalid input value. Please provide a Tailwind Class Name with a defined absolute size';
    }

    return Number(tailwindUnit) * 4;
};

export const getColorVariantsFromTwClassName = (twClassName: string): ColorTypes => {
    if (!twClassName) {
        return (
            {
                bgColor: '',
                hoverBgColor: '',
                textColor: '',
                hoverTextColor: '',
                borderColor: '',
                hoverBorderColor: '',
                ringRolor: '',
                hoverRingColor: '',
                divideColor: '',
                outlineColor: '',
                focusRingColor: '',
            }
        );
    }
    const classNameParts = twClassName.split('-');
    const baseColor = classNameParts[1];
    const colorValue = classNameParts[2] ? classNameParts[2] : 'none';
    const colorVariants = colorVariantMapping[baseColor][colorValue];
    return colorVariants;
};

export const getColorVariantsFromColorThemeValue = (colorThemeValue: string): ColorTypes => {
    const colorThemeValueParts = colorThemeValue.split('-');

    if (!colorThemeValue || colorThemeValueParts.length != 2) {
        return (
            {
                bgColor: '',
                hoverBgColor: '',
                textColor: '',
                hoverTextColor: '',
                borderColor: '',
                hoverBorderColor: '',
                ringRolor: '',
                hoverRingColor: '',
                divideColor: '',
                outlineColor: '',
                focusRingColor: '',
            }
        );
    }
    const baseColor = colorThemeValueParts[0];
    const colorValue = colorThemeValueParts[1];
    const colorVariants = colorVariantMapping[baseColor][colorValue];
    return colorVariants;
};

export const getHexFromColorThemeValue = (colorThemeValue: string): string => {
    const colorThemeValueParts = colorThemeValue.split('-');
    if (!colorThemeValue || colorThemeValueParts.length != 2) return '';
    const baseColor = colorThemeValueParts[0];
    // Currenlty only 500 is supported
    const hexValue = twColorsHex[baseColor][500];
    return hexValue;
};

export const toBorderColorClass: TailwindClassConverter = (twClassName: string): string => {
    const colorTypes = getColorVariantsFromTwClassName(twClassName);
    return colorTypes.borderColor;
};

export const parseMaxWidthClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('max-w-') ? twClassName.split(' ')[0] : '';
};

export const parseMaxHeightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('max-h-') ? twClassName.split(' ')[0] : '';
};

export const parseAlignItemsClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('items-') ? twClassName.split(' ')[0] : '';
};

export const parseSpaceXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('space-x-') || twClassName.startsWith('-space-x-') ? twClassName.split(' ')[0] : '';
};

export const parseTruncateOption: BoolClassParser = (option) => {
    return option===true ? 'truncate' : '';
};

export const parseHFullOption: BoolClassParser = (option) => {
    return option===true ? 'h-full' : '';
};

export const parseWFullOption: BoolClassParser = (option) => {
    return option===true ? 'w-full' : '';
};
