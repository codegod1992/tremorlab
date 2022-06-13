import React, { useEffect, useState } from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBorderClassNames, parseMarginTopClassNames } from '@utils/classname-utils';

export interface TabListProps extends BaseComponentProps {
    defaultValue?: any,
    borderColor?: string,
    handleSelect?: { (value: any): void },
    children: React.ReactElement[]
}

const TabList = ({
    defaultValue,
    borderColor = 'border-gray-200',
    marginTop,
    handleSelect = (value) => null,
    children,
}: TabListProps) => {
    const [selectedTab, setSelectedTab] = useState<any|null>(defaultValue);

    useEffect(() => {
        handleSelect(selectedTab);
    }, [selectedTab]);

    return(
        <ol aria-label="Tabs" className={ classNames(
            parseBorderClassNames(borderColor),
            parseMarginTopClassNames(marginTop),
            'border-b -mb-px flex justify-start space-x-4'
        ) }>
            { React.Children.map(children, (child) => (
                <>
                    { React.cloneElement(child, {
                        setSelectedTab: setSelectedTab,
                        isActive: selectedTab === child.props.value,
                    }) }
                </>
            )) }
        </ol>
    );
};

export default TabList;
