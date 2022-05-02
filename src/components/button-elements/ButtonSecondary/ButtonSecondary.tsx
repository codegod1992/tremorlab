import React from 'react';

import { ButtonProportionTypes, ButtonShapeTypes, Sizes } from '@utils/component-utils';
import { ButtonProps } from '../../../utils/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';

const buttonProportions: {[char: string]: ButtonProportionTypes} = {
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

const buttonShape: ButtonShapeTypes = {
    rounded: 'rounded-lg',
    border: 'border',
    shadow: 'shadow-sm'
};

const ButtonSecondary = ({
    text,
    handleClick,
    info,
    arrow = false,
    size = Sizes.SM
}: ButtonProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportions[size] }
            { ...buttonShape }
            textColor={ 'text-blue-600' }
            bgColor={ 'bg-transparent' }
            hoverBgColor={ 'bg-blue-700' }
            hoverTextColor={ 'text-white' }
            borderColor={ 'border-blue-600' }
            hoverBorderColor={ 'border-blue-700' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
            { arrow ? (
                <span aria-hidden="true" className="ml-2 inline-block">→</span>
            ) : null }
        </ButtonWrapper>
    );
};

export default ButtonSecondary;
