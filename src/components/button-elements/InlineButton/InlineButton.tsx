import React from 'react';

import { ButtonProportions, ButtonProps, ButtonShapeTypes } from '@common/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';

const buttonProportionsAttributes: {[char: string]: ButtonProportions} = {
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

const buttonShapeAttributes: ButtonShapeTypes = {
    rounded: 'rounded-lg',
    border: '',
    shadow: ''
};

const InlineButton = ({
    text,
    onClick,
    buttonSize = 'sm'
}: ButtonProps) => {
    return(
        <ButtonWrapper
            onClick={ onClick }
            { ...buttonProportionsAttributes[buttonSize] }
            { ...buttonShapeAttributes }
            textColor={ 'text-blue-600' }
            hoverTextColor={ 'text-blue-700' }
            bgColor={ 'bg-transparent' }
            hoverBgColor={ 'bg-transparent' }
            borderColor={ '' }
            hoverBorderColor={ '' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
        </ButtonWrapper>
    );
};

export default InlineButton;
