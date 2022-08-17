import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, Sizes } from '@utils/objects';
import { buttonProportions, iconLeftProportions, iconRightProportions } from './styles';
import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';

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
        <span className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <button
                    type="button"
                    onClick={ handleClick }
                    className={ classNames(
                        'flex-shrink-0 inline-flex items-center group font-medium',
                        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent',
                        buttonProportions[size]?.textSize,
                        getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
                        getColorVariantsFromColorThemeValue(colorTheme[color].darkText).hoverTextColor,
                        getColorVariantsFromColorThemeValue(defaultColors['transparent']).bgColor,
                        getColorVariantsFromColorThemeValue(defaultColors['transparent']).hoverBgColor,
                    ) }
                >
                    { Icon && (iconPosition !== 'right') ? ( // ensures that icon is rendered if iconPosition is misspelled
                        <Icon
                            className={ classNames(
                                iconLeftProportions[size]?.margin || '',
                                iconLeftProportions[size]?.iconSize,
                            ) }
                            aria-hidden="true"
                        />
                    ) : null }
                    <p className="whitespace-nowrap">{ text }</p>
                    { Icon && (iconPosition === 'right') ? (
                        <Icon
                            className={ classNames(
                                iconRightProportions[size]?.margin || '',
                                iconRightProportions[size]?.iconSize,
                            ) }
                            aria-hidden="true"
                        />
                    ) : null }
                </button>
            </Tooltip>
        </span>
    );
};

export default ButtonInline;
