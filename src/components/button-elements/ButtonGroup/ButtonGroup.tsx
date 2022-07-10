import React, { useState } from 'react';

import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import BaseComponentProps from '@common/BaseComponentInterface';
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface ButtonGroupProps extends BaseComponentProps {
    defaultValue?: any,
    color?: string,
    handleClick: { (value: any): void }
    children: React.ReactElement[]
}

const ButtonGroup = ({
    defaultValue,
    color = BaseColors.Blue,
    handleClick,
    marginTop,
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
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
        getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.canvasBackground).hoverBgColor
    );
    return (
        <div className={ classNames(
            'inline-flex',
            parseMarginTopClassNames(marginTop),
        ) }>
            { React.Children.map(children, (child, idx) => {
                if (idx === 0) {
                    return (
                        <div key={ child.props.value } className={ classNames(
                            `inline-flex rounded-l-md border font-medium focus:z-10 focus:ring-2 focus:ring-opacity-100
                            focus:outline-none`,
                            activeButtonItem === child.props.value
                                ? activeColorClassNames
                                : inActiveColorClassNames
                        ) }
                        >
                            { React.cloneElement(child, {
                                privateProps: {
                                    setActiveButtonItem: setActiveButtonItem,
                                    handleClick: handleClick,
                                }
                            }) }
                        </div>
                    );
                }
                if (idx === childrenCount - 1) {
                    return (
                        <div key={ child.props.value } className={ classNames(
                            `inline-flex rounded-r-md border text-sm font-medium focus:z-10 focus:ring-2
                            focus:ring-opacity-100 focus:outline-none`,
                            activeButtonItem === child.props.value
                                ? activeColorClassNames
                                : inActiveColorClassNames
                        ) }
                        >
                            { React.cloneElement(child, {
                                privateProps: {
                                    setActiveButtonItem: setActiveButtonItem,
                                    handleClick: handleClick,
                                }
                            }) }
                        </div>
                    );
                }
                return (
                    <div key={ child.props.value } className={ classNames(
                        `inline-flex border focus:border-l text-sm font-medium focus:z-10 focus:ring-2
                        focus:ring-opacity-100 focus:outline-none`,
                        activeButtonItem === child.props.value
                            ? activeColorClassNames
                            : inActiveColorClassNames
                    ) }
                    >
                        { React.cloneElement(child, {
                            privateProps: {
                                setActiveButtonItem: setActiveButtonItem,
                                handleClick: handleClick,
                            } }
                        ) }
                    </div>
                );
            })}
        </div>
    );
};

export default ButtonGroup;
