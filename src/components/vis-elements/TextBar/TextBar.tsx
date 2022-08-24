import React from 'react';

import {
    BaseColors,
    classNames,
    colorTheme,
    defaultColors,
    defaultValueFormater,
    fontSize,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing
} from 'lib';
import { Color, MarginTop, ValueFormater } from '../../../lib';

type TextBarData = {
    value: number,
    name: string,
}

const getWidthsFromValues = (data: TextBarData[]) => {
    let maxValue = -Infinity;
    data.forEach(item => {
        maxValue = Math.max(maxValue, item.value);
    });

    return data.map(item => (item.value / maxValue) * 100);
};

export interface TextBarProps {
    data: TextBarData[],
    valueFormater?: ValueFormater,
    color?: Color,
    marginTop?: MarginTop,
}

const TextBar = ({
    data,
    color = BaseColors.Blue,
    valueFormater = defaultValueFormater,
    marginTop = 'mt-0',
}: TextBarProps) => {
    const widths = getWidthsFromValues(data);

    const rowHeight = sizing.threeXl.height;

    return (
        <div className={ classNames(
            'flex justify-between',
            marginTop,
            spacing.threeXl.spaceX,
        ) }>
            <div className="relative w-full">
                { data.map((item, idx) => (
                    <div
                        key={ item.value }
                        className={ classNames(
                            'flex items-center rounded-sm',
                            rowHeight,
                            getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor,
                            spacing.sm.paddingLeft,
                            spacing.sm.paddingRight,
                            idx === data.length - 1 ? spacing.none.marginBottom : spacing.sm.marginBottom,
                        ) }
                        style={ { width: `${widths[idx]}%` } }
                    >
                        <p className={ classNames(
                            'absolute max-w-full whitespace-nowrap truncate',
                            getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                            spacing.sm.left,
                            fontSize.sm,
                        ) }>
                            { item.name }
                        </p>
                    </div>
                )) }
            </div>
            <div className="text-right min-w-min">
                { data.map((item, idx) => (
                    <div
                        key={ item.value }
                        className={ classNames(
                            'flex justify-end items-center',
                            rowHeight,
                            getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                            idx === data.length - 1 ? spacing.none.marginBottom : spacing.sm.marginBottom,
                        ) }
                    >
                        { valueFormater(item.value) }
                    </div>
                )) }
            </div>
        </div>
    );
};

export default TextBar;
