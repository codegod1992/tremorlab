import React from 'react';

import { 
    ButtonProportions,
    ButtonShapeTypes,
    IconProportions,
    Sizes
} from '@utils/component-utils';
import { ButtonWithIconProps } from '../../../utils/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

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

const iconProportionsAttributes: {[char: string]: IconProportions} = {
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

const ButtonPrimaryIconLeading = ({
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
            <Icon 
                className={classNames(
                    iconProportionsAttributes[size].margin || '',
                    iconProportionsAttributes[size].iconSize || '',
                )}
                aria-hidden="true"
            />   
            { text }
        </ButtonWrapper>
    );
};

export default ButtonPrimaryIconLeading;
