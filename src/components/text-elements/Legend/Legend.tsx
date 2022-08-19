import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseMarginTopClassNames,
} from 'lib/classnameUtils';
import colorTheme, { defaultColors, themeColorRange } from 'lib/colorTheme';

export interface LegendItemProps {
    name: string,
    color: string,
}

const LegendItem = ({
    name,
    color,
}: LegendItemProps) => (
    <li className={ classNames(
        'inline-flex items-center truncate mr-2.5',
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
    ) }
    >
        <svg
            className={ classNames(
                'mr-1.5 h-2 w-2 flex-none',
                getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            ) }
            fill="currentColor"
            viewBox="0 0 8 8"
        >
            <circle cx={4} cy={4} r={4} />
        </svg>
        <p className="text-sm font-normal whitespace-nowrap truncate">{ name }</p>
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
            <ol className="-mx-1 flex flex-wrap overflow-hidden truncate">
                { categories.map((category, idx) => (
                    <LegendItem key={ `item-${idx}` } name={ category } color={ colors[idx] } />
                )) }
            </ol>
        </div>
    );
};

export default Legend;
