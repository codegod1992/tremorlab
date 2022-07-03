import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface ToggleButtonItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    color?: string,
    setActiveToggleButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ToggleButtonItem = ({
    value,
    text,
    Icon,
    color = BaseColors.Blue,
    setActiveToggleButtonItem,
    isActive,
}: ToggleButtonItemProps) => {
    const activeClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
        colors[color].textColor,
        getColorVariantsFromColorThemeValue(defaultColors.black).ringRolor,
        'shadow-sm ring-opacity-5'
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
                'flex items-center rounded-md ring-1 px-3 py-1.5 text-sm',
                isActive ? activeClassNames : inActiveClassNames,
            )}
            onClick={ () => { setActiveToggleButtonItem!(value); }}
        >
            { Icon ? <Icon className="w-5 h-5 mr-2 opacity-70" aria-hidden="true"/> : null }
            <span>{ text }</span>
        </button>
    );
};

export default ToggleButtonItem;
