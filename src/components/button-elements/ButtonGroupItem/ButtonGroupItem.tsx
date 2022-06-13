import React from 'react';

import { Sizes } from '@utils/objects';
import { classNames } from '@utils/classname-utils';

import { buttonProportions, iconProportions } from './mappings';

export interface ButtonGroupItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    buttonSize?: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    setActiveButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ButtonGroupItem = ({
    value,
    text,
    Icon,
    handleClick,
    buttonSize = Sizes.MD,
    setActiveButtonItem,
    isActive,
}: ButtonGroupItemProps) => (
    <button
        className={ classNames(
            'flex',
            buttonProportions[buttonSize].paddingX,
            buttonProportions[buttonSize].paddingY,
            buttonProportions[buttonSize].textSize,
        ) }
        onClick={ () => { setActiveButtonItem!(value); handleClick(value); }}
    >
        { Icon ? <Icon className={ classNames(
            iconProportions[buttonSize].iconSize || iconProportions['md'].iconSize!,
            iconProportions[buttonSize].margin || iconProportions['md'].margin!,
            isActive ? 'text-blue-400' : 'text-gray-400'
        ) } aria-hidden="true"/> : null }
        <span>{ text }</span>
    </button>
);

export default ButtonGroupItem;
