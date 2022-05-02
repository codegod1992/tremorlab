import React from 'react';

import { 
    ButtonProportionTypes,
    ButtonShapeTypes,
    IconProportionTypes,
    Sizes
} from '@utils/component-utils';
import { ButtonWithIconProps } from '../../../utils/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

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


const iconProportions: {[char: string]: IconProportionTypes} = {
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

const ButtonPrimaryIconTrailing = ({
    text,
    Icon,
    handleClick,
    info,
    size = Sizes.SM
}: ButtonWithIconProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportions[size] }
            { ...buttonShape }
            textColor={ 'text-white' }
            hoverTextColor={ '' }
            bgColor={ 'bg-blue-600' }
            hoverBgColor={ 'bg-blue-700' }
            borderColor={ 'border-transparent' }
            hoverBorderColor={ 'bg-blue-700' }
            focusRingColor={ 'ring-blue-500' }
        >
            { text }
            <Icon 
                className={classNames(
                    iconProportions[size].margin || '',
                    iconProportions[size].iconSize || '',
                )}
                aria-hidden="true"
            />   
        </ButtonWrapper>
    );
};

export default ButtonPrimaryIconTrailing;
