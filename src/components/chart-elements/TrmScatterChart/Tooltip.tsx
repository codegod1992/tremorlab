import React from 'react';
import { ValueFormater } from '@utils/utils';

export interface ChartTooltipRowProps {
    value: string,
    name: string,
}

const ChartTooltipRow = ({ value, name }: ChartTooltipRowProps) => (
    <div className="flex items-center justify-between space-x-8">
        <p className="text-gray-700 font-medium">{ value }</p>
        <p className="text-gray-500 font-normal">{ name }</p>
    </div>
);

export interface ChartTooltipProps {
    active: boolean | undefined,
    payload: any,
    label: string,
    valueFormater: ValueFormater,
}

const ScatterChartTooltip = ({ active, payload, valueFormater }: ChartTooltipProps) => {
    if (active && payload) {
        return (
            <div className="bg-white border text-xs shadow-lg rounded-md">
                <div className="py-2.5 px-4 space-y-1">
                    {
                        payload.map(({value, name}: { value: number, name: string }, idx: number) => (
                            <ChartTooltipRow value={ String(value) } name={ name } key={ `id-${idx}` } />
                        ))
                    }
                </div>
            </div>
        );
    }
  
    return null;
};

export default ScatterChartTooltip;
