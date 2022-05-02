import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes } from '@common/common-types';

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

export type IconProportionTypes = {
    margin?: string,
    iconSize: string,
}

export const iconLeftProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: '-ml-0.5 mr-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-ml-1 mr-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: '-ml-1 mr-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: '-ml-1 mr-1.5',
        iconSize: 'w-6 h-6',
    },
};

export const iconRightProportions: {[size: string]: IconProportionTypes} = {
    xs: {
        margin: '-mr-0.5 ml-1.5',
        iconSize: 'w-4 h-4',
    },
    sm: {
        margin: '-mr-1 ml-1.5',
        iconSize: 'w-5 h-5',
    },
    md: {
        margin: '-mr-1 ml-1.5',
        iconSize: 'w-5 h-5',
    },
    lg: {
        margin: '-mr-1 ml-1.5',
        iconSize: 'w-6 h-6',
    },
};
