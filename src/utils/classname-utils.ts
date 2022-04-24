interface StringJoiner {
    (...classes: string[]): string
}

interface TailwindClassParser {
    (twClassName: string|undefined): string
}

interface BoolClassParser {
    (twClassName: boolean): string
}

export const classNames: StringJoiner = (
    ...classes: string[]
): string => {
    return classes.filter(Boolean).join(' ');
};

export const parseBgClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('bg-') ? twClassName : '';
};

export const parseTextColorClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('text-') ? twClassName : '';
};

export const parseTextAlignmentClassNames: TailwindClassParser = (twClassName) => {
    const validClassNames = new Set<string>([
        'text-left', 'text-center', 'text-right', 'text-justify'
    ]);
    if (twClassName===undefined) return '';
    return (validClassNames.has(twClassName)) ? twClassName : '';
};

export const parseMaxWidthClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('max-w-') ? twClassName : '';
};

export const parseWidthClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('w-') ? twClassName : '';
};

export const parseBorderClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('border') ? twClassName : '';
};

export const parseBorderLeftClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('border-l') ? twClassName : '';
};

export const parseBorderBottomClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('border-b') ? twClassName : '';
};

export const parseShadowClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('shadow') ? twClassName : '';
};

export const parseRoundedCornersClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('rounded') ? twClassName : '';
};

export const parseJustifyContentClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('justify-') ? twClassName : '';
};

export const parseAlignItemsClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('items-') ? twClassName : '';
};

export const parseSpaceXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('space-x-') ? twClassName : '';
};

export const parsePaddingXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('px-') ? twClassName : '';
};

export const parsePaddingYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('py-') ? twClassName : '';
};

export const parsePaddingLeftClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('pl-') ? twClassName : '';
};

export const parsePaddingRightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('pr-') ? twClassName : '';
};

export const parseDivideYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('divide-y') ? twClassName : '';
};

export const parseDivideColorClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('divide-') ? twClassName : '';
};

export const parseTruncateOption: BoolClassParser = (option) => {
    return option===true ? 'truncate' : '';
};

export const stringIsNumeric = (str: string|undefined): boolean => {
    return !isNaN(Number(str)) && (str!==undefined);
};

export const stringEndsWithNumber = (str: string): boolean => {
    return stringIsNumeric(str.split('-').pop());
};

export const parseFixedHeightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return (
        twClassName.startsWith('h-') && stringEndsWithNumber(twClassName)
            ? twClassName
            : ''
    );
};
