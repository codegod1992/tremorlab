import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes } from '@utils/objects';
import {
    buttonProportions,
    colors,
    iconLeftProportions,
    iconRightProportions,
    shape,
} from 'components/interaction-elements/Button/styles';
import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface ButtonProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: string,
    tooltip?: string,
    size?: string,
    color?: string,
    importance?: string,
    handleClick?: { (): void },
    marginTop?: string,
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
        <span className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <button
                    type="button"
                    onClick={ handleClick }
                    className={ classNames(
                        'flex-shrink-0 inline-flex items-center group font-medium',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent',
                        buttonProportions[size].paddingX,
                        buttonProportions[size].paddingY,
                        buttonProportions[size].textSize,
                        shape.border,
                        shape.rounded,
                        shape.shadow,
                        colors[color][importance].bgColor,
                        colors[color][importance].borderColor,
                        colors[color][importance].focusRingColor,
                        colors[color][importance].hoverBgColor,
                        colors[color][importance].hoverBorderColor,
                        colors[color][importance].textColor,
                    ) }
                >
                    { Icon && (iconPosition !== 'right') ? ( // ensures that icon is rendered if iconPosition is misspelled
                        <Icon
                            className={classNames(
                                iconLeftProportions[size]?.margin || '',
                                iconLeftProportions[size]?.iconSize,
                            )}
                            aria-hidden="true"
                        />
                    ) : null }
                    <p className="whitespace-nowrap">
                        { text }
                    </p>
                    { Icon && (iconPosition === 'right') ? (
                        <Icon
                            className={classNames(
                                iconRightProportions[size]?.margin || '',
                                iconRightProportions[size]?.iconSize,
                            )}
                            aria-hidden="true"
                        />
                    ) : null }
                </button>
            </Tooltip>
        </span>
    );
};

export default Button;
