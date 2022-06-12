import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface ToggleButtonItemProps {
    value: any,
    text: string,
    Icon?: React.ElementType,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    setActiveToggleButtonItem?: React.Dispatch<React.SetStateAction<any>>,
    isActive?: boolean,
}

const ToggleButtonItem = ({
    value,
    text,
    Icon,
    handleClick,
    setActiveToggleButtonItem,
    isActive,
}: ToggleButtonItemProps) => (
    <button
        className={classNames(
            'px-3 py-1.5 flex items-center rounded-md ring-1',
            isActive
                ? 'bg-white shadow-sm ring-black ring-opacity-5'
                : 'text-gray-500 hover:text-gray-700 ring-transparent',
        )}
        onClick={ () => { setActiveToggleButtonItem!(value); handleClick(value); }}
    >
        { Icon ? <Icon className="h-5 w-5 mr-2 text-gray-400" aria-hidden="true"/> : null }
        <span>{ text }</span>
    </button>
);

export default ToggleButtonItem;
