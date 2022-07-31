import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { buttonColors, buttonProportions, buttonShape, iconLeftProportions, iconRightProportions } from './mappings';
import ButtonWrapper from '@common/ButtonWrapper';
import { classNames } from '@utils/classname-utils';

export interface ButtonInlineProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: string,
    tooltip?: string,
    size?: string,
    color?: string,
    handleClick?: { (): void },
} 

const ButtonInline = ({
    text,
    Icon,
    iconPosition = 'left',
    handleClick,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
}: ButtonInlineProps) => {
    return(
        <ButtonWrapper
            onClick={ handleClick }
            info={ tooltip }
            { ...buttonProportions[size] }
            { ...buttonShape }
            { ...buttonColors[color] }
        >
            { Icon && (iconPosition !== 'right') ? ( // ensures that icon is rendered if iconPosition is misspelled
                <Icon
                    className={ classNames(
                        iconLeftProportions[size]
                            ? iconLeftProportions[size].margin!
                            : iconLeftProportions['md'].margin!,
                        iconLeftProportions[size]
                            ? iconLeftProportions[size].iconSize!
                            : iconLeftProportions['md'].iconSize!,
                    ) }
                    aria-hidden="true"
                />
            ) : null }
            { text }
            { Icon && (iconPosition === 'right') ? (
                <Icon
                    className={ classNames(
                        iconRightProportions[size]
                            ? iconRightProportions[size].margin!
                            : iconRightProportions['md'].margin!,
                        iconRightProportions[size]
                            ? iconRightProportions[size].iconSize!
                            : iconRightProportions['md'].iconSize!,
                    ) }
                    aria-hidden="true"
                />
            ) : null }
        </ButtonWrapper>
    );
};

export default ButtonInline;
