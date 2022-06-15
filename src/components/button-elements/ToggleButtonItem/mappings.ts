import { ButtonProportionTypes, IconProportionTypes } from '@common/common-types';

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    sm: {
        paddingX: 'px-1.5',
        paddingY: 'py-1',
        textSize: 'text-xs',
    },
    md: {
        paddingX: 'px-3',
        paddingY: 'py-1.5',
        textSize: 'text-sm',
    },
};

export const iconProportions: {[size: string]: IconProportionTypes} = {
    sm: {
        margin: 'mr-1',
        iconSize: 'h-4 w-4',
    },
    md: {
        margin: 'mr-2',
        iconSize: 'w-5 h-5',
    },
};
