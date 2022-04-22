import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface ProgressBarProps {
    widthPercentage: number,
    primaryBarBgColor?: string,
    secondaryBarBgColor?: string
}

const ProgressBar = ({
    widthPercentage,
    primaryBarBgColor = 'bg-blue-500',
    secondaryBarBgColor = 'bg-blue-200', 
}: ProgressBarProps) => {
    return(
        <BarWrapper bgColor={ secondaryBarBgColor }>
            <div 
                className={ classNames(
                    parseBgClassNames(primaryBarBgColor),
                    'h-full flex-col text-center rounded justify-center'
                ) }
                style={ {'width': `${widthPercentage}%`} }
            />
        </BarWrapper>
    );
};

export default ProgressBar;
