import React from 'react';

import { classNames, parseBorderClassNames } from '@utils/classname-utils';

export interface TabListProps {
    borderColor?: string,
    children: React.ReactNode
}

const TabList = ({
    borderColor = 'border-gray-200',
    children
}: TabListProps) => {
    return(
        <ol aria-label="Tabs" className={ classNames(
            parseBorderClassNames(borderColor),
            'border-b -mb-px flex justify-start space-x-4'
        ) }>
            { children }
        </ol>
    );
};

export default TabList;
