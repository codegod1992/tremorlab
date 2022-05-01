import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { ButtonColorTypes, ButtonProportions, ButtonShapeTypes } from '@utils/component-utils';
import { classNames, getColorVariantTypes } from '@utils/classname-utils';

export interface ButtonWrapperProps extends ButtonProportions, ButtonShapeTypes, ButtonColorTypes {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
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
                getColorVariantTypes(hoverBgColor).hoverBgColor,
                getColorVariantTypes(hoverTextColor).hoverTextColor,
                getColorVariantTypes(hoverBorderColor).hoverBorderColor,
                getColorVariantTypes(focusRingColor).focusRingColor,
                'flex-shrink-0 inline-flex items-center group font-medium group',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
            ) }
            >
                { children }
            </button>
        </Tooltip>
    );
};

export default ButtonWrapper;
