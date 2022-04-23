import React from 'react';

import { ButtonColorTypes, ButtonProportions, ButtonShapeTypes } from '@common/component-utils';
import { classNames } from '@utils/classname-utils';

export interface ButtonWrapperProps extends ButtonProportions, ButtonShapeTypes, ButtonColorTypes {
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
    shadow,
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
            paddingX, paddingY, textSize,
            rounded, border, shadow,
            textColor, bgColor, borderColor,
            `hover:${hoverBgColor}`, `hover:${hoverTextColor}`, `hover:${hoverBorderColor}`,
            'flex-shrink-0 inline-flex items-center group font-medium',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            `focus:${focusRingColor}`,
        )}
        >
            { children }
        </button>
    );
};

export default ButtonWrapper;
