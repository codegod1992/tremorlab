import React from 'react';

import { classNames } from '@utils/classname-utils';

interface SelectWrapperProps {
    children: React.ReactNode,
}

const SelectWrapper = ({
    children,
}: SelectWrapperProps) => (
    <div className={ classNames(
        'relative flex rounded-md shadow-sm border border-gray-300 bg-white hover:bg-gray-50',
        'w-full min-w-[10rem]',
    ) }>
        { children }
    </div>
);

export default SelectWrapper;
