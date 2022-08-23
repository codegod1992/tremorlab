import React from 'react';

import {
    classNames,
    getColorVariantsFromColorThemeValue,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/text';
import { BaseColors } from 'lib/primitives';
import { TwMarginTop } from 'lib/inputTypes';
import colorTheme from 'lib/colors';

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
