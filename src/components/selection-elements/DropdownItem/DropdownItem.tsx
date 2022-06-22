import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface DropdownItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    shortcut?: string,
    isActive?: boolean, 
    setSelectedItem?: React.Dispatch<React.SetStateAction<any>>,
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>,
}

const DropdownItem = ({
    value,
    name,
    Icon,
    shortcut,
    isActive = false,
    setSelectedItem,
}: DropdownItemProps) => (
    <div>
        <button
            className={ classNames(
                isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                `group flex items-center justify-between px-4 py-2.5 space-x-10 w-full sm:text-sm
                 group-hover:text-gray-500 hover:bg-gray-100 text-left`
            ) }
            value={ value }
            onClick={ () => setSelectedItem!(value) }
        >
            <div className="flex group-hover:text-gray-900 truncate">
                { Icon ? (
                    <Icon className={ classNames(
                        'h-5 w-5 mr-3 flex-none text-gray-400'
                    ) } aria-hidden="true" />
                ) : null }
                <span className="whitespace-nowrap truncate">
                    { name }
                </span>
            </div>
            { shortcut ? (
                <span className="font-normal text-gray-400 group-hover:text-gray-500">
                    { shortcut }
                </span>
            ) : null }
        </button>
    </div>
);

export default DropdownItem;
