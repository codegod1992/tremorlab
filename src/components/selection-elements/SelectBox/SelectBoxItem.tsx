import React from 'react';

import SelectItemWrapper from '@common/SelectItemWrapper';
import { classNames } from '@utils/classname-utils';

export interface SelectBoxItemProps {
    value: any,
    name: string,
    Icon?: React.ElementType,
    privateProps?: {
        isActive: boolean,
        setSelectedItemValue?: React.Dispatch<React.SetStateAction<any>>,
        handleSelect: { (value: any): void },
        setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    }
}

const SelectBoxItem = ({
    value,
    name,
    Icon,
    privateProps,
}: SelectBoxItemProps) => (
    <SelectItemWrapper
        handleClick={ () => {
            privateProps!.setSelectedItemValue!(value);
            privateProps!.handleSelect(value);
            privateProps!.setShowModal(false);
        } }
        isActive={ privateProps!.isActive } >
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
