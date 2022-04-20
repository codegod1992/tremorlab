interface StringJoiner {
    (...classes: string[]): string
}

interface TailwindClassParser {
    (twClassName: string): string
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

export const parseShadowClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('shadow') ? twClassName : '';
};

export const parseRoundedCornersClassNames: TailwindClassParser = (twClassName) => {
    if (twClassName===undefined) return '';
    return twClassName.startsWith('rounded') ? twClassName : '';
};
