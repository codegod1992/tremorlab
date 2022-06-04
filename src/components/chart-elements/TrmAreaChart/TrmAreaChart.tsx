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

import { defaultValueFormater } from '@utils/utils';

// export interface TrmAreaChartProps {
//     data: any[],
//     valueFormater?: ValueFormater,
// }

const TrmAreaChart = ({
    data,
    attributes,
    valueFormater = defaultValueFormater,
    showTooltip = true,
    showLegend = true,
    paddingTopPixels = 5,
    paddingRightPixels = 20,
    paddingBottomPixels = 5,
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
            <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
            />
            <XAxis
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
                    content={ ChartLegend }
                />
            ) : null }
            { attributes.map((attribute) => (
                <Area
                    type="linear"
                    dataKey={ attribute }
                    stroke="#3b82f6"
                    fill="url(#gradient)"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                />
            ))}
        </AreaChart>
    </ResponsiveContainer>
);

export default TrmAreaChart;
