import React from 'react';

import {
    CartesianGrid,
    Label,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from 'recharts';

import ChartLegend from '@common/ChartLegend';
import { ChartProps } from '@common/common-types';
import ScatterChartTooltip from '@common/ScatterChartTooltip';


import { defaultValueFormater } from '@utils/utils';



const TrmScatterChart = ({
    // Please add multiple scatter logic
    data,
    data2,
    valueFormater = defaultValueFormater,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    paddingTopPixels = 5,
    paddingRightPixels = 15,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: ChartProps) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
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
                    horizontal={ false }
                    vertical={ false }
                />
                <XAxis
                    hide={ !showXAxis }
                    dataKey="x"
                    name="stature"
                    unit="cm"
                    type="number"
                    tick={{ transform: 'translate(0, 6)' }} 
                    style={{
                        fontSize: '12px',
                        fontFamily: 'Inter; Helvetica',
                        fill: '#475569',
                    }}
                    tickLine={ false }
                    axisLine={ true }
                    stroke="#cbd5e1"
                />
                <YAxis
                    hide={ !showYAxis }
                    dataKey="y"
                    name="weight"
                    unit="kg"
                    axisLine={ true }
                    tickLine={ false }
                    stroke="#cbd5e1"
                    type="number"
                    domain={ [0, 'auto'] }
                    tick={ { transform: 'translate(-3, 0)' } } 
                    style={ {
                        fontSize: '12px',
                        fontFamily: 'Inter; Helvetica',
                        fill: '#475569',
                    } }                    
                    // tickFormatter={ valueFormater  }
                />
                <ZAxis
                    dataKey="z"
                    name="score"
                    range={[50, 2000]} 
                />
                <Tooltip
                    isAnimationActive={ false }
                    cursor={ { stroke: '#d1d5db', strokeWidth: 1 } }
                    content={ ({ active, payload, label }) => (
                        showTooltip
                            ? (
                                <ScatterChartTooltip
                                    active={ active }
                                    payload={ payload }
                                    label={ label }
                                    valueFormater={ valueFormater }
                                />
                            )
                            : null
                    ) }
                    // position={{ y: 0 }}
                />

                <ReferenceLine
                    y={160}
                    stroke="#9ca3af" 
                    strokeDasharray="3 3" >
                    <Label
                        value="Ø: 160kg" position="insideBottomLeft" style={{ fontSize: 12, fill: '#6b7280' }} />
                </ReferenceLine>

                <ReferenceLine 
                    x={142}
                    stroke="#9ca3af"
                    strokeDasharray="3 3" >
                    <Label
                        value="Ø: 142cm" position="insideBottomRight" style={{ fontSize: 12, fill: '#6b7280'}} />
                </ReferenceLine>

                <Scatter 
                    name="Blue" 
                    data={ data } 
                    fill="#3b82f6"
                    fillOpacity="0.7"
                    stroke="#3b82f6"
                    strokeWidth={1}
                />
                <Scatter 
                    name="Rose" 
                    data={ data2 } 
                    fill="#f43f5e"
                    fillOpacity="0.7"
                    stroke="#f43f5e"
                    strokeWidth={1}
                />
                { showLegend ? (
                    <Legend
                        verticalAlign="top"
                        height={ 50 }
                        content={ ({ payload }) => ChartLegend({ payload }) }
                    />
                ) : null }
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default TrmScatterChart;
