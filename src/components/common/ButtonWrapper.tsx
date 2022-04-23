import React from 'react';

import { ButtonColorTypes, ButtonProportions } from '@common/component-utils';
import { classNames } from '@utils/classname-utils';

export interface ButtonWrapperProps extends ButtonProportions, ButtonColorTypes {
    children: React.ReactNode
}

const ButtonWrapper = ({
    paddingX,
    paddingY,
    textSize,
    rounded,
    border,
    textColor,
    bgColor,
    hoverBgColor,
    borderColor,
    focusRingColor,
    children
}: ButtonWrapperProps) => {
    return(
        <button className={classNames(
            paddingX, paddingY, textSize, rounded, border, textColor, bgColor, borderColor,
            `focus:${focusRingColor}`, `hover:${hoverBgColor}`,
            'flex-shrink-0 inline-flex items-center border border-transparent font-medium shadow-sm',
            'bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2'
        )}
        >
            { children }
        </button>
    );
};

export default ButtonWrapper;
