import React from 'react';

import { ButtonProportions, ButtonShapeTypes, Sizes } from '@utils/component-utils';
import { ButtonProps } from '../../../utils/component-utils';
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
    border: 'border',
    shadow: 'shadow-sm'
};

const ButtonPrimaryArrow = ({
    text,
    handleClick,
    info,
    size = Sizes.SM
}: ButtonProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportionsAttributes[size] }
            { ...buttonShapeAttributes }
            textColor={ 'text-white' }
            hoverTextColor={ '' }
            bgColor={ 'bg-blue-600' }
            hoverBgColor={ 'bg-blue-700' }
            borderColor={ 'border-transparent' }
            hoverBorderColor={ 'bg-blue-700' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
            <span aria-hidden="true" className="ml-2 inline-block">→</span> 
        </ButtonWrapper>
    );
};

export default ButtonPrimaryArrow;
