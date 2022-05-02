import { BadgeProportionTypes, IconProportionTypes } from '@common/common-types';

export const badgeProportions: {[char: string]: BadgeProportionTypes} = {
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

export const iconProportions: {[char: string]: IconProportionTypes} = {
    xs: {
        margin: 'ml-0.5 mr-1.5',
        iconSize: 'w-2 h-2',
    },
    sm: {
        margin: 'mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
    md: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
    lg: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-2.5 h-2.5',
    },
};
