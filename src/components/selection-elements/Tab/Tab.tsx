import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface TabProps {
    name: string,
    value: any,
    color?: string,
    isActive?: boolean,
    setSelectedTab?: React.Dispatch<React.SetStateAction<string>>,
}

const Tab = ({
    name,
    value,
    color = BaseColors.Blue,
    isActive,
    setSelectedTab,
}: TabProps) => {
    const activeClassNames = classNames(
        colors[color].textColor,
        colors[color].borderColor,
    );
    const inActiveClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.transparent).borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightText).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.text).hoverTextColor,
    );
    return(
        <li>
            <button
                className={ classNames(
                    isActive ? activeClassNames : inActiveClassNames,
                    'whitespace-nowrap py-2 px-1 border-b-2 text-sm font-normal truncate group'
                ) }
                value={ value }
                onClick={ () => setSelectedTab!(value) }
            >
                { name }
            </button>
        </li>
    );
};

export default Tab;
