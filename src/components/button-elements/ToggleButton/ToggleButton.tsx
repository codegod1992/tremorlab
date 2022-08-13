import React, { useEffect, useState } from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import { defaultColors } from '@utils/colorTheme';

export interface ToggleButtonProps {
    defaultValue: any,
    color?: string,
    handleSelect: {(value: any): void},
    children: React.ReactElement[],
    marginTop?: string,
}

const ToggleButton = ({
    defaultValue,
    color = BaseColors.Blue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    marginTop,
    children,
}: ToggleButtonProps) => {
    const [activeToggleButtonItem, setActiveToggleButtonItem] = useState<any|null>(defaultValue);

    useEffect(() => {
        handleSelect(activeToggleButtonItem);
    }, [activeToggleButtonItem]);

    return (
        <div className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor,
            parseMarginTopClassNames(marginTop),
            'flex-nowrap inline-flex justify-start rounded-md p-1'
        ) }
        >
            { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                    privateProps: {
                        setActiveToggleButtonItem: setActiveToggleButtonItem,
                        isActive: activeToggleButtonItem === child.props.value,
                        color: color,
                    }
                })
            )) }
        </div>
    );
};

export default ToggleButton;
