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

export const toBorderColorClass: TailwindClassConverter = (twClassName: string): string => {
    const classNameParts = twClassName.split('-').splice(1);
    classNameParts.unshift('border');
    return classNameParts.join('-');
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

export const parseWidthClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('w-') ? twClassName.split(' ')[0] : '';
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
    return twClassName.startsWith('space-x-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('px-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('py-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingLeftClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('pl-') ? twClassName.split(' ')[0] : '';
};

export const parsePaddingRightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('pr-') ? twClassName.split(' ')[0] : '';
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

export const parseMarginTopClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('mt-') ? twClassName.split(' ')[0] : '';
};

export const parseGapXClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('gap-x-') ? twClassName.split(' ')[0] : '';
};

export const parseGapYClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('gap-y-') ? twClassName.split(' ')[0] : '';
};

export const parseColSpanClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    if (twClassName==='col-auto') return twClassName;
    return twClassName.startsWith('col-span-') ? twClassName.split(' ')[0] : 'col-auto';
};

export const parseColStartClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('col-start-') ? twClassName.split(' ')[0] : '';
};

export const parseColEndClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('col-end-') ? twClassName.split(' ')[0] : '';
};

export const parseFixedHeightClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return (
        twClassName.startsWith('h-') && stringEndsWithNumber(twClassName)
            ? twClassName.split(' ')[0]
            : ''
    );
};
