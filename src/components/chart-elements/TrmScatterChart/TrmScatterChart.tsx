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

import { ValueFormater, defaultValueFormater } from '@utils/utils';
import colorTheme, { themeColorRange } from '@utils/colorTheme';
import ChartLegend from '@common/ChartLegend';
import { ChartProps } from '@common/common-types';
import ScatterChartTooltip from 'components/chart-elements/TrmScatterChart/Tooltip';
import { getHexFromColorThemeValue } from '@utils/classname-utils';

interface ReferenceLine {
    position: number,
    label: string | null,
}

export interface ScatterChartProps extends ChartProps {
    attributeX: string,
    attributeY: string,
    scoreAttribute: string,
    dataKeyX?: string,
    dataKeyY?: string,
    dataKeyZ?: string,
    referenceLineX?: ReferenceLine | null,
    referenceLineY?: ReferenceLine | null,
    valueFormaterX?: ValueFormater,
    valueFormaterZ?: ValueFormater,
}

const TrmScatterChart = ({
    data,
    categories,
    attributeX,
    attributeY,
    dataKeyX = 'x',
    dataKeyY = 'y',
    dataKeyZ = 'z',
    scoreAttribute = 'Score',
    colors = themeColorRange,
    valueFormaterX = defaultValueFormater,
    valueFormaterY = defaultValueFormater,
    valueFormaterZ = defaultValueFormater,
    showXAxis = true,
    showYAxis = true,
    showTooltip = true,
    showLegend = true,
    showGridLines = true,
    referenceLineX = null,
    referenceLineY = null,
    height = 300,
    paddingTopPixels = 5,
    paddingRightPixels = 15,
    paddingBottomPixels = 5,
    paddingLeftPixels = 5,
}: ScatterChartProps) => {
    return (
        <div className="w-full" style={ { 'height': `${height}px` } }>
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
                    { showGridLines ? (
                        <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal={ false }
                            vertical={ false }
                        />
                    ) : null }
                    <XAxis
                        hide={ !showXAxis }
                        dataKey={ dataKeyX }
                        name={ attributeX }
                        type="number"
                        interval="preserveStartEnd"
                        tick={{ transform: 'translate(0, 6)' }} 
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                            fill: '#475569',
                        }}
                        tickLine={ false }
                        axisLine={ true }
                        stroke="#cbd5e1"
                        tickFormatter={ valueFormaterX }
                    />
                    <YAxis
                        hide={ !showYAxis }
                        dataKey={ dataKeyY }
                        name={ attributeY }
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
                        tickFormatter={ valueFormaterY }
                    />
                    <ZAxis
                        dataKey={ dataKeyZ }
                        name={ scoreAttribute }
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
                                        valueFormater={ valueFormaterY }
                                    />
                                )
                                : null
                        ) }
                    />

                    { showLegend ? (
                        <Legend
                            verticalAlign="top"
                            height={ 50 }
                            content={ ({ payload }) => ChartLegend({ payload }, colors) }
                        />
                    ) : null }

                    { referenceLineX ? (
                        <ReferenceLine 
                            x={ referenceLineX.position }
                            stroke="#9ca3af"
                            strokeDasharray="3 3" >
                            <Label
                                value={ referenceLineX.label || '' }
                                position="insideBottomRight"
                                style={{ fontSize: 12, fill: '#6b7280'}}
                            />
                        </ReferenceLine>
                    ) : null }

                    { referenceLineY ? (
                        <ReferenceLine
                            y={ referenceLineY.position }
                            stroke="#9ca3af" 
                            strokeDasharray="3 3" >
                            <Label
                                value={ referenceLineY.label || '' }
                                position="insideBottomLeft"
                                style={{ fontSize: 12, fill: '#6b7280' }}
                            />
                        </ReferenceLine>

                    ) : null }

                    { data.map((dataset, idx) => (
                        <Scatter
                            name={ categories[idx] }
                            data={ dataset }
                            fill={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                            fillOpacity="0.7"
                            stroke={ getHexFromColorThemeValue(colorTheme[colors[idx]].background) }
                            strokeWidth={ 1 }
                        />
                    ))}
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TrmScatterChart;
