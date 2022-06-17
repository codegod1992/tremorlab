import React, { useState } from 'react';

import { BaseColors, Sizes } from '@utils/objects';
import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface ButtonGroupProps {
    defaultValue?: any,
    size: string,
    color?: string,
    children: React.ReactElement[]
}

const ButtonGroup = ({
    defaultValue,
    size = Sizes.MD,
    color = BaseColors.Blue,
    children,
}: ButtonGroupProps) => {
    const childrenCount = React.Children.count(children);
    const [activeButtonItem, setActiveButtonItem] = useState<any>(defaultValue);

    const activeColorClassNames = classNames(
        colors[color]['bgColor'],
        colors[color]['textColor'],
        colors[color]['borderColor']
    );
    const inActiveColorClassNames = classNames(
        getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
        getColorVariantsFromColorThemeValue(defaultColors.base).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.light).borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.canvas).hoverBgColor
    );
    return (
        <>
            { React.Children.map(children, (child, idx) => {
                if (idx === 0) {
                    return (
                        <div className={ classNames(
                            `inline-flex rounded-l-md border font-medium focus:z-10 focus:ring-2 focus:ring-opacity-100
                            focus:outline-none`,
                            activeButtonItem === child.props.value
                                ? activeColorClassNames
                                : inActiveColorClassNames
                        ) }
                        >
                            { React.cloneElement(child, {
                                setActiveButtonItem: setActiveButtonItem,
                                buttonSize: size,
                            }) }
                        </div>
                    );
                }
                if (idx === childrenCount - 1) {
                    return (
                        <div className={ classNames(
                            `inline-flex rounded-r-md border text-sm font-medium focus:z-10 focus:ring-2
                            focus:ring-opacity-100 focus:outline-none`,
                            activeButtonItem === child.props.value
                                ? activeColorClassNames
                                : inActiveColorClassNames
                        ) }
                        >
                            { React.cloneElement(child, {
                                setActiveButtonItem: setActiveButtonItem,
                                buttonSize: size,
                            }) }
                        </div>
                    );
                }
                return (
                    <div className={ classNames(
                        `inline-flex border focus:border-l text-sm font-medium focus:z-10 focus:ring-2
                        focus:ring-opacity-100 focus:outline-none`,
                        activeButtonItem === child.props.value
                            ? activeColorClassNames
                            : inActiveColorClassNames
                    ) }
                    >
                        { React.cloneElement(child, {
                            setActiveButtonItem: setActiveButtonItem,
                            buttonSize: size,
                        }) }
                    </div>
                );
            })}
        </>
    );
};

export default ButtonGroup;
