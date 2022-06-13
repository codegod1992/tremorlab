import React, { useEffect, useState } from 'react';

export interface ToggleButtonProps {
    defaultValue: any,
    handleSelect: {(value: any): void},
    children: React.ReactElement[],
}

const ToggleButton = ({
    defaultValue,
    handleSelect = (value) => null,
    children,
}: ToggleButtonProps) => {
    const [activeToggleButtonItem, setActiveToggleButtonItem] = useState<any|null>(defaultValue);

    useEffect(() => {
        handleSelect(activeToggleButtonItem);
    }, [activeToggleButtonItem]);

    return (
        <div className="flex justify-between bg-gray-100 rounded-md p-1">
            { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                    setActiveToggleButtonItem: setActiveToggleButtonItem,
                    isActive: activeToggleButtonItem === child.props.value,
                })
            )) }
        </div>
    );
};

export default ToggleButton;
