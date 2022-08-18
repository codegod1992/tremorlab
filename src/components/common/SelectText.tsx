import React from 'react';

import { classNames } from '@utils/classnameUtils';

export interface SelectTextProps {
    text: string,
    isActive: boolean,
}

// NOTE: When making changes to the classNames, please manually adjust SelectBox classNames
const SelectText = ({
    text,
    isActive,
}: SelectTextProps) => (
    <span className={ classNames(
        'text-sm font-medium whitespace-nowrap truncate',
        isActive ? 'text-gray-700' : 'text-gray-500',
    ) }>
        { text }
    </span>
);

export default SelectText;
