import React from 'react';

import {
    Area,
    AreaChart,
    CartesianGrid,
    Label,
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
    colors = themeColorRange,
    valueFormater = defaultValueFormater,
    showXAxis = true,
    showYAxis = true,
    yAxisOrientation = 'left',
    showTooltip = true,
    showLegend = true,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 20,
    paddingLeftPixels = 5,
}: ChartProps) => (
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
            <CartesianGrid
                strokeDasharray="3 3"
                horizontal={ true }
                vertical={ false }
            />
            <XAxis
                hide={ !showXAxis }
                dataKey="name"
                padding={ { left: 30, right: 30 } }
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
);

export default TrmAreaChart;
