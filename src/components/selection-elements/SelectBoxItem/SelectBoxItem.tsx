import React from 'react';

export interface SelectBoxItemProps {
    value: any,
    name: string,
    setSelectedSelectBoxItemValue?: React.Dispatch<React.SetStateAction<any>>,
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>,
}

const SelectBoxItem = ({
    value,
    name,
    setSelectedSelectBoxItemValue,
}: SelectBoxItemProps) => (
    <button
        className="group flex items-center justify-between px-4 py-2.5 text-sm border-b border-gray-100 w-full
            text-gray-700 group-hover:text-gray-500 hover:bg-gray-50 text-left"
        value={ value }
        onClick={ () => {
            setSelectedSelectBoxItemValue!(value);
        } }
    >
        { name }
    </button>
);

export default SelectBoxItem;
