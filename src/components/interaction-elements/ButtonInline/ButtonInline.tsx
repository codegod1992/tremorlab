import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { buttonColors, buttonProportions, buttonShape, iconLeftProportions, iconRightProportions } from './mappings';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import ButtonWrapper from '@common/ButtonWrapper';

export interface ButtonInlineProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: string,
    tooltip?: string,
    size?: string,
    color?: string,
    handleClick?: { (): void },
    marginTop?: string,
} 

const ButtonInline = ({
    text,
    Icon,
    iconPosition = 'left',
    handleClick,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop,
}: ButtonInlineProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <ButtonWrapper
                onClick={ handleClick }
                tooltip={ tooltip }
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
        </div>
    );
};

export default ButtonInline;
