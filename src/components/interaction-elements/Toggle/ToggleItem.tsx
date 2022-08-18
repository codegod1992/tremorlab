import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classnameUtils';
import colorTheme, { defaultColors } from '@utils/colorTheme';

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
                privateProps!.isActive ? activeClassNames : inActiveClassNames,
            )}
            onClick={ () => { privateProps!.setActiveToggleItem!(value); }}
        >
            { Icon ? <Icon className="w-5 h-5 mr-2 opacity-70" aria-hidden="true"/> : null }
            <span className="whitespace-nowrap truncate">{ text }</span>
        </button>
    );
};

export default ToggleItem;
