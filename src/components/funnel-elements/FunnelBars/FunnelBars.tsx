import React, { useEffect, useRef, useState } from "react";

import { classNames, parseBgClassNames, parseTextColorClassNames } from "@utils/classname-utils";
import BarWrapper from "@common/BarWrapper";

export interface FunnelBarsProps {
    widthPercentageList: number[],
    funnelBgColor?: string,
    funnelPixelHeight?: number
    primaryBarBgColor?: string,
    secondaryBarBgColor?: string,
}

const FunnelBars = ({
    widthPercentageList,
    funnelPixelHeight = 70,
    funnelBgColor = 'text-gray-100',
    primaryBarBgColor = 'bg-gray-300',
    secondaryBarBgColor = 'bg-gray-100',
}: FunnelBarsProps) => {

    const getRefPixelWidth = (refElement: React.RefObject<HTMLDivElement>): number => {
        return refElement.current ? refElement.current.offsetWidth : 0;
    };

    const barWrapperWidthRef = useRef<HTMLDivElement>(null);
    const [barWrapperWidth, setBarWrapperWidth] = useState(getRefPixelWidth(barWrapperWidthRef));

    const handleWindowResize = (): void => {
        setBarWrapperWidth(getRefPixelWidth(barWrapperWidthRef));
    };

    const calculateSideBorderWidth = (topElementWidth: number, bottomElementWidth: number): number => (
        Math.floor((topElementWidth - bottomElementWidth) / 2)
    );

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => {
            document.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return(
        <>
            <BarWrapper 
                widthRef={ barWrapperWidthRef }
                bgColor={ secondaryBarBgColor }
                addClassNames={'justify-center'}
            >
                <div className="h-full bg-gray-400 rounded" style={ {'width': '100%'} }></div>
            </BarWrapper>
            <div className="flex justify-center">
                <div
                    className={ classNames(
                        parseTextColorClassNames(funnelBgColor),
                        'boder-b-0 h-0'
                    )}
                    style={{
                        width: `100%`,
                        borderTop: `${funnelPixelHeight}px solid`,
                        borderLeft: `${calculateSideBorderWidth(barWrapperWidth*1, barWrapperWidth*0.50)}px 
                                     solid transparent`,
                        borderRight: `${calculateSideBorderWidth(barWrapperWidth*1, barWrapperWidth*0.50)}px
                                      solid transparent`,
                    }}
                />
            </div>
            <BarWrapper bgColor="bg-gray-100" widthRef={ barWrapperWidthRef } addClassNames={'justify-center'}>
                <div className="h-full bg-gray-400 rounded" style={ {'width': '50%'} }></div>
            </BarWrapper>
        </>
    );
};

export default FunnelBars;
