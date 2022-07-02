import React, { useEffect, useState } from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { defaultColors } from '@utils/colorTheme';

export interface TabListProps extends BaseComponentProps {
    defaultValue?: any,
    color?: string,
    handleSelect?: { (value: any): void },
    children: React.ReactElement[]
}

const TabList = ({
    defaultValue,
    color = BaseColors.Blue,
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
            getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
            parseMarginTopClassNames(marginTop),
            'border-b -mb-px flex justify-start space-x-4'
        ) }>
            { React.Children.map(children, (child) => (
                <>
                    { React.cloneElement(child, {
                        setSelectedTab: setSelectedTab,
                        color: color,
                        isActive: selectedTab === child.props.value,
                    }) }
                </>
            )) }
        </ol>
    );
};

export default TabList;
