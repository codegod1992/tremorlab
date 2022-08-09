import React from 'react';

import { ValueFormater, defaultValueFormater } from '@utils/utils';
import { classNames, getColorVariantsFromColorThemeValue, parseMarginTopClassNames } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import BaseComponentProps from '@common/BaseComponentInterface';
import colorTheme from '@utils/colorTheme';


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

export interface TextBarProps extends BaseComponentProps {
    data: TextBarData[],
    valueFormater: ValueFormater,
    color?: string,
}

const TextBar = ({
    data,
    color = BaseColors.Blue,
    valueFormater = defaultValueFormater,
    marginTop,
}: TextBarProps) => {
    const widths = getWidthsFromValues(data);

    const rowHeight = 'h-8';

    return (
        <div className={ classNames(
            'flex justify-between space-x-8',
            parseMarginTopClassNames(marginTop),
        ) }>
            <div className="relative w-full">
                { data.map((item, idx) => (
                    <div
                        className={ classNames(
                            rowHeight,
                            getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor,
                            'rounded-sm mb-2 flex items-center px-2'
                        ) }
                        style={ { width: `${widths[idx]}%` } }
                    >
                        <span className="absolute left-2 whitespace-nowrap truncate text-sm text-gray-700 max-w-full">
                            { item.name }
                        </span>
                    </div>
                )) }
            </div>
            <div className="text-right min-w-min">
                { data.map((item) => (
                    <div className={ classNames(
                        rowHeight,
                        'flex justify-end items-center mb-2 text-gray-700',
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
