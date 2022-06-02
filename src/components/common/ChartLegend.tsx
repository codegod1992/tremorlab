import React from 'react';

const ChartLegend = ({ payload }: any) => {
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

export default ChartLegend;
