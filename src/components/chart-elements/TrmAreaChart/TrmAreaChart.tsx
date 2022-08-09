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
import { ChartProps } from '@common/common-types';
import ChartTooltip from '@common/ChartTooltip';

import colorTheme, { themeColorRange } from '@utils/colorTheme';
import { defaultValueFormater } from '@utils/utils';
import { getHexFromColorThemeValue } from '@utils/classname-utils';

const TrmAreaChart = ({
    data,
    attributes,
    dataKey = 'name',
    colors = themeColorRange,
    valueFormaterY = defaultValueFormater,
    showXAxis = true,
    showYAxis = true,
    yAxisOrientation = 'left',
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
                    style={ {
                        fontSize: '12px',
                        fontFamily: 'Inter; Helvetica',
                        marginTop: '20px',
                    } }
                    tickLine={ false }
                    axisLine={ false }
                />
                <YAxis
                    orientation={ yAxisOrientation === 'right' ? 'right' : 'left' }
                    hide={ !showYAxis }
                    axisLine={ false }
                    tickLine={ false }
                    type="number"
                    domain={ [0, 'auto'] }
                    interval="preserveStartEnd"
                    tick={ { transform: 'translate(-3, 0)' } } //padding between labels and axis
                    style={ {
                        fontSize: '12px',
                        fontFamily: 'Inter; Helvetica',
                    } }
                    tickFormatter={ valueFormaterY }
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
                                    valueFormater={ valueFormaterY }
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
                { attributes.map((attribute, idx) => (
                    <>
                        <defs key={ `gradient-def-${idx}` }>
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
                            key={ attribute }
                            name={ attribute }
                            type="linear"
                            dataKey={ attribute }
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
