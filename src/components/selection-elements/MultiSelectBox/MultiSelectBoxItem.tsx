import React from 'react';

import { isValueInArray, removeValueFromArray } from '@utils/utils';

export interface MultiSelectBoxItemProps {
    value: any,
    name: string,
    selectedItemsValues?: any[],
    setSelectedItemsValues?: React.Dispatch<React.SetStateAction<any[]>>,
}

const MultiSelectBoxItem = ({
    value,
    name,
    selectedItemsValues,
    setSelectedItemsValues,
}: MultiSelectBoxItemProps) => (
    <button
        className="group flex items-center justify-between px-4 py-2.5 text-sm border-b border-gray-100 w-full
            text-gray-700 group-hover:text-gray-500 hover:bg-gray-50 text-left truncate"
        value={ value }
        onClick={ () => {
            if (!isValueInArray(value, selectedItemsValues!)) {
                setSelectedItemsValues!([...selectedItemsValues!, value]);
            } else {
                const newSelectedItemsValues = removeValueFromArray(value, selectedItemsValues!);
                setSelectedItemsValues!([...newSelectedItemsValues!]);
            }
        } }>
        <div className="flex items-center space-x-3 h-4 truncate">
            <input
                id="options"
                aria-describedby="options-description"
                name="options"
                type="checkbox"
                className="flex-none focus:ring-2 focus:ring-opacity-100 focus:outline-none focus:ring-blue-300 h-4 w-4
                    text-blue-500 border border-gray-300 rounded cursor-pointer"
                checked={ isValueInArray(value, selectedItemsValues!) }
            />
            <span className="whitespace-nowrap truncate"> { name } </span>
        </div>
    </button>
);

export default MultiSelectBoxItem;
