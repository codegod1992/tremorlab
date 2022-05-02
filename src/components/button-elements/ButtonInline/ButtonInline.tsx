import React from 'react';

import { Colors, Sizes } from '@utils/objects';
import { buttonColors, buttonProportions, buttonShape } from './mappings';
import ButtonWrapper from '@common/ButtonWrapper';

export interface ButtonInlineProps {
    text: string,
    info?: string,
    arrow?: boolean,
    size?: string,
    color?: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
} 

const ButtonInline = ({
    text,
    handleClick,
    info,
    arrow = false,
    size = Sizes.SM,
    color = Colors.Blue
}: ButtonInlineProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportions[size] }
            { ...buttonShape }
            { ...buttonColors[color] }
        >
            { text }
            { arrow ? (
                <span 
                    aria-hidden="true"
                    className="ml-1.5 inline-block translate-x-0 group-hover:translate-x-1 transition-transform \
                            ease-in-out duration-50" >
                        →
                </span>
            ) : null }
        </ButtonWrapper>
    );
};

export default ButtonInline;
