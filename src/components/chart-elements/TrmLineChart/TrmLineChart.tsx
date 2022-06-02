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

import { defaultValueFormater } from '@utils/utils';

const TrmLineChart = ({
    data,
    attributes,
    valueFormater = defaultValueFormater,
}: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={ data }
                margin={{
                    top: 5,
                    right: 20,
                    left: 5,
                    bottom: 5,
                }}
            >
                <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={ true }
                    vertical={ false }
                />
                <XAxis
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
                        <ChartTooltip active={ active } payload={ payload } label={ label } />
                    ) }
                    position={{ y: 0 }}
                />
                <Legend
                    verticalAlign="top"
                    height={ 40 }
                    content={ ChartLegend }
                />
                { attributes.map((attribute) => (
                    <Line
                        type="linear"
                        dataKey={ attribute }
                        stroke="#3b82f6"
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
