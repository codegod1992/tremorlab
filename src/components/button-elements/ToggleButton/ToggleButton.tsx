import React, { useEffect, useState } from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import BaseComponentProps from '@common/BaseComponentInterface';
import { defaultColors } from '@utils/colorTheme';

export interface ToggleButtonProps extends BaseComponentProps {
    defaultValue: any,
    size?: string,
    color?: string,
    handleSelect: {(value: any): void},
    children: React.ReactElement[],
}

const ToggleButton = ({
    defaultValue,
    size = Sizes.MD,
    color = BaseColors.Blue,
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
                    buttonSize: size,
                    setActiveToggleButtonItem: setActiveToggleButtonItem,
                    isActive: activeToggleButtonItem === child.props.value,
                    color: color,
                })
            )) }
        </div>
    );
};

export default ToggleButton;
