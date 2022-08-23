export type Sizing = {
    height: string,
    width: string,
}

export const sizing = {
    threeXs: {
        height: 'h-0.5',
        width: 'w-0.5',
    },
    twoXs: {
        height: 'h-1',
        width: 'w-1',
    },
    xs: {
        height: 'h-2',
        width: 'w-2',
    },
    sm: {
        height: 'h-3',
        width: 'w-3',
    },
    md: {
        height: 'h-4',
        width: 'w-4',
    },
    lg: {
        height: 'h-5',
        width: 'w-5',
    },
    xl: {
        height: 'h-6',
        width: 'w-6',
    },
    twoXl: {
        height: 'h-7',
        width: 'w-7',
    },
    threeXl: {
        height: 'h-9',
        width: 'w-9',
    },
};

export const twHeights = [
    'h-0',
    'h-0.5',
    'h-1',
    'h-1.5',
    'h-2',
    'h-2.5',
    'h-3',
    'h-3.5',
    'h-4',
    'h-5',
    'h-6',
    'h-7',
    'h-8',
    'h-9',
    'h-10',
    'h-11',
    'h-12',
    'h-14',
    'h-16',
    'h-20',
    'h-24',
    'h-28',
    'h-32',
    'h-36',
    'h-40',
    'h-44',
    'h-48',
    'h-52',
    'h-56',
    'h-60',
    'h-64',
    'h-72',
    'h-80',
    'h-96',
] as const;

export type TwHeight = typeof twHeights[number];

export const twWidths = [
    'w-0',
    'w-0.5',
    'w-1',
    'w-1.5',
    'w-2',
    'w-2.5',
    'w-3',
    'w-3.5',
    'w-4',
    'w-5',
    'w-6',
    'w-7',
    'w-8',
    'w-9',
    'w-10',
    'w-11',
    'w-12',
    'w-14',
    'w-16',
    'w-20',
    'w-24',
    'w-28',
    'w-32',
    'w-36',
    'w-40',
    'w-44',
    'w-48',
    'w-52',
    'w-56',
    'w-60',
    'w-64',
    'w-72',
    'w-80',
    'w-96',
] as const;

export type TwWidth = typeof twWidths[number];
