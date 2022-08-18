import React from 'react';

import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import ChartLegend from '@common/ChartLegend';
import { ChartProps } from '@common/commonTypes';
import ChartTooltip from '@common/ChartTooltip';

import colorTheme, { themeColorRange } from 'lib/colorTheme';
import { defaultValueFormater } from 'lib/utils';
import { getHexFromColorThemeValue } from 'lib/classnameUtils';

const TrmAreaChart = ({
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
    paddingBottomPixels = 20,
    paddingLeftPixels = 5,
}: ChartProps) => (
    <div className="w-full" style={ { 'height': `${height}px` } }>
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={ data }
                margin={ {
                    top: paddingTopPixels,
                    right: paddingRightPixels,
                    left: paddingLeftPixels,
                    bottom: paddingBottomPixels,
                } }
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
                    tick={ { transform: 'translate(0, 6)' } } //padding between labels and axis
                    ticks={ startEndOnly ? [data[0][dataKey], data[data.length - 1][dataKey]] : undefined }
                    style={ {
                        fontSize: '12px',
                        fontFamily: 'Inter; Helvetica',
                        marginTop: '20px',
                    } }
                    interval="preserveStartEnd"
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
                    tickFormatter={ valueFormater }
                />
                <Tooltip
                    isAnimationActive={false}
                    cursor={{ stroke: '#d1d5db', strokeWidth: 1 }}
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
                    position={ { y: 0 } }
                />
                { showLegend ? (
                    <Legend
                        verticalAlign="top"
                        height={ 60 }
                        content={ ({ payload }) => ChartLegend({ payload }, colors) }
                    />
                ) : null }
                { categories.map((category, idx) => (
                    <>
                        <defs key={ category }>
                            <linearGradient id={ colors[idx] } x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            key={ category }
                            name={ category }
                            type="linear"
                            dataKey={ category }
                            stroke={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                            fill={ `url(#${colors[idx]})` }
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                        />
                    </>
                ))}
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export default TrmAreaChart;
