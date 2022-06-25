import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { buttonColors, buttonProportions, buttonShape, iconProportions } from './mappings';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

export interface ButtonInlineProps {
    text: string,
    Icon?: React.ElementType,
    info?: string,
    arrow?: boolean,
    size?: string,
    color?: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
} 

const ButtonInline = ({
    text,
    Icon,
    handleClick,
    info,
    arrow = false,
    size = Sizes.SM,
    color = BaseColors.Blue,
}: ButtonInlineProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportions[size] }
            { ...buttonShape }
            { ...buttonColors[color] }
        >
            { Icon ? (
                <Icon
                    className={ classNames(
                        iconProportions[size]
                            ? iconProportions[size].margin!
                            : iconProportions['md'].margin!,
                        iconProportions[size]
                            ? iconProportions[size].iconSize!
                            : iconProportions['md'].iconSize!,
                    ) }
                    aria-hidden="true"
                />
            ) : null }
            { text }
            { arrow ? (
                <span 
                    aria-hidden="true"
                    className="ml-1.5 inline-block translate-x-0 group-hover:translate-x-1 transition-transform \
                        ease-in-out duration-50"
                >
                        →
                </span>
            ) : null }
        </ButtonWrapper>
    );
};

export default ButtonInline;
