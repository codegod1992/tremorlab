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
    setShowModal,
}: SelectBoxItemProps) => (
    <button className="w-full" value={ value } onClick={ () => {
        setSelectedSelectBoxItemValue!(value);
        setShowModal!(false);
    } }>
        { name }
    </button>
);

export default SelectBoxItem;
