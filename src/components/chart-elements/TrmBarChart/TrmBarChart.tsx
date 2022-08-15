import React from 'react';

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import ChartLegend from '@common/ChartLegend';
import { ChartProps } from '@common/common-types';
import ChartTooltip from '@common/ChartTooltip';

import colorTheme, { themeColorRange } from '@utils/colorTheme';
import { defaultValueFormater } from '@utils/utils';
import { getHexFromColorThemeValue } from '@utils/classname-utils';

export interface TrmBarChartProps extends ChartProps {
    layout?: string,
    stack?: boolean,
    relative?: boolean,
}

const TrmBarChart = ({
    data,
    categories,
    dataKey = 'name',
    colors = themeColorRange,
    valueFormaterY = defaultValueFormater,
    layout = 'horizontal',
    stack = false,
    relative = false,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    showGridLines = true,
    height = 300,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: TrmBarChartProps) => (
    <div className="w-full" style={ { 'height': `${height}px` } }>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={ data }
                stackOffset={ relative ? 'expand' : 'none' }
                layout={ layout === 'vertical' ? 'vertical' : 'horizontal' }
                margin={{
                    top: paddingTopPixels,
                    right: paddingRightPixels,
                    left: paddingLeftPixels,
                    bottom: paddingBottomPixels,
                }}
            >
                { showGridLines ? (
                    <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={ true }
                        vertical={ false }
                    />
                ) : null }

                { layout !== 'vertical' ? (
                    <XAxis
                        hide={ !showXAxis }
                        dataKey={ dataKey }
                        interval="preserveStartEnd"
                        tick={{ transform: 'translate(0, 6)' }} //padding between labels and axis
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                            marginTop: '20px',
                        }}
                        tickLine={false}
                        axisLine={false}
                    />
                ) : (
                    <XAxis
                        hide={ !showXAxis }
                        type="number"
                        tick={{ transform: 'translate(0, 6)' }} //padding between labels and axis
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                            marginTop: '20px',
                        }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={ valueFormaterY }
                    />
                )}
                { layout !== 'vertical' ? (
                    <YAxis
                        hide={ !showYAxis }
                        axisLine={ false }
                        tickLine={ false }
                        type="number"
                        domain={ [0, 'auto'] }
                        tick={ { transform: 'translate(-3, 0)' } } //padding between labels and axis
                        style={ {
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                        } }
                        tickFormatter={ relative ? (value: number) => `${(value * 100).toString()} %` : valueFormaterY }
                    />
                ) : (
                    <YAxis
                        hide={ !showYAxis }
                        dataKey={ dataKey }
                        axisLine={ false }
                        tickLine={ false }
                        width={80}
                        type="category"
                        interval="preserveStartEnd"
                        tick={ { transform: 'translate(10, 0)' } } 
                        style={ {
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                        } }  
                    />
                ) }

                <Tooltip
                    isAnimationActive={false}
                    cursor={ { fill: '#d1d5db', opacity: '0.15' } }
                    content={ ({ active, payload, label }) => (
                        showTooltip
                            ? (
                                <ChartTooltip
                                    active={ active }
                                    payload={ payload }
                                    label={ label }
                                    valueFormater={ valueFormaterY }
                                    colors={ colors }
                                />
                            )
                            : null
                    ) }
                    position={{ y: 0 }}
                />
                {
                    showLegend ? (
                        <Legend
                            verticalAlign="top"
                            height={40}
                            content={ ({ payload }) => ChartLegend({ payload }, colors) }
                        />
                    ) : null
                }
                {
                    categories.map((category, idx) => (
                        <Bar
                            key={ category }
                            name={ category }
                            type="linear"
                            stackId={ stack || relative ? 'a' : undefined }
                            dataKey={ category }
                            fill={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                            isAnimationActive={false}
                        />

                    ))
                }
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default TrmBarChart;
