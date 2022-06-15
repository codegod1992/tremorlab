import { ButtonProportionTypes, IconProportionTypes } from '@common/common-types';

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    sm: {
        paddingX: 'px-3',
        paddingY: 'py-1.5',
        textSize: 'text-xs',
    },
    md: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-sm',
    },
};

export const iconProportions: {[size: string]: IconProportionTypes} = {
    sm: {
        margin: 'mr-1.5',
        iconSize: 'h-4 w-4',
    },
    md: {
        margin: 'mr-2',
        iconSize: 'w-5 h-5',
    },
};
