import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

import { classNames, parseMarginTopClassNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface MetricProps extends BaseComponentProps {
    value: string,
    name?: string,
    valueTextColor?: string,
    nameTextColor?: string,
}

const Metric = ({
    value,
    name,
    valueTextColor = 'text-gray-600',
    nameTextColor = 'text-gray-600',
    marginTop
}: MetricProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
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
