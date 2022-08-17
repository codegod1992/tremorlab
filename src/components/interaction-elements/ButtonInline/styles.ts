import { IconProportionTypes } from '@common/common-types';

export type ButtonProportionTypes = {
    textSize: string,
}

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    xs: {
        textSize: 'text-xs',
    },
    sm: {
        textSize: 'text-sm',
    },
    md: {
        textSize: 'text-base',
    },
    lg: {
        textSize: 'text-lg',
    },
};

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
