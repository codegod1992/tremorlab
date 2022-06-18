import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import {
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { BaseColors } from '@utils/objects'; 
import { colors } from './mappings';
import { defaultColors } from '@utils/colorTheme';

export interface MetricProps extends BaseComponentProps {
    value: string,
    name?: string,
    color?: string,
}

const Metric = ({
    value,
    name,
    color = BaseColors.Gray,
    marginTop
}: MetricProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            { name ? (
                <p className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
                    'text-sm font-normal'
                ) }>
                    { name }
                </p>
            ) : null}
            <p className={ classNames(
                colors[color].textColor,
                'text-3xl shrink-0 font-semibold'
            ) }
            >
                { value }
            </p>
        </div>
    );
};

export default Metric;
