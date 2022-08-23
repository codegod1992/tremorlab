import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BaseColors, HorizontalPositions, Sizes } from 'lib/primitives';
import { buttonProportions, iconSizes } from './styles';
import { classNames, colorTheme, defaultColors, getColorVariantsFromColorThemeValue, spacing } from 'lib';
import { TwMarginTop } from '../../../lib';

export interface ButtonInlineProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: string,
    tooltip?: string,
    size?: string,
    color?: string,
    handleClick?: { (): void },
    marginTop?: TwMarginTop,
} 

const ButtonInline = ({
    text,
    Icon,
    iconPosition = HorizontalPositions.Left,
    handleClick,
    tooltip,
    size = Sizes.SM,
    color = BaseColors.Blue,
    marginTop = 'mt-0',
}: ButtonInlineProps) => {
    return(
        <span className={ classNames(marginTop) }>
            <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                <button
                    type="button"
                    onClick={ handleClick }
                    className={ classNames(
                        'flex-shrink-0 inline-flex items-center group font-medium',
                        'focus:outline-none focus:ring-none',
                        buttonProportions[size]?.fontSize,
                        getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
                        getColorVariantsFromColorThemeValue(colorTheme[color].darkText).hoverTextColor,
                        getColorVariantsFromColorThemeValue(defaultColors.transparent).bgColor,
                        getColorVariantsFromColorThemeValue(defaultColors.transparent).hoverBgColor,
                    ) }
                >
                    { Icon && (iconPosition !== HorizontalPositions.Right) ? ( // ensures that icon is rendered if iconPosition is misspelled
                        <Icon
                            className={ classNames(
                                spacing.twoXs.negativeMarginLeft,
                                spacing.xs.marginRight,
                                iconSizes[size]?.height,
                                iconSizes[size]?.width,
                            ) }
                            aria-hidden="true"
                        />
                    ) : null }
                    <p className="whitespace-nowrap">{ text }</p>
                    { Icon && (iconPosition === HorizontalPositions.Right) ? (
                        <Icon
                            className={ classNames(
                                spacing.twoXs.negativeMarginRight,
                                spacing.xs.marginLeft,
                                iconSizes[size]?.height,
                                iconSizes[size]?.width,
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
