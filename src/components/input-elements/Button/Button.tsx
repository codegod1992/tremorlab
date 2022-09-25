import React from 'react';

import {
    BaseColors,
    HorizontalPositions,
    Importances,
    Sizes,
    border,
    borderRadius,
    boxShadow,
    classNames,
    isBaseColor,
    isValidImportance,
    isValidSize,
    parseMarginTop,
    spacing,
} from 'lib';
import { Color, HorizontalPosition, Importance, MarginTop, Size } from '../../../lib';
import {
    buttonProportions,
    colors,
    iconSizes,
} from './styles';

export interface ButtonProps {
    text: string,
    Icon?: React.ElementType,
    iconPosition?: HorizontalPosition,
    size?: Size,
    color?: Color,
    importance?: Importance,
    handleClick?: { (): void },
    marginTop?: MarginTop,
}

const Button = ({
    text,
    Icon,
    iconPosition = HorizontalPositions.Left,
    handleClick,
    size = Sizes.SM,
    color = BaseColors.Blue,
    importance = Importances.Primary,
    marginTop = 'mt-0',
}: ButtonProps) => {
    const buttonColors = isBaseColor(color) ? colors[color] : colors[BaseColors.Blue];
    const buttonSize = isValidSize(size) ? size : Sizes.SM;
    const buttonImportance = isValidImportance(importance) ? importance : Importances.Primary;
    return(
        <span className={ classNames(parseMarginTop(marginTop)) }>
            <button
                type="button"
                onClick={ handleClick }
                className={ classNames(
                    'flex-shrink-0 inline-flex items-center group font-medium',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent',
                    borderRadius.md.all,
                    border.sm.all,
                    boxShadow.sm,
                    buttonProportions[buttonSize].paddingLeft,
                    buttonProportions[buttonSize].paddingRight,
                    buttonProportions[buttonSize].paddingTop,
                    buttonProportions[buttonSize].paddingBottom,
                    buttonProportions[buttonSize].fontSize,
                    buttonColors[buttonImportance].bgColor,
                    buttonColors[buttonImportance].borderColor,
                    buttonColors[buttonImportance].focusRingColor,
                    buttonColors[buttonImportance].hoverBgColor,
                    buttonColors[buttonImportance].hoverBorderColor,
                    buttonColors[buttonImportance].textColor,
                ) }
            >
                { Icon && (iconPosition !== HorizontalPositions.Right) ? ( // ensures that icon is rendered if iconPosition is misspelled
                    <Icon
                        className={classNames(
                            spacing.twoXs.negativeMarginLeft,
                            spacing.xs.marginRight,
                            iconSizes[buttonSize].height,
                            iconSizes[buttonSize].width,
                        )}
                        aria-hidden="true"
                    />
                ) : null }
                <p className="whitespace-nowrap">
                    { text }
                </p>
                { Icon && (iconPosition === HorizontalPositions.Right) ? (
                    <Icon
                        className={classNames(
                            spacing.twoXs.negativeMarginRight,
                            spacing.xs.marginLeft,
                            iconSizes[buttonSize].height,
                            iconSizes[buttonSize].width,
                        )}
                        aria-hidden="true"
                    />
                ) : null }
            </button>
        </span>
    );
};

export default Button;
