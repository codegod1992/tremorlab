import React, { useState } from 'react';

import { classNames } from '@utils/classname-utils';

export interface ButtonGroupProps {
    children: React.ReactElement[]
}

const ButtonGroup = ({
    children,
}: ButtonGroupProps) => {
    const childrenCount = React.Children.count(children);
    const [activeButtonItem, setActiveButtonItem] = useState<any|null>(null);
    return (
        <>
            { React.Children.map(children, (child, idx) => {
                if (idx === 0) {
                    return (
                        <div className={ classNames(
                            `inline-flex rounded-l-md border text-sm
                            font-medium focus:z-10 focus:ring-2 focus:ring-opacity-100
                            focus:outline-none focus:ring-blue-300`,
                            activeButtonItem === child.props.value
                                ? 'bg-blue-50 text-blue-500 border-blue-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        ) }
                        >
                            { React.cloneElement(child, {
                                setActiveButtonItem: setActiveButtonItem,
                                isActive: activeButtonItem === child.props.value,
                            }) }
                        </div>
                    );
                }
                if (idx === childrenCount - 1) {
                    return (
                        <div className={ classNames(
                            `inline-flex rounded-r-md border text-sm
                            font-medium focus:z-10 focus:ring-2 focus:ring-opacity-100
                            focus:outline-none focus:ring-blue-300`,
                            activeButtonItem === child.props.value
                                ? 'bg-blue-50 text-blue-500 border-blue-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                        ) }
                        >
                            { React.cloneElement(child, {
                                setActiveButtonItem: setActiveButtonItem,
                                isActive: activeButtonItem === child.props.value,
                            }) }
                        </div>
                    );
                }
                return (
                    <div className={ classNames(
                        `inline-flex border focus:border-l text-sm
                        font-medium focus:z-10 focus:ring-2 focus:ring-opacity-100
                        focus:outline-none focus:ring-blue-300`,
                        activeButtonItem === child.props.value
                            ? 'bg-blue-50 text-blue-500 border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    ) }
                    >
                        { React.cloneElement(child, {
                            setActiveButtonItem: setActiveButtonItem,
                            isActive: activeButtonItem === child.props.value,
                        }) }
                    </div>
                );
            })}
        </>
    );
};

export default ButtonGroup;
