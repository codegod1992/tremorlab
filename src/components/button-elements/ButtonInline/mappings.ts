import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes } from '@utils/component-utils';

export const buttonProportions: {[char: string]: ButtonProportionTypes} = {
    xs: {
        paddingX: 'px-2.5',
        paddingY: 'py-1.5',
        textSize: 'text-xs',
    },
    sm: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-sm',
    },
    md: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-base',
    },
    lg: {
        paddingX: 'px-4',
        paddingY: 'py-2.5',
        textSize: 'text-lg',
    },
};

export const buttonShape: ButtonShapeTypes = {
    rounded: 'rounded-lg',
    border: '',
    shadow: ''
};

export const buttonColors: {[baseColor: string]: ButtonColorTypes} = {
    'blue': {
        textColor: 'text-blue-600',
        hoverTextColor: 'text-blue-700',
        bgColor: 'bg-transparent',
        hoverBgColor: 'bg-transparent',
        borderColor: '',
        hoverBorderColor: '',
        focusRingColor: 'ring-blue-500'
    }
};
