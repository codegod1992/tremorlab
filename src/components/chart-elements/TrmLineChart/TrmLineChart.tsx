import React from 'react';

import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
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

const TrmLineChart = ({
    data,
    categories,
    dataKey,
    colors = themeColorRange,
    valueFormater = defaultValueFormater,
    startEndOnly = false,
    showXAxis = true,
    showYAxis = true,
    yAxisWidth,
    showTooltip = true,
    showLegend = true,
    showGridLines = true,
    height = 300,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: ChartProps) => {
    return (
        <div className="w-full" style={ { 'height': `${height}px` } }>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={ data }
                    margin={{
                        top: paddingTopPixels,
                        right: paddingRightPixels,
                        left: paddingBottomPixels,
                        bottom: paddingLeftPixels,
                    }}
                >
                    { showGridLines ? (
                        <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal={ true }
                            vertical={ false }
                        />
                    ) : null }
                    <XAxis
                        hide={ !showXAxis }
                        dataKey={ dataKey }
                        interval="preserveStartEnd"
                        tick={{ transform: 'translate(0, 6)' }} //padding between labels and axis
                        ticks={ startEndOnly ? [data[0][dataKey], data[data.length - 1][dataKey]] : undefined }
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                            marginTop: '20px',
                        }}
                        tickLine={ false }
                        axisLine={ false }
                    />
                    <YAxis
                        width={ yAxisWidth }
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
                        tickFormatter={ valueFormater  }
                    />
                    <Tooltip
                        isAnimationActive={ false }
                        cursor={ { stroke: '#d1d5db', strokeWidth: 1 } }
                        content={ ({ active, payload, label }) => (
                            showTooltip
                                ? (
                                    <ChartTooltip
                                        active={ active }
                                        payload={ payload }
                                        label={ label }
                                        valueFormater={ valueFormater }
                                        colors={ colors }
                                    />
                                )
                                : null
                        ) }
                        position={{ y: 0 }}
                    />
                    { showLegend ? (
                        <Legend
                            verticalAlign="top"
                            height={ 40 }
                            content={ ({ payload }) => ChartLegend({ payload }, colors) }
                        />
                    ) : null }
                    { categories.map((category, idx) => (
                        <Line
                            key={ category }
                            name={ category }
                            type="linear"
                            dataKey={ category }
                            stroke={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                            strokeWidth={ 2 }
                            dot={ false }
                            isAnimationActive={ false }
                        />
                    )) }
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TrmLineChart;
