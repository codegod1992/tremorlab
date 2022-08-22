import React, { useEffect, useState } from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from 'lib/classnameUtils';
import { BaseColors } from 'lib/primitives';
import { defaultColors } from 'lib/colorTheme';
import { spacing } from 'lib/spacing';

export interface ToggleProps {
    defaultValue?: any,
    color?: string,
    handleSelect?: { (value: any): void },
    children: React.ReactElement[],
    marginTop?: string,
}

const Toggle = ({
    defaultValue,
    color = BaseColors.Blue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handleSelect = (value) => null,
    marginTop,
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
            parseMarginTopClassNames(marginTop),
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
