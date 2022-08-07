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
}

const TrmBarChart = ({
    data,
    attributes,
    dataKey = 'name',
    colors = themeColorRange,
    valueFormaterY = defaultValueFormater,
    layout = 'horizontal',
    stack = true,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    height = 300,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: TrmBarChartProps) => (
    <div style={ { 'height': `${height}px` } }>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={ data }
                layout={ layout === 'vertical' ? 'vertical' : 'horizontal' }
                margin={{
                    top: paddingTopPixels,
                    right: paddingRightPixels,
                    left: paddingLeftPixels,
                    bottom: paddingBottomPixels,
                }}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={ true }
                    vertical={ false }
                />

                { layout !== 'vertical' ? (
                    <XAxis
                        hide={ !showXAxis }
                        dataKey={ dataKey }
                        padding={{ left: 30, right: 30 }}
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
                        padding={{ left: 30, right: 30 }}
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
                        tickFormatter={ valueFormaterY }
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
                    attributes.map((attribute, idx) => (
                        <Bar
                            key={ `item-${idx}` }
                            name={ attribute }
                            type="linear"
                            stackId={ stack ? 'a' : undefined }
                            dataKey={ attribute }
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
