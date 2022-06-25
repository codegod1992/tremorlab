import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import {
    buttonColors,
    buttonProportions,
    buttonShape,
    iconProportions
} from 'components/button-elements/Button/mappings';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

export interface ButtonProps {
    text: string,
    Icon?: React.ElementType,
    info?: string,
    arrow?: boolean,
    size?: string,
    color?: string,
    importance?: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({
    text,
    Icon,
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
            { ...buttonColors[color][importance] }
        >
            { Icon ? (
                <Icon
                    className={classNames(
                        iconProportions[size]
                            ? iconProportions[size].margin!
                            : iconProportions['md'].margin!,
                        iconProportions[size]
                            ? iconProportions[size].iconSize!
                            : iconProportions['md'].iconSize!,
                    )}
                    aria-hidden="true"
                />
            ) : null }
            <span className="whitespace-nowrap">
                { text }
            </span>
            { arrow ? (
                <span aria-hidden="true" className="ml-2 inline-block">→</span>
            ) : null}
        </ButtonWrapper>
    );
};

export default Button;
