import React from 'react';

import { Color, ValueFormatter } from '../../../lib';
import {
    border,
    borderRadius,
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    spacing,
    themeColorRange
} from 'lib';

export interface ChartTooltipRowProps {
    value: string,
    name: string,
    color: Color,
}

const ChartTooltipRow = ({ value, name, color }: ChartTooltipRowProps) => (
    <div className="flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-2">
            <span className={ classNames(
                'w-3 h-3 shadow',
                getColorVariantsFromColorThemeValue(getColorTheme(color).background).bgColor,
                getColorVariantsFromColorThemeValue(defaultColors.border).borderColor,
                borderRadius.full.all,
                border.md.all,
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
    colors?: Color[],
    valueFormatter: ValueFormatter,
}

const ChartTooltip = ({ active, payload, label, colors = themeColorRange, valueFormatter }: ChartTooltipProps) => {
    if (active && payload) {
        return (
            <div className={ classNames(
                'shadow-lg',
                getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                fontSize.sm,
                borderRadius.md.all,
                border.sm.all,
            ) }>
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    border.sm.bottom,
                ) }>
                    <p className={ classNames(
                        getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                        fontWeight.md,
                    ) }>
                        { label }
                    </p>
                </div>
  
                <div className={ classNames(
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    'space-y-1',
                ) }>
                    {
                        payload.map(({value, name}: { value: number, name: string }, idx: number) => (
                            <ChartTooltipRow
                                key={ `id-${idx}` }
                                value={ valueFormatter(value) }
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
