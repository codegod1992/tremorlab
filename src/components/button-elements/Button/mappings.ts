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
    border: 'border',
    shadow: 'shadow-sm'
};

export const buttonColors: {[baseColor: string]:  {[importance: string]: ButtonColorTypes}} = {
    'blue': {
        'primary': {
            textColor: 'text-white',
            hoverTextColor: '',
            bgColor: 'bg-blue-600',
            hoverBgColor: 'bg-blue-700',
            borderColor: 'border-transparent',
            hoverBorderColor: 'bg-blue-700',
            focusRingColor:'ring-blue-500'
        },
        'secondary': {
            textColor: 'text-blue-600',
            bgColor: 'bg-transparent',
            hoverBgColor: 'bg-blue-700',
            hoverTextColor: 'text-white',
            borderColor: 'border-blue-600',
            hoverBorderColor: 'border-blue-700',
            focusRingColor: 'ring-blue-500'
        }
    }    
};
