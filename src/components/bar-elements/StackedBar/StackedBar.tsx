import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { 
    classNames,
    getColorVariantsFromColorThemeValue,
    parseBgClassNames,
    parseBorderClassNames,
    parseMarginTopClassNames,
    toBorderColorClass
} from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import colorTheme from '@utils/colorTheme';

export interface StackedBarProps extends BaseComponentProps {
    elements: [number, string][],
    markerPercentageValue?: number,
    gap: boolean
}

const StackedBar = ({
    elements,
    markerPercentageValue,
    gap = true,
    marginTop
}: StackedBarProps) => {

    const getMarkerBorderColor = (): string => {
        if (markerPercentageValue === undefined)
            return '';

        let prefixSum = 0;
        for (let i = 0; i < elements.length; i++) {
            const currentWidthPercentage = elements[i][0];
            const currentBgColor = getColorVariantsFromColorThemeValue(colorTheme[elements[i][1]].background).bgColor;

            prefixSum += currentWidthPercentage;
            if (prefixSum >= markerPercentageValue)
                return toBorderColorClass(currentBgColor);
        }

        return '';
    };

    const markerBorderColor = getMarkerBorderColor();

    return(
        <BarWrapper 
            marginTop={ parseMarginTopClassNames(marginTop) }
            gap={ gap }
        >
            {elements.map(([widthPercentage, color], idx) => {
                return(
                    <div key={ idx } style={ { width: `${widthPercentage}%` } } className={ classNames(
                        getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                        'h-full rounded-lg',
                        // @Achi: old below, feel free to delete
                        // idx === 0 ? 'rounded-l' : '',
                        // idx === elements.length-1 ? 'rounded-r' : ''
                    ) }
                    />
                );
            })}
            { markerPercentageValue!==undefined ? (
                <div 
                    className="absolute inset-0 flex justify-end z-10 items-center"
                    style={{width: `${markerPercentageValue}%` }}
                >
                    <div className={ classNames(
                        'flex flex-none z-1 items-center bg-white  border-4 rounded-full h-4 w-4 shadow-md',
                        parseBorderClassNames(markerBorderColor)
                    ) }></div>
                </div>
            ) : null}
        </BarWrapper>
    );
};

export default StackedBar;
