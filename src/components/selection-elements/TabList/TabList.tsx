import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { classNames, parseBorderClassNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface TabListProps extends BaseComponentProps {
    borderColor?: string,
    children: React.ReactNode
}

const TabList = ({
    borderColor = 'border-gray-200',
    marginTop,
    children
}: TabListProps) => {
    return(
        <ol aria-label="Tabs" className={ classNames(
            parseBorderClassNames(borderColor),
            parseMarginTopClassNames(marginTop),
            'border-b -mb-px flex justify-start space-x-4'
        ) }>
            { children }
        </ol>
    );
};

export default TabList;
