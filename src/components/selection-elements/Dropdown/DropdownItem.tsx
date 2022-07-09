import React from 'react';

import SelectItemWrapper from '@common/SelectItemWrapper';
import { classNames } from '@utils/classname-utils';

export interface DropdownItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    shortcut?: string,
    privateProps?: {
        isActive: boolean,
        setSelectedItem: React.Dispatch<React.SetStateAction<any>>,
    }
}

const DropdownItem = ({
    value,
    name,
    Icon,
    shortcut,
    privateProps,
}: DropdownItemProps) => (
    <SelectItemWrapper handleClick={ () => privateProps!.setSelectedItem!(value) } isActive={ privateProps!.isActive }>
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
