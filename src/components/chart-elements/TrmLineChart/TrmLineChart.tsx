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
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: ChartProps) => {
    return (
        <div style={ { 'height': `${height}px` } }>
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
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                            marginTop: '20px',
                        }}
                        tickLine={ false }
                        axisLine={ false }
                    />
                    <YAxis
                        hide={ !showYAxis }
                        orientation={ yAxisOrientation === 'right' ? 'right' : 'left' }
                        axisLine={ false }
                        tickLine={ false }
                        type="number"
                        domain={ [0, 'auto'] }
                        tick={ { transform: 'translate(-3, 0)' } } //padding between labels and axis
                        style={ {
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                        } }
                        tickFormatter={ valueFormaterY  }
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
                                        valueFormater={ valueFormaterY }
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
                    { attributes.map((attribute, idx) => (
                        <Line
                            key={ `item-${idx}` }
                            name={ attribute }
                            type="linear"
                            dataKey={ attribute }
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
