import React from 'react';

import { ButtonColorTypes, ButtonProportions } from '@common/component-utils';
import { classNames } from '@utils/classname-utils';

export interface ButtonWrapperProps extends ButtonProportions, ButtonColorTypes {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

const ButtonWrapper = ({
    onClick,
    paddingX,
    paddingY,
    textSize,
    rounded,
    border,
    textColor,
    hoverTextColor,
    bgColor,
    hoverBgColor,
    borderColor,
    hoverBorderColor,
    focusRingColor,
    children
}: ButtonWrapperProps) => {
    return(
        <button onClick={onClick} className={ classNames(
            paddingX, paddingY, textSize, rounded, border, textColor, bgColor, borderColor,
            `focus:${focusRingColor}`, `hover:${hoverBgColor}`, `hover:${hoverTextColor}`, `hover:${hoverBorderColor}`,
            'flex-shrink-0 inline-flex items-center border border-transparent font-medium shadow-sm',
            'focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
        >
            { children }
        </button>
    );
};

export default ButtonWrapper;
