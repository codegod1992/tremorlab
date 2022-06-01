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

import ChartTooltip from '@common/ChartTooltip';

const renderLegend = ({ payload }: any) => {
    return (
        <ul className="flex items-center space-x-6 justify-end text-sm text-gray-500">
            {payload.map((entry: any, index: number) => (
                <li key={`item-${index}`} className="flex items-center space-x-1.5">
                    <div className="bg-blue-500 w-2.5 h-2.5 rounded-full" />
                    <div>{ entry.value }</div>
                </li>
            ))}
        </ul>
    );
};

type ValueFormater = {
    (value: number): string
}

export interface TrmLineChartProps {
    data: any[],
    valueFormater?: ValueFormater,
}

const TrmLineChart = ({
    data,
    valueFormater = (number) => number.toString(),
}: TrmLineChartProps) => {
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
                    content={ renderLegend }
                />
                <Line
                    type="linear"
                    dataKey="Sales"
                    stroke="#d1d5db"
                    strokeWidth={ 2 }
                    dot={ false }
                    isAnimationActive={ false }
                />
                <Line
                    type="linear"
                    dataKey="Profit"
                    stroke="#3b82f6"
                    strokeWidth={ 2 }
                    dot={ false }
                    isAnimationActive={ false }
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default TrmLineChart;
