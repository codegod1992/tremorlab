import React from 'react';

import { classNames, getColorVariantsFromColorThemeValue } from '@utils/classnameUtils';
import colorTheme, { defaultColors, themeColorRange } from '@utils/colorTheme';
import { ValueFormater } from '@utils/utils';

export interface ChartTooltipRowProps {
    value: string,
    name: string,
    color: string,
}

const ChartTooltipRow = ({ value, name, color }: ChartTooltipRowProps) => (
    <div className="flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-2">
            <span className={ classNames(
                getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                'w-3 h-3 rounded-full border-2 border-white shadow'
            ) } />
            <p className={ classNames(
                getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                'font-medium tabular-nums text-right'
            ) }>
                { value }
            </p>
        </div>
        <p className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            'font-normal'
        ) }>
            { name }
        </p>
    </div>
);

export interface ChartTooltipProps {
    active: boolean | undefined,
    payload: any,
    label: string,
    colors?: string[],
    valueFormater: ValueFormater,
}

const ChartTooltip = ({ active, payload, label, colors = themeColorRange, valueFormater }: ChartTooltipProps) => {
    if (active && payload) {
        return (
            <div className="bg-white border text-sm shadow-lg rounded-md">
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
                    'py-2 px-4 border-b'
                ) }>
                    <p className={ classNames(
                        getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                        'font-medium'
                    ) }>
                        { label }
                    </p>
                </div>
  
                <div className="pt-2.5 pb-2.5 px-4 space-y-1">
                    {
                        payload.map(({value, name}: { value: number, name: string }, idx: number) => (
                            <ChartTooltipRow
                                key={ `id-${idx}` }
                                value={ valueFormater(value) }
                                name={ name }
                                color={ colors[idx] }
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
  
    return null;
};

export default ChartTooltip;
