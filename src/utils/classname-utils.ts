import { ColorTypes, colorVariantMapping } from './colorVariantMapping';

interface StringJoiner {
    (...classes: string[]): string
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

export const stringIsNumeric = (str: string|undefined): boolean => {
    return !isNaN(Number(str)) && (str!==undefined);
};

export const stringEndsWithNumber = (str: string): boolean => {
    return stringIsNumeric(str.split('-').pop());
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
    const baseColor = colorThemeValueParts[0];
    const colorValue = colorThemeValueParts[1];
    const colorVariants = colorVariantMapping[baseColor][colorValue];
    return colorVariants;
};

export const toBorderColorClass: TailwindClassConverter = (twClassName: string): string => {
    const colorTypes = getColorVariantsFromTwClassName(twClassName);
    return colorTypes.borderColor;
};

export const parseBgClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('bg-') ? twClassName.split(' ')[0] : '';
};

export const parseTextColorClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('text-') ? twClassName.split(' ')[0] : '';
};

export const parseTextAlignmentClassNames: TailwindClassParser = (twClassName) => {
    const validClassNames = new Set<string>([
        'text-left', 'text-center', 'text-right', 'text-justify'
    ]);
    if (twClassName===undefined) return '';
    return (validClassNames.has(twClassName)) ? twClassName.split(' ')[0] : '';
};

export const parseMaxWidthClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('max-w-') ? twClassName.split(' ')[0] : '';
};

export const parseMaxHeightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('max-h-') ? twClassName.split(' ')[0] : '';
};

export const parseWidthClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('w-') ? twClassName.split(' ')[0] : '';
};

export const parseHeightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('h-') ? twClassName.split(' ')[0] : '';
};

export const parseBorderClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('border') ? twClassName.split(' ')[0] : '';
};

export const parseBorderLeftClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('border-l') ? twClassName.split(' ')[0] : '';
};

export const parseBorderBottomClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('border-b') ? twClassName.split(' ')[0] : '';
};

export const parseShadowClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('shadow') ? twClassName.split(' ')[0] : '';
};

export const parseRoundedCornersClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('rounded') ? twClassName.split(' ')[0] : '';
};

export const parseJustifyContentClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('justify-') ? twClassName.split(' ')[0] : '';
};

export const parseAlignItemsClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('items-') ? twClassName.split(' ')[0] : '';
};

export const parseSpaceXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('space-x-') || twClassName.startsWith('-space-x-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('px-') || twClassName.startsWith('-px-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('py-') || twClassName.startsWith('-py-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingLeftClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('pl-') || twClassName.startsWith('-pl-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingRightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('pr-') || twClassName.startsWith('-pr-') ? twClassName.split(' ')[0] : '';
};

export const parseDivideYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('divide-y') ? twClassName.split(' ')[0] : '';
};

export const parseDivideColorClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('divide-') ? twClassName.split(' ')[0] : '';
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

export const parseMarginTopClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('mt-') || twClassName.startsWith('-mt-') ? twClassName.split(' ')[0] : '';
};

export const parseMarginYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('my-') || twClassName.startsWith('-my-') ? twClassName.split(' ')[0] : '';
};

export const parseMarginXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('mx-') || twClassName.startsWith('-mx-') ? twClassName.split(' ')[0] : '';
};

export const parseGapXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('gap-x-') || twClassName.startsWith('-gap-x') ? twClassName.split(' ')[0] : '';
};

export const parseGapYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('gap-y-') || twClassName.startsWith('-gap-y-') ? twClassName.split(' ')[0] : '';
};

export const parseColSpanClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    if (twClassName==='col-auto') return twClassName;
    return twClassName.startsWith('col-span-') ? twClassName.split(' ')[0] : '';
};

export const parseColStartClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('col-start-') ? twClassName.split(' ')[0] : '';
};

export const parseColEndClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('col-end-') ? twClassName.split(' ')[0] : '';
};

export const parseRowSpanClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    if (twClassName==='row-auto') return twClassName;
    return twClassName.startsWith('row-span-') ? twClassName.split(' ')[0] : '';
};

export const parseRowStartClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('row-start-') ? twClassName.split(' ')[0] : '';
};

export const parseRowEndClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('row-end-') ? twClassName.split(' ')[0] : '';
};

export const parseFixedHeightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return (
        twClassName.startsWith('h-') && stringEndsWithNumber(twClassName)
            ? twClassName.split(' ')[0]
            : ''
    );
};
