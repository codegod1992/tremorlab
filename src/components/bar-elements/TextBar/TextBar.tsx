import React from 'react';

type TextBarData = {
    value: number,
    name: string
}

const getWidthsFromValues = (data: TextBarData[]) => {
    let total = 0;
    data.forEach(item => {
        total += item.value;
    });

    return data.map(item => (item.value / total) * 100);
};

export interface TextBarProps {
    label: string,
    attribute: string,
    data: TextBarData[],
    color?: string,
}

const TextBar = ({
    label,
    attribute,
    data,
    color,
}: TextBarProps) => {
    const widths = getWidthsFromValues(data);
    return (
        <div className="flex justify-between">
            <div className="w-full">
                <div className="text-large text-gray-700">
                    { label }
                </div>
                <div className="w-full mt-3">
                    { data.map((item, idx) => (
                        <div
                            className="h-8 rounded-sm bg-orange-100 mb-2 truncate flex items-center px-2"
                            style={ { width: `${widths[idx]}%` } }
                        >
                            <span className="whitespace-nowrap truncate text-sm text-gray-700">{ item.name }</span>
                        </div>
                    )) }
                </div>
            </div>
            <div className="w-28 text-left">
                <div className="text-large text-gray-700">
                    { attribute }
                </div>
                <div className="mt-3">
                    { data.map((item) => (
                        <div className="h-8 flex items-center mb-2">
                            <span className="text-gray-700">{ item.value }</span>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default TextBar;
