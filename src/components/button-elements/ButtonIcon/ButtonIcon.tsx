import React from 'react';

import { Colors, Sizes } from '@utils/objects';
import { buttonColors, buttonProportions, buttonShape, iconLeftProportions, iconRightProportions } from './mappings';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

export interface ButtonIconProps {
    text: string,
    Icon: React.ElementType,
    iconPosition?: string,
    importance?: string,
    info?: string,
    arrow?: boolean,
    size?: string,
    color?: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
} 

const ButtonIcon = ({
    text,
    Icon,
    iconPosition = 'left',
    importance = 'primary',
    info,
    size = Sizes.SM,
    color = Colors.Blue,
    handleClick,
}: ButtonIconProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ info }
            { ...buttonProportions[size] ? buttonProportions[size] : buttonProportions['md'] }
            { ...buttonShape }
            { ...buttonColors[color][importance] }
        >
            { iconPosition==='left' || iconPosition!=='right' ? (
                <Icon
                    className={classNames(
                        iconLeftProportions[size]
                            ? iconLeftProportions[size].margin!
                            : iconLeftProportions['md'].margin!,
                        iconLeftProportions[size]
                            ? iconLeftProportions[size].iconSize!
                            : iconLeftProportions['md'].iconSize!,
                    )}
                    aria-hidden="true"
                />
            ) : null }
            { text }
            { iconPosition==='right' ? (
                <Icon
                    className={classNames(
                        iconRightProportions[size]
                            ? iconRightProportions[size].margin!
                            : iconRightProportions['md'].margin!,
                        iconRightProportions[size]
                            ? iconRightProportions[size].iconSize!
                            : iconRightProportions['md'].iconSize!,
                    )}
                    aria-hidden="true"
                />
            ) : null }
        </ButtonWrapper>
    );
};

export default ButtonIcon;
