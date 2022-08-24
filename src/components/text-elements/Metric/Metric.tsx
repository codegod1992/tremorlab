import React from 'react';

import {
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
} from 'lib';
import { Color, MarginTop } from '../../../lib';

export interface MetricProps {
    color?: Color,
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Metric = ({
    color = BaseColors.Gray,
    marginTop = 'mt-0',
    children,
}: MetricProps) => {
    return(
        <div className={ classNames(marginTop) }>
            <p className={ classNames(
                'shrink-0 truncate',
                getColorVariantsFromColorThemeValue(colorTheme[color].darkText).textColor,
                fontSize.threeXl,
                fontWeight.lg,
            ) }
            >
                { children }
            </p>
        </div>
    );
};

export default Metric;
