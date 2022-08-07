import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

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
        colors[privateProps!.color].textColor,
        colors[privateProps!.color].borderColor,
        'border-b-2 -mb-1'
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
                    privateProps!.isActive ? activeClassNames : inActiveClassNames,
                    'whitespace-nowrap py-2 px-1 text-sm font-normal truncate group',
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
