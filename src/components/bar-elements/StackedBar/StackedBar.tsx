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
            'relative text-sm flex w-full mb-2',
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor
        ) }
        >
            { elements.slice(0, elements.length).map(([widthPercentage, _], idx) => {
                prefixSum += widthPercentage;
                return (
                    <div
                        key={ `item-${idx}` }
                        className={ classNames(idx !== 0 ? 'ml-1' : '') }
                        style={ { 'width': `${widthPercentage}%` } }
                    >
                        { idx !== 0 ? prefixSum - widthPercentage + 1 : null }
                    </div>
                );
            }) }
            <div className="absolute left-0 top-0">
                0
            </div>
            <div className="absolute right-0 top-0">
                100
            </div>
        </div>
    );
};

export interface StackedBarProps extends BaseComponentProps {
    elements: [number, string][],
    markerPercentageValue?: number,
    showLabels?: boolean,
}

const StackedBar = ({
    elements,
    markerPercentageValue,
    showLabels = true,
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
        <div className={ classNames(parseMarginTopClassNames(marginTop)) }>
            { showLabels ? <BarLabels elements={ elements } /> : null }
            <BarWrapper gap={ true }>
                {elements.map(([widthPercentage, color], idx) => {
                    return(
                        <div key={ `item-${idx}` } style={ { width: `${widthPercentage}%` } } className={ classNames(
                            getColorVariantsFromColorThemeValue(colorTheme[color].background).bgColor,
                            'h-full rounded-md',
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
                        ) } />
                    </div>
                ) : null}
            </BarWrapper>
        </div>
    );
};

export default StackedBar;
