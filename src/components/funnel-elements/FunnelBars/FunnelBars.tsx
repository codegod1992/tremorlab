import React, { useEffect, useRef, useState } from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import Trapezoid from '@common/Trapzoid';

export interface FunnelBarsProps extends BaseComponentProps {
    widthPercentageList: number[],
    funnelColor?: string,
    funnelPixelHeight?: number
    primaryBarBgColor?: string,
    secondaryBarBgColor?: string,
}

const FunnelBars = ({
    widthPercentageList,
    funnelPixelHeight = 70,
    funnelColor = 'text-gray-100',
    primaryBarBgColor = 'bg-gray-400',
    secondaryBarBgColor = 'bg-gray-100',
    marginTop
}: FunnelBarsProps) => {

    const getRefPixelWidth = (refElement: React.RefObject<HTMLDivElement>): number => {
        return refElement.current ? refElement.current.offsetWidth : 0;
    };

    const barWrapperWidthRef = useRef<HTMLDivElement>(null);
    const [barWrapperWidth, setBarWrapperWidth] = useState(getRefPixelWidth(barWrapperWidthRef));

    const handleWindowResize = (): void => {
        setBarWrapperWidth(getRefPixelWidth(barWrapperWidthRef));
    };

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            document.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return(
        <div ref={ barWrapperWidthRef } className={ classNames(parseMarginTopClassNames(marginTop), 'w-full') }>
            { widthPercentageList?.map((widthPercentage, idx) => {
                const currentWidthPercentage: number = widthPercentage;
                const nextWithPercentage: number = idx!=widthPercentageList.length - 1
                    ? widthPercentageList[idx + 1]
                    : -1;

                return(
                    <React.Fragment key={idx}>
                        <BarWrapper
                            bgColor={ secondaryBarBgColor }
                            justifyContent={'justify-center'}
                        >
                            <div 
                                className={ classNames(
                                    parseBgClassNames(primaryBarBgColor),
                                    'h-full rounded'
                                ) }
                                style={ {'width': `${currentWidthPercentage}%`} } />
                        </BarWrapper>
                        {idx!=widthPercentageList.length - 1 ? (
                            <div className="flex justify-center">
                                <Trapezoid
                                    wrapperPixelWidth={ barWrapperWidth }
                                    topWidthPercentage={ currentWidthPercentage }
                                    bottomWidthPercentage = {nextWithPercentage}
                                    pixelHeight = { funnelPixelHeight }
                                    textColor = { funnelColor }
                                />
                            </div>    
                        ) : null}
                    </React.Fragment>
                );
            }) }
        </div>
    );
};

export default FunnelBars;
