import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classname-utils';
import colorTheme, { defaultColors, themeColorRange } from '@utils/colorTheme';

const ChartLegend = ({ payload }: any, colors: string[] = themeColorRange) => {
    return (
        <ul className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            'flex items-center space-x-6 justify-end text-sm'
        ) }>
            {payload.map((entry: any, idx: number) => (
                <li key={`item-${idx}`} className="flex items-center space-x-1.5">
                    <div className={ classNames(
                        getColorVariantsFromColorThemeValue(colorTheme[colors[idx]].background).bgColor,
                        'w-2.5 h-2.5 rounded-full'
                    ) } />
                    <div>{ entry.value }</div>
                </li>
            ))}
        </ul>
    );
};

export default ChartLegend;
