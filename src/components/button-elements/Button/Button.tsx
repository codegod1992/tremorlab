import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { buttonColors, buttonProportions, buttonShape } from 'components/button-elements/Button/mappings';
import ButtonWrapper from '@common/ButtonWrapper';

export interface ButtonProps {
    text: string,
    info?: string,
    arrow?: boolean,
    size?: string,
    color?: string,
    importance?: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({
    text,
    handleClick,
    info,
    arrow = false,
    size = Sizes.SM,
    color = BaseColors.Blue,
    importance = 'primary'
}: ButtonProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportions[size] }
            { ...buttonShape }
            { ...buttonColors[color][importance]}
        >
            { text }
            { arrow ? (
                <span aria-hidden="true" className="ml-2 inline-block">→</span>
            ) : null}
        </ButtonWrapper>
    );
};

export default Button;
