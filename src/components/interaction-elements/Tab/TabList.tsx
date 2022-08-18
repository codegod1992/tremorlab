import React, { useEffect, useState } from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { BaseColors } from 'lib/objects';
import { defaultColors } from 'lib/colorTheme';

export interface TabListProps {
    defaultValue?: any,
    color?: string,
    handleSelect?: { (value: any): void },
    marginTop?: string,
    children: React.ReactElement[]
}

const TabList = ({
    defaultValue,
    color = BaseColors.Blue,
    marginTop,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    children,
}: TabListProps) => {
    const [selectedTab, setSelectedTab] = useState<any|null>(defaultValue);

    useEffect(() => {
        handleSelect(selectedTab);
    }, [selectedTab]);

    return(
        <ol aria-label="Tabs" className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
            parseMarginTopClassNames(marginTop),
            'border-b flex justify-start space-x-4 overflow-x-clip'
        ) }>
            { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                    privateProps: {
                        setSelectedTab: setSelectedTab,
                        color: color,
                        isActive: selectedTab === child.props.value,
                    }
                })
            )) }
        </ol>
    );
};

export default TabList;
