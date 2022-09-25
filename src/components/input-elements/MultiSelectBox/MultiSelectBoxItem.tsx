import React from 'react';

import {
    BaseColors,
    border,
    borderRadius,
    classNames,
    defaultColors,
    fontSize,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    spacing
} from 'lib';

export interface MultiSelectBoxItemProps {
    value: any,
    text: string,
    privateProps?: {
        handleMultiSelectBoxItemClick: (value: any) => void,
        isActive: boolean,
    },
}

const MultiSelectBoxItem = ({
    value,
    text,
    privateProps,
}: MultiSelectBoxItemProps) => (
    <button
        onClick={ () => privateProps!.handleMultiSelectBoxItemClick(value) }
        className={ classNames(
            'flex items-center justify-between w-full',
            spacing.twoXl.paddingLeft,
            spacing.twoXl.paddingRight,
            spacing.md.paddingTop,
            spacing.md.paddingBottom,
            fontSize.sm,
            getColorVariantsFromColorThemeValue(defaultColors.lightBackground).hoverBgColor,
            getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
        ) }
    >
        <div className="flex items-center truncate">
            <input
                type="checkbox"
                className={ classNames(
                    'flex-none focus:ring-none focus:outline-none cursor-pointer',
                    getColorVariantsFromColorThemeValue(defaultColors.lightRing).focusRingColor,
                    getColorVariantsFromColorThemeValue(getColorTheme(BaseColors.Blue).text).textColor,
                    getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                    spacing.lg.marginRight,
                    borderRadius.sm.all,
                    border.sm.all,
                ) }
                checked={ privateProps!.isActive }
                readOnly={ true }
            />
            <p className="whitespace-nowrap truncate">{ text }</p>
        </div>
    </button>
);

export default MultiSelectBoxItem;
