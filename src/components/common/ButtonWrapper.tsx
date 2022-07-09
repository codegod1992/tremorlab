import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { ButtonColorTypes, ButtonProportionTypes, ButtonShapeTypes } from '@common/common-types';
import { classNames } from '@utils/classname-utils';

export interface ButtonWrapperProps extends ButtonProportionTypes, ButtonShapeTypes, ButtonColorTypes {
    onClick?: { (): void },
    info?: string,
    children: React.ReactNode
}

const ButtonWrapper = ({
    onClick,
    info,
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
        <Tooltip content={ info } className={ info ? '' : 'hidden' }>
            <button onClick={ onClick } className={ classNames(
                paddingX,
                paddingY,
                textSize,
                rounded,
                border,
                shadow,
                textColor,
                bgColor,
                borderColor,
                hoverBgColor,
                hoverTextColor,
                hoverBorderColor,
                focusRingColor,
                'flex-shrink-0 inline-flex items-center group font-medium group',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent',
            ) }
            >
                { children }
            </button>
        </Tooltip>
    );
};

export default ButtonWrapper;
