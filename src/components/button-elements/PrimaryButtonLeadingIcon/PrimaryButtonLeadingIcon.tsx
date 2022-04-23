import React from 'react';

import { ButtonProportions, ButtonProps, IconProportions } from '@common/component-utils';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

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

export interface PrimaryButtonLeadingIconProps extends ButtonProps {
    Icon: React.ElementType,
}

const PrimaryButtonLeadingIcon = ({
    text,
    Icon,
    onClick,
    buttonSize = 'sm'
}: PrimaryButtonLeadingIconProps) => {
    return(
        <ButtonWrapper
            onClick={ onClick }
            { ...buttonProportionsAttributes[buttonSize] }
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
                    iconProportionsAttributes[buttonSize].margin || '',
                    iconProportionsAttributes[buttonSize].iconSize || '',
                )}
                aria-hidden="true"
            />   
            { text }
        </ButtonWrapper>
    );
};

export default PrimaryButtonLeadingIcon;
