import React from 'react';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseBorderClassNames,
    parseMarginTopClassNames,
    toBorderColorClass
} from '@utils/classname-utils';
import colorTheme, { defaultColors } from '@utils/colorTheme';
import BarWrapper from '@common/BarWrapper';
import BaseComponentProps from '@common/BaseComponentInterface';

const BarLabels = ({ elements }: {elements: [number, string][]}) => {
    let prefixSum = 0;
    return (
        <div className={ classNames(
            'relative text-sm flex w-full mb-2 space-x-1',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor
        ) }
        >
            { elements.slice(0, elements.length).map((element, idx) => {
                const widthPercentage = element[0];
                prefixSum += widthPercentage;
                return (
                    <div
                        key={ `item-${idx}` }
                        className={ classNames('flex items-center justify-end') }
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

export interface StackedBarProps extends BaseComponentProps {
    categories: [number, string][],
    percentageValue?: number,
    showLabels?: boolean,
}

const StackedBar = ({
    categories,
    percentageValue,
    showLabels = true,
    marginTop
}: StackedBarProps) => {

    const getMarkerBorderColor = (): string => {
        if (percentageValue === undefined)
            return '';

        let prefixSum = 0;
        for (let i = 0; i < categories.length; i++) {
            const currentWidthPercentage = categories[i][0];
            const currentBgColor = getColorVariantsFromColorThemeValue(colorTheme[categories[i][1]].background).bgColor;

            prefixSum += currentWidthPercentage;
            if (prefixSum >= percentageValue)
                return toBorderColorClass(currentBgColor);
        }

        return '';
    };

    const markerBorderColor = getMarkerBorderColor();

    return(
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            { showLabels ? <BarLabels elements={ categories } /> : null }
            <BarWrapper gap={ true }>
                {categories.map(([widthPercentage, color], idx) => {
                    return(
                        <div key={ `item-${idx}` } style={ { width: `${widthPercentage}%` } } className={ classNames(
                            getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                            'h-full rounded-md',
                        ) }
                        />
                    );
                })}
                { percentageValue!==undefined ? (
                    <div 
                        className="absolute inset-0 flex justify-end z-10 items-center"
                        style={{width: `${percentageValue}%` }}
                    >
                        <div className={ classNames(
                            'flex flex-none z-1 items-center bg-white  border-4 rounded-full h-4 w-4 shadow-md',
                            parseBorderClassNames(markerBorderColor)
                        ) } />
                    </div>
                ) : null}
            </BarWrapper>
        </div>
    );
};

export default StackedBar;
