import React from 'react';

import { ValueFormater } from '@utils/utils';

export interface ChartTooltipRowProps {
    value: string,
    name: string,
}

const ChartTooltipRow = ({ value, name }: ChartTooltipRowProps) => (
    <div className="flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow" />
            <p className="text-gray-700 font-medium">{ value }</p>
        </div>
        <p className="text-gray-500 font-normal">{ name }</p>
    </div>
);

export interface ChartTooltipProps {
    active: boolean | undefined,
    payload: any,
    label: string,
    valueFormater: ValueFormater,
}

const ChartTooltip = ({ active, payload, label, valueFormater }: ChartTooltipProps) => {
    if (active && payload) {
        return (
            <div className="bg-white border text-sm shadow-lg rounded-md">
                <div className="py-2 px-4 border-b border-gray-200">
                    <p className="text-gray-700 font-medium">{ label }</p>
                </div>
  
                <div className="pt-2.5 pb-2.5 px-4 space-y-1">
                    {
                        payload.map(({value, name}: { value: number, name: string }, idx: number) => (
                            <ChartTooltipRow value={ valueFormater(value) } name={ name } key={ `id-${idx}` } />
                        ))
                    }
                </div>
            </div>
        );
    }
  
    return null;
};

export default ChartTooltip;
