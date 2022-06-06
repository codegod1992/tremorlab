import React from 'react';

export interface SelectBoxItemProps {
    value: any,
    name: string,
    setSelectedSelectBoxItemValue?: React.Dispatch<React.SetStateAction<any>>,
}

const SelectBoxItem = ({
    value,
    name,
    setSelectedSelectBoxItemValue,
}: SelectBoxItemProps) => (
    <button className="w-full" value={ value } onClick={ () => setSelectedSelectBoxItemValue!(value) }>
        { name }
    </button>
);

export default SelectBoxItem;
