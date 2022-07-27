import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';


type TextBarData = {
    value: number,
    name: string
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
    color?: string,
}

const TextBar = ({
    data,
    color = BaseColors.Blue,
}: TextBarProps) => {
    const widths = getWidthsFromValues(data);

    const rowHeight = 'h-8';

    return (
        <div className="flex justify-between space-x-8">
            <div className="w-5/6">
                <div className="w-full mt-3">
                    { data.map((item, idx) => (
                        <div
                            className={ classNames(
                                rowHeight,
                                getColorVariantsFromColorThemeValue(colorTheme[color].lightBackground).bgColor,
                                'rounded-sm mb-2 flex items-center px-2'
                            ) }
                            style={ { width: `${widths[idx]}%` } }
                        >
                            <span className="whitespace-nowrap truncate text-sm text-gray-700 min-w-[10em]
                                md:min-w-[20em]">
                                { item.name }
                            </span>
                        </div>
                    )) }
                </div>
            </div>
            <div className="text-right text-right w-1/6">
                <div className="mt-3">
                    { data.map((item) => (
                        <div className={ classNames(
                            rowHeight,
                            'flex items-center mb-2 text-gray-700 text-right flex justify-end',
                        ) }
                        >
                            { item.value }
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default TextBar;
