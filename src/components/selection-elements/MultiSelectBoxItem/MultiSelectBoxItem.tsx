import React from 'react';

import { isValueInArray } from '@utils/utils';

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
                setSelectedItemsValues!([...selectedItemsValues!]);
            }
        } }>
        <span className="whitespace-nowrap truncate">{ name }</span>
    </button>
);

export default MultiSelectBoxItem;
