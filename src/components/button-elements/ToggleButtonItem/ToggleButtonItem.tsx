import React from 'react';

import { buttonProportions, iconProportions } from './mappings';
import { Sizes } from '@utils/objects';
import { classNames } from '@utils/classname-utils';

export interface ToggleButtonItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    buttonSize?: string,
    setActiveToggleButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ToggleButtonItem = ({
    value,
    text,
    Icon,
    buttonSize = Sizes.MD,
    setActiveToggleButtonItem,
    isActive,
}: ToggleButtonItemProps) => (
    <button
        className={classNames(
            'flex items-center rounded-md ring-1',
            buttonProportions[buttonSize].paddingX || buttonProportions['md'].paddingX!,
            buttonProportions[buttonSize].paddingY || buttonProportions['md'].paddingY!,
            buttonProportions[buttonSize].textSize || buttonProportions['md'].textSize!,
            isActive
                ? 'bg-white shadow-sm ring-black ring-opacity-5'
                : 'text-gray-500 hover:text-gray-700 ring-transparent',
        )}
        onClick={ () => { setActiveToggleButtonItem!(value); }}
    >
        { Icon ? <Icon className={ classNames(
            iconProportions[buttonSize].iconSize || iconProportions['md'].iconSize!,
            iconProportions[buttonSize].margin || iconProportions['md'].margin!,
            'text-gray-400',
        ) } aria-hidden="true"/> : null }
        <span>{ text }</span>
    </button>
);

export default ToggleButtonItem;
