import React from 'react';

import { ButtonProportions } from '@common/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';

const buttonProportionsAttributes: {[char: string]: ButtonProportions} = {
    xs: {
        paddingX: 'px-2.5',
        paddingY: 'py-1.5',
        textSize: 'text-xs',
        rounded: 'rounded-lg',
        border: 'border',
    },
    sm: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-sm',
        rounded: 'rounded-lg',
        border: 'border',
    },
    md: {
        paddingX: 'px-4',
        paddingY: 'py-2',
        textSize: 'text-base',
        rounded: 'rounded-lg',
        border: 'border',
    },
    lg: {
        paddingX: 'px-4',
        paddingY: 'py-2.5',
        textSize: 'text-lg',
        rounded: 'rounded-lg',
        border: 'border',
    },
};

export interface PrimaryButtonProps {
    text: string,
    buttonSize?: string,
}

const PrimaryButton = ({
    text,
    buttonSize = 'sm'
}: PrimaryButtonProps) => {
    return(
        <ButtonWrapper
            { ...buttonProportionsAttributes[buttonSize] }
            textColor={ 'text-white' }
            bgColor={ 'bg-blue-600' }
            hoverBgColor={ 'hover:bg-blue-700' }
            borderColor ={ 'border-transparent' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
        </ButtonWrapper>
    );
};

export default PrimaryButton;
