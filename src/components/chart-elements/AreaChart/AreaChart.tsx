import React from 'react';

import {
    Area,
    CartesianGrid,
    Legend,
    AreaChart as ReChartsAreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import BaseChartProps from '../common/BaseChartProps';
import ChartLegend from '../common/ChartLegend';
import ChartTooltip from '../common/ChartTooltip';

import { classNames, getHexFromColorThemeValue, getPixelsFromTwClassName } from 'lib/classnameUtils';
import { colorTheme, defaultValueFormater, themeColorRange } from 'lib';

const AreaChart = ({
    data,
    categories,
    dataKey,
    colors = themeColorRange,
    valueFormater = defaultValueFormater,
    startEndOnly = false,
    showXAxis = true,
    showYAxis = true,
    yAxisWidth = 'w-14',
    showTooltip = true,
    showLegend = true,
    showGridLines = true,
    height = 'h-80',
    paddingTop = 'pt-1',
    paddingRight = 'pr-5',
    paddingBottom = 'pb-5',
    paddingLeft = 'pl-1',
    marginTop = 'mt-0',
}: BaseChartProps) => (
    <div className={ classNames('w-full', height, marginTop) }>
        <ResponsiveContainer width="100%" height="100%">
            <ReChartsAreaChart
                data={ data }
                margin={ {
                    left: getPixelsFromTwClassName(paddingLeft), 
                    top: getPixelsFromTwClassName(paddingTop),
                    right: getPixelsFromTwClassName(paddingRight),
                    bottom: getPixelsFromTwClassName(paddingBottom),
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
                    width={ getPixelsFromTwClassName(yAxisWidth) }
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
            </ReChartsAreaChart>
        </ResponsiveContainer>
    </div>
);

export default AreaChart;
