import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface ButtonGroupItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    setActiveButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ButtonGroupItem = ({
    value,
    text,
    Icon,
    handleClick,
    setActiveButtonItem,
    isActive,
}: ButtonGroupItemProps) => (
    <button
        className="px-4 py-2 flex"
        onClick={ () => { setActiveButtonItem!(value); handleClick(value); }}
    >
        { Icon ? <Icon className={ classNames(
            'h-5 w-5 mr-2 ',
            isActive ? 'text-blue-400' : 'text-gray-400'
        ) } aria-hidden="true"/> : null }
        <span>{ text }</span>
    </button>
);

export default ButtonGroupItem;
