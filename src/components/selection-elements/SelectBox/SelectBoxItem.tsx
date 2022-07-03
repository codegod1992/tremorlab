import React from 'react';

import SelectItemWrapper from '@common/SelectItemWrapper';
import { classNames } from '@utils/classname-utils';

export interface SelectBoxItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    isActive?: boolean,
    setSelectedItemValue?: React.Dispatch<React.SetStateAction<any>>,
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>,
}

const SelectBoxItem = ({
    value,
    name,
    Icon,
    isActive,
    setSelectedItemValue,
}: SelectBoxItemProps) => (
    <SelectItemWrapper handleClick={ () => setSelectedItemValue!(value) } isActive={ isActive || false } >
        <div className="flex truncate">
            { Icon ? (
                <Icon className={ classNames(
                    'h-5 w-5 mr-3 text-gray-400 flex-none'
                ) } aria-hidden="true" />
            ) : null }
            <span className="whitespace-nowrap truncate">{ name }</span>
        </div>
    </SelectItemWrapper>
);

export default SelectBoxItem;
