import React, { useEffect, useState } from 'react';

import { Sizes } from '@utils/objects';

export interface ToggleButtonProps {
    defaultValue: any,
    buttonSize?: string,
    handleSelect: {(value: any): void},
    children: React.ReactElement[],
}

const ToggleButton = ({
    defaultValue,
    buttonSize = Sizes.MD,
    handleSelect = (value) => null,
    children,
}: ToggleButtonProps) => {
    const [activeToggleButtonItem, setActiveToggleButtonItem] = useState<any|null>(defaultValue);

    useEffect(() => {
        handleSelect(activeToggleButtonItem);
    }, [activeToggleButtonItem]);

    return (
        <div className="flex justify-start bg-gray-100 rounded-md p-1">
            { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                    buttonSize: buttonSize,
                    setActiveToggleButtonItem: setActiveToggleButtonItem,
                    isActive: activeToggleButtonItem === child.props.value,
                })
            )) }
        </div>
    );
};

export default ToggleButton;
