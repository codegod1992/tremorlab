import React, { useEffect, useState } from 'react';

import { BaseColors, classNames, defaultColors, getColorVariantsFromColorThemeValue, spacing } from 'lib';
import { Colors, TwMarginTop } from '../../../lib';

export interface ToggleProps {
    defaultValue?: any,
    color?: Colors,
    handleSelect?: { (value: any): void },
    children: React.ReactElement[],
    marginTop?: TwMarginTop,
}

const Toggle = ({
    defaultValue,
    color = BaseColors.Blue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    marginTop = 'mt-0',
    children,
}: ToggleProps) => {
    const [activeToggleItem, setActiveToggleItem] = useState<any|null>(defaultValue);

    useEffect(() => {
        handleSelect(activeToggleItem);
    }, [activeToggleItem]);

    return (
        <div className={ classNames(
            'flex-nowrap inline-flex justify-start rounded-md',
            getColorVariantsFromColorThemeValue(defaultColors.lightBackground).bgColor,
            marginTop,
            spacing.twoXs.paddingLeft,
            spacing.twoXs.paddingRight,
            spacing.twoXs.paddingTop,
            spacing.twoXs.paddingBottom,
        ) }
        >
            { React.Children.map(children, (child) => (
                React.cloneElement(child, {
                    privateProps: {
                        setActiveToggleItem: setActiveToggleItem,
                        isActive: activeToggleItem === child.props.value,
                        color: color,
                    }
                })
            )) }
        </div>
    );
};

export default Toggle;
