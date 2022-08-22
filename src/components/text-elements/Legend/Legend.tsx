import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import colorTheme, { defaultColors, themeColorRange } from 'lib/colors';
import { fontSize, fontWeight } from 'lib/font';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

export interface LegendItemProps {
    name: string,
    color: string,
}

const LegendItem = ({
    name,
    color,
}: LegendItemProps) => (
    <li className={ classNames(
        'inline-flex items-center truncate',
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
        spacing.md.marginRight,
    ) }
    >
        <svg
            className={ classNames(
                'flex-none',
                getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
                sizing.xs.height,
                sizing.xs.width,
                spacing.xs.marginRight,
            ) }
            fill="currentColor"
            viewBox="0 0 8 8"
        >
            <circle cx={4} cy={4} r={4} />
        </svg>
        <p className={ classNames(
            'whitespace-nowrap truncate',
            fontSize.sm,
            fontWeight.sm,
        ) }>
            { name }
        </p>
    </li>
);


export interface LegendProps {
    categories: string[],
    colors?: string[],
    marginTop?: string,
}

const Legend = ({
    categories,
    colors = themeColorRange,
    marginTop,
}: LegendProps) => {
    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            <ol className="flex flex-wrap overflow-hidden truncate">
                { categories.map((category, idx) => (
                    <LegendItem key={ `item-${idx}` } name={ category } color={ colors[idx] } />
                )) }
            </ol>
        </div>
    );
};

export default Legend;
