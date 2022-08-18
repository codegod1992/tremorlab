// TODO: fix potitioning

import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseBorderClassNames,
    parseMarginTopClassNames,
    toBorderColorClass
} from '@utils/classnameUtils';
import colorTheme, { defaultColors, themeColorRange } from '@utils/colorTheme';

const BarLabels = ({ categoryPercentageValues }: {categoryPercentageValues: number[]}) => {
    let prefixSum = 0;
    return (
        <div className={ classNames(
            'relative text-sm flex w-full mb-2 space-x-1',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor
        ) }
        >
            { categoryPercentageValues.slice(0, categoryPercentageValues.length).map((widthPercentage, idx) => {
                prefixSum += widthPercentage;
                return (
                    <div
                        key={ `item-${idx}` }
                        className="flex items-center justify-end"
                        style={ { 'width': `${widthPercentage}%` } }
                    >
                        <span className={
                            classNames(idx === 0 && widthPercentage <= 10 ? 'hidden sm:inline-block' : '')
                        }
                        >
                            { prefixSum }
                        </span>
                    </div>
                );
            }) }
            <div className="absolute -left-1 top-0 flex items-center">
                0
            </div>
        </div>
    );
};

export interface CategoryBarProps {
    categoryPercentageValues: number[],
    colors?: string[],
    percentageValue?: number,
    showLabels?: boolean,
    tooltip?: string,
    marginTop?: string,
}

const CategoryBar = ({
    categoryPercentageValues,
    colors = themeColorRange,
    percentageValue,
    showLabels = true,
    tooltip,
    marginTop
}: CategoryBarProps) => {

    const getMarkerBorderColor = (): string => {
        if (percentageValue === undefined)
            return '';

        let prefixSum = 0;
        for (let i = 0; i < categoryPercentageValues.length; i++) {
            const currentWidthPercentage = categoryPercentageValues[i];
            const currentBgColor = getColorVariantsFromColorThemeValue(colorTheme[colors[i]].background).bgColor;

            prefixSum += currentWidthPercentage;
            if (prefixSum >= percentageValue)
                return toBorderColorClass(currentBgColor);
        }

        return '';
    };

    const markerBorderColor = getMarkerBorderColor();

    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            { showLabels ? <BarLabels categoryPercentageValues={ categoryPercentageValues } /> : null }
            <div className="relative h-2 w-full flex rounded-lg items-center space-x-1">
                {categoryPercentageValues.map((percentageValue, idx) => {
                    return(
                        <div key={ `item-${idx}` } style={ { width: `${percentageValue}%` } } className={ classNames(
                            getColorVariantsFromColorThemeValue(colorTheme[colors[idx]].background).bgColor,
                            'h-full rounded-md',
                        ) }
                        />
                    );
                })}
                { percentageValue!==undefined ? (
                    <div className="absolute" style={ { left: `${percentageValue}%` } }>
                        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                            <div
                                className={ classNames(
                                    'z-1 bg-white border-4 rounded-full h-4 w-4 shadow-md -translate-x-1',
                                    parseBorderClassNames(markerBorderColor),
                                ) }
                            />
                        </Tooltip>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default CategoryBar;
