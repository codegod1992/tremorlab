
import { BadgeProportionTypes, IconProportionTypes } from '@common/common-types';

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
