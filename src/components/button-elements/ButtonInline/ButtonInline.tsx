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
    border: '',
    shadow: ''
};

const ButtonInline = ({
    text,
    handleClick,
    size = Sizes.SM
}: ButtonProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            { ...buttonProportionsAttributes[size] }
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

export default ButtonInline;
