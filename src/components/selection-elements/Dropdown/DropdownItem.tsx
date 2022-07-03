import React from 'react';

import SelectItemWrapper from '@common/SelectItemWrapper';
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
    <SelectItemWrapper handleClick={ () => setSelectedItem!(value) } isActive={ isActive }>
        <div className="flex items-center truncate">
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
            <span className="font-normal text-gray-400">
                { shortcut }
            </span>
        ) : null }
    </SelectItemWrapper>
);

export default DropdownItem;
