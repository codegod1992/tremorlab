import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
} from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';

export interface LegendItemProps {
    name: string,
    color: string,
}

const LegendItem = ({
    name,
    color,
}: LegendItemProps) => (
    <div className={ classNames(
        'mx-2 inline-flex items-center text-sm font-normal whitespace-nowrap',
        getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
    ) }
    >
        <svg
            className={ classNames(
                '-ml-1 mr-1.5 h-2 w-2 flex-none',
                getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            ) }
            fill="currentColor"
            viewBox="0 0 8 8"
        >
            <circle cx={4} cy={4} r={3} />
        </svg>
        { name }
    </div>
);

export interface LegendProps {
    items: LegendItemProps[],
}

const Legend = ({
    // fixedHeight = 'h-20',
    items,
}: LegendProps) => {
    return(
        <>
            <div className="flow-root">
                <div className="-mx-1 flex flex-wrap overflow-hidden truncate">
                    { items.map((item, idx) => (
                        <LegendItem key={ `item-${idx}` } name={ item.name } color={ item.color } />
                    )) }
                </div>
            </div>
        </>
    );
};

export default Legend;
