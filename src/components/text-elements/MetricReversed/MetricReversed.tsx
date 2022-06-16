import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseMarginTopClassNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface MetricProps extends BaseComponentProps {
    value: string,
    name?: string,
    valueTextColor?: string,
    nameTextColor?: string,
}

const MetricReversed = ({
    value,
    name,
    valueTextColor = 'text-gray-600',
    nameTextColor = 'text-gray-600',
    marginTop
}: MetricProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <p className={ classNames(
                parseTextColorClassNames(valueTextColor),
                'text-3xl shrink-0 font-semibold'
            ) }
            >
                { value }
            </p>
            { name ? (
                <p className={ classNames(
                    parseTextColorClassNames(nameTextColor),
                    'text-sm font-normal'
                ) }>
                    { name }
                </p>
            ) : null}
        </div>
    );
};

export default MetricReversed;
