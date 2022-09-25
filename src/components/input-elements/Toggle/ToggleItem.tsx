import React from 'react';

import {
    borderRadius,
    boxShadow,
    classNames,
    defaultColors,
    fontSize,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';
import { Color } from '../../../lib';

export interface ToggleItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    privateProps?: {
        color: Color,
        setActiveToggleItem: React.Dispatch<React.SetStateAction<any>>,
        isActive: boolean,
    }
}

const ToggleItem = ({
    value,
    text,
    Icon,
    privateProps,
}: ToggleItemProps) => {
    const activeClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
        getColorVariantsFromColorThemeValue(getColorTheme(privateProps!.color).text).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightBorder).ringRolor,
        boxShadow.sm,
    );
    const inActiveClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.transparent).bgColor,
        getColorVariantsFromColorThemeValue(defaultColors.darkText).hoverTextColor,
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.transparent).ringRolor,
    );
    return (
        <button
            className={classNames(
                'flex items-center ring-1',
                spacing.lg.paddingLeft,
                spacing.lg.paddingRight,
                spacing.xs.paddingTop,
                spacing.xs.paddingBottom,
                fontSize.sm,
                borderRadius.md.all,
                privateProps!.isActive ? activeClassNames : inActiveClassNames,
            )}
            onClick={ () => { privateProps!.setActiveToggleItem!(value); }}
        >
            { Icon ? (
                <Icon
                    className={ classNames(
                        'opacity-70',
                        spacing.xs.marginRight,
                        sizing.lg.height,
                        sizing.lg.width,
                    )}
                    aria-hidden="true"
                />
            ) : null }
            <span className="whitespace-nowrap truncate">{ text }</span>
        </button>
    );
};

export default ToggleItem;
