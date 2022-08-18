import React from 'react';

import { classNames } from '@utils/classnameUtils';

export interface SelectItemWrapperProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isActive: boolean,
    children: React.ReactNode,
}

// When conducting a change here, please adjust BreadcrumbItem accordingly
const SelectItemWrapper = ({
    handleClick,
    isActive,
    children,
}: SelectItemWrapperProps) => (
    <button
        className={ classNames(
            isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
            `group flex items-center justify-between px-4 py-2.5 space-x-10 w-full sm:text-sm
            group-hover:text-gray-500 hover:bg-gray-100 text-left`
        ) }
        onClick={ handleClick }
    >
        { children }
    </button>
);

export default SelectItemWrapper;
