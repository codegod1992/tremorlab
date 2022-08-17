import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';

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
                    privateProps!.isActive ? activeClassNames : inActiveClassNames,
                    'flex whitespace-nowrap font-medium py-2 px-1 -mb-px text-sm group max-w-xs',
                ) }
                value={ value }
                onClick={ () => privateProps!.setSelectedTab!(value) }
            >
                <p>{ name }</p>
            </button>
        </li>
    );
};

export default Tab;
