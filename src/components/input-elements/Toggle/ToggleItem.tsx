import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from 'lib/classnameUtils';
import colorTheme, { defaultColors } from 'lib/colors';
import { fontSize } from 'lib/font';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

export interface ToggleItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    privateProps?: {
        color: string,
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
        getColorVariantsFromColorThemeValue(colorTheme[privateProps!.color].text).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightBorder).ringRolor,
        'shadow-sm'
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
                'flex items-center rounded-md ring-1',
                spacing.lg.paddingLeft,
                spacing.lg.paddingRight,
                spacing.xs.paddingTop,
                spacing.xs.paddingBottom,
                fontSize.sm,
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
