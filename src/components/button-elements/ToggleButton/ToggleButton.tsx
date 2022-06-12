import React, { useState } from 'react';

export interface ToggleButtonProps {
    children: React.ReactElement[]
}

const ToggleButton = ({
    children,
}: ToggleButtonProps) => {
    const [activeToggleButtonItem, setActiveToggleButtonItem] = useState<any|null>(null);

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
