import React from 'react';

import {
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import { fontSize, fontWeight } from 'lib/font';
import { BaseColors } from 'lib/primitives';
import colorTheme from 'lib/colors';

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
