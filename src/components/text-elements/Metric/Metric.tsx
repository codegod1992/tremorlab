import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface MetricProps {
    value: string,
    name?: string,
    valueTextColor?: string,
    nameTextColor?: string
}

const Metric = ({
    value,
    name,
    valueTextColor = 'text-gray-600',
    nameTextColor = 'text-gray-600'
}: MetricProps) => {
    return(
        <div>
            { name ? (
                <p className={ classNames(
                    parseTextColorClassNames(nameTextColor),
                    'text-sm font-normal'
                ) }>
                    { name }
                </p>
            ) : null}
            <p className={ classNames(
                parseTextColorClassNames(valueTextColor),
                'text-3xl shrink-0 font-semibold'
            ) }
            >
                { value }
            </p>
        </div>
    );
};

export default Metric;
