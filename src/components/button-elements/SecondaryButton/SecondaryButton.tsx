import React from 'react';

import { ButtonProportions, ButtonProps } from '@common/component-utils';
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

const SecondaryButton = ({
    text,
    onClick,
    buttonSize = 'sm'
}: ButtonProps) => {
    return(
        <ButtonWrapper
            onClick={ onClick }
            { ...buttonProportionsAttributes[buttonSize] }
            textColor={ 'text-blue-600' }
            bgColor={ 'bg-transparent' }
            hoverBgColor={ 'bg-blue-700' }
            hoverTextColor={ 'text-white' }
            borderColor={ 'border-blue-600' }
            hoverBorderColor={ 'border-blue-700' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
        </ButtonWrapper>
    );
};

export default SecondaryButton;
