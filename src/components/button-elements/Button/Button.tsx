import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import {
    buttonColors,
    buttonProportions,
    buttonShape,
    iconLeftProportions,
    iconRightProportions
} from 'components/button-elements/Button/mappings';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import ButtonWrapper from '@common/ButtonWrapper';

export interface ButtonProps extends BaseComponentProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: string,
    tooltip?: string,
    size?: string,
    color?: string,
    importance?: string,
    handleClick?: { (): void },
}

const Button = ({
    text,
    Icon,
    iconPosition = 'left',
    handleClick,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
    importance = 'primary',
    marginTop,
}: ButtonProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <ButtonWrapper
                onClick={ handleClick }
                info={ tooltip }
                { ...buttonProportions[size] }
                { ...buttonShape }
                { ...buttonColors[color][importance] }
            >
                { Icon && (iconPosition !== 'right') ? ( // ensures that icon is rendered if iconPosition is misspelled
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
                <span className="whitespace-nowrap">
                    { text }
                </span>
                { Icon && (iconPosition === 'right') ? (
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
        </div>
    );
};

export default Button;
