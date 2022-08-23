import React from 'react';

import {
    classNames,
    colorTheme,
    defaultColors,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    spacing
} from 'lib';

export interface TabProps {
    name: string,
    value: any,
    privateProps?: {
        color: string,
        isActive: boolean,
        setSelectedTab: React.Dispatch<React.SetStateAction<string>>,
    },
}

const Tab = ({
    name,
    value,
    privateProps,
}: TabProps) => {
    const activeClassNames = classNames(
        getColorVariantsFromColorThemeValue(colorTheme[privateProps!.color].text).textColor,
        getColorVariantsFromColorThemeValue(colorTheme[privateProps!.color].darkBorder).borderColor,
        'border-b-2'
    );
    const inActiveClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.transparent).borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.text).hoverTextColor,
        getColorVariantsFromColorThemeValue(defaultColors.border).hoverBorderColor,
        'hover:border-b-2'
    );
    return(
        <li>
            <button
                className={ classNames(
                    'flex whitespace-nowrap max-w-xs truncate',
                    spacing.twoXs.paddingRight,
                    spacing.twoXs.paddingLeft,
                    '-mb-px',
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    fontSize.sm,
                    fontWeight.md,
                    privateProps!.isActive ? activeClassNames : inActiveClassNames,
                ) }
                value={ value }
                onClick={ () => privateProps!.setSelectedTab!(value) }
            >
                <p className="whitespace-nowrap truncate">{ name }</p>
            </button>
        </li>
    );
};

export default Tab;
