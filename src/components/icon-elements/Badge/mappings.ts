import { BadgeProportions, IconProportionTypes } from '@utils/component-utils';

export const badgeProportionsTextOnly: {[char: string]: BadgeProportions} = {
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
        paddingY: 'py-1',
        textSize: 'text-md',
    },
    lg: {
        paddingX: 'px-3.5',
        paddingY: 'py-0.5',
        textSize: 'text-lg',
    },
};

export const badgeProportionsWithIcon: {[char: string]: BadgeProportions} = {
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
        margin: 'mr-1',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-0.5 mr-1',
        iconSize: 'w-4 h-4',
    },
    md: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-4 h-4',
    },
    lg: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-5 h-5',
    },
};
