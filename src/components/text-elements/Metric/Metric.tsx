import React from 'react';

import {
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from '@utils/classname-utils';
import { BaseColors } from '@utils/objects';
import colorTheme from '@utils/colorTheme';

export interface MetricProps {
    color?: string,
    marginTop?: string,
    children: React.ReactNode,
}

const Metric = ({
    color = BaseColors.Gray,
    marginTop,
    children,
}: MetricProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <p className={ classNames(
                getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
                'text-3xl shrink-0 font-semibold'
            ) }
            >
                { children }
            </p>
        </div>
    );
};

export default Metric;
