// TODO: fix potitioning

import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    toBorderColorClass
} from 'lib/classnameUtils';
import colorTheme, { defaultColors, themeColorRange } from 'lib/colors';
import { TwMarginTop } from 'lib/inputTypes';
import { fontSize } from 'lib/text';
import { sizing } from 'lib/sizing';
import { spacing } from 'lib/spacing';

const BarLabels = ({ categoryPercentageValues }: {categoryPercentageValues: number[]}) => {
    let prefixSum = 0;
    return (
        <div className={ classNames(
            'relative flex w-full',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            spacing.twoXs.spaceX,
            spacing.sm.marginBottom,
            fontSize.sm,
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
    marginTop?: TwMarginTop,
}

const CategoryBar = ({
    categoryPercentageValues,
    colors = themeColorRange,
    percentageValue,
    showLabels = true,
    tooltip,
    marginTop = 'mt-0',
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
        <div className={ classNames(marginTop) }>
            { showLabels ? <BarLabels categoryPercentageValues={ categoryPercentageValues } /> : null }
            <div className={ classNames(
                'relative flex items-center w-full rounded-lg',
                sizing.xs.height,
                spacing.threeXs.spaceX,
            ) }
            >
                {categoryPercentageValues.map((percentageValue, idx) => {
                    return(
                        <div key={ `item-${idx}` } style={ { width: `${percentageValue}%` } } className={ classNames(
                            'h-full rounded-md',
                            getColorVariantsFromColorThemeValue(colorTheme[colors[idx]].background).bgColor,
                        ) }
                        />
                    );
                })}
                { percentageValue !== undefined ? (
                    <div className="absolute" style={ { left: `${percentageValue}%` } }>
                        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
                            <div
                                className={ classNames(
                                    'bg-white -translate-x-1 z-1 border-4 rounded-full shadow-md',
                                    markerBorderColor,
                                    sizing.md.height,
                                    sizing.md.width,
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
