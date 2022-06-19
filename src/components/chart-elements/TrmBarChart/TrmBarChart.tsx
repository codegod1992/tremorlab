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
    alignVertical?: boolean,
    stack?: boolean,
}

const TrmBarChart = ({
    data,
    attributes,
    colors = themeColorRange,
    valueFormater = defaultValueFormater,
    alignVertical = false,
    stack = true,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: TrmBarChartProps) => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
            data={ data }
            layout={ alignVertical ? 'vertical' : 'horizontal' }
            stackOffset={ stack ? 'expand' : undefined }
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

            { !alignVertical ? (
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
                    tickFormatter={ valueFormater }
                />
            )}
            { !alignVertical ? (
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
                    tickFormatter={ valueFormater }
                />
            ) : (
                <YAxis
                    hide={ !showYAxis }
                    dataKey="name"
                    axisLine={ false }
                    tickLine={ false }
                    width={80}
                    type="category"
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
                                valueFormater={ valueFormater }
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
);

export default TrmBarChart;
