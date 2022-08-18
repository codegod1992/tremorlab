import React from 'react';

import { isValueInArray, removeValueFromArray } from 'lib/utils';
import SelectItemWrapper from '../common/SelectItemWrapper';

export interface MultiSelectBoxItemProps {
    value: any,
    name: string,
    privateProps?: {
        selectedItemsValues: any[],
        setSelectedItemsValues: React.Dispatch<React.SetStateAction<any[]>>,
        handleSelect: { (value: any): void },
        setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    },
}

const MultiSelectBoxItem = ({
    value,
    name,
    privateProps,
}: MultiSelectBoxItemProps) => (
    <SelectItemWrapper
        handleClick={ () => {
            let newSelectedItemsValues = [];
            if (!isValueInArray(value, privateProps!.selectedItemsValues!)) {
                newSelectedItemsValues = [...privateProps!.selectedItemsValues!, value];
                privateProps!.setSelectedItemsValues!([...newSelectedItemsValues]);
            } else {
                newSelectedItemsValues = removeValueFromArray(value, privateProps!.selectedItemsValues!);
                privateProps!.setSelectedItemsValues!([...newSelectedItemsValues!]);
            }
            privateProps!.handleSelect(newSelectedItemsValues);
        } }
        isActive={ false }
    >
        <div className="flex items-center space-x-3 truncate">
            <input
                id="options"
                aria-describedby="options-description"
                name="options"
                type="checkbox"
                className="flex-none focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300 h-4 w-4
                    text-blue-500 border border-gray-300 rounded cursor-pointer"
                checked={ isValueInArray(value, privateProps!.selectedItemsValues!) }
                readOnly={ true }
            />
            <span className="whitespace-nowrap truncate"> { name } </span>
        </div>
    </SelectItemWrapper>
);

export default MultiSelectBoxItem;
