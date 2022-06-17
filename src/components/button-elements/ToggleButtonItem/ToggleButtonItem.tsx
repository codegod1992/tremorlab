import React from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { buttonProportions, iconProportions } from './mappings';
import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface ToggleButtonItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    buttonSize?: string,
    color?: string,
    setActiveToggleButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ToggleButtonItem = ({
    value,
    text,
    Icon,
    buttonSize = Sizes.MD,
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
                'flex items-center rounded-md ring-1',
                buttonProportions[buttonSize].paddingX || buttonProportions['md'].paddingX!,
                buttonProportions[buttonSize].paddingY || buttonProportions['md'].paddingY!,
                buttonProportions[buttonSize].textSize || buttonProportions['md'].textSize!,
                isActive ? activeClassNames : inActiveClassNames,
            )}
            onClick={ () => { setActiveToggleButtonItem!(value); }}
        >
            { Icon ? <Icon className={ classNames(
                iconProportions[buttonSize].iconSize || iconProportions['md'].iconSize!,
                iconProportions[buttonSize].margin || iconProportions['md'].margin!,
                'opacity-70'
            ) } aria-hidden="true"/> : null }
            <span>{ text }</span>
        </button>
    );
};

export default ToggleButtonItem;
