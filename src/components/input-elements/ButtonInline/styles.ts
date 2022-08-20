import { fontSize } from 'lib/font';

export type ButtonProportionTypes = {
    fontSize: string,
}

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    xs: {
        fontSize: fontSize.xs,
    },
    sm: {
        fontSize: fontSize.sm,
    },
    md: {
        fontSize: fontSize.md,
    },
    lg: {
        fontSize: fontSize.lg,
    },
};

export type IconProportionTypes = {
    margin?: string,
    iconSize: string,
}

export const iconLeftProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: 'mr-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: 'mr-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: 'mr-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: 'mr-1.5',
        iconSize: 'w-6 h-6',
    },
};

export const iconRightProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: 'ml-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: 'ml-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: 'ml-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: 'ml-1.5',
        iconSize: 'w-6 h-6',
    },
};
