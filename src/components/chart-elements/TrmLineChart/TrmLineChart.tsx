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
    colors = themeColorRange,
    valueFormater = defaultValueFormater,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: ChartProps) => {
    return (
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
                <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={ true }
                    vertical={ false }
                />
                <XAxis
                    hide={ !showXAxis }
                    dataKey="name"
                    padding={{ left: 30, right: 30 }}
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
                { attributes.map((attribute, idx) => (
                    <Line
                        key={ `item-${idx}` }
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
    );
};

export default TrmLineChart;
