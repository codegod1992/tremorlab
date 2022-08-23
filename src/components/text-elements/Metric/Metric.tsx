import React from 'react';

import {
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
} from 'lib';
import { TwMarginTop } from '../../../lib';

export interface MetricProps {
    color?: string,
    marginTop?: TwMarginTop,
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
