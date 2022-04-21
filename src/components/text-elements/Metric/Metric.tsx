import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface MetricProps {
    value: string,
    context?: string,
    valueTextColor?: string,
    contexTextColor?: string
}

const Metric = ({
    value,
    context,
    valueTextColor = 'text-gray-600',
    contexTextColor = 'text-gray-400',
}: MetricProps) => {
    return(
        <div className="flex justify-start items-baseline space-x-2">
            <p className={ classNames(
                parseTextColorClassNames(valueTextColor),
                'text-3xl shrink-0 font-semibold'
            ) }
            >
                { value }
            </p>
            {context ? (
                <p className={ classNames(
                    parseTextColorClassNames(contexTextColor),
                    'text-sm shrink-0 font-normal'
                ) }
                >
                    { context }
                </p>
            ) : null}
        </div>
    );
};

export default Metric;
