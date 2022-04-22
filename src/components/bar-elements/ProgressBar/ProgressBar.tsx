import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface ProgressBarProps {
    widthPercentage: number,
    primaryBgColor?: string,
    secondaryBgColor?: string
}

const ProgressBar = ({
    widthPercentage,
    primaryBgColor = 'bg-blue-500',
    secondaryBgColor = 'bg-blue-200', 
}: ProgressBarProps) => {
    return(
        <BarWrapper bgColor={ secondaryBgColor }>
            <div 
                className={ classNames(
                    parseBgClassNames(primaryBgColor),
                    'h-full flex-col text-center rounded justify-center'
                ) }
                style={ {'width': `${widthPercentage}%`} }
            />
        </BarWrapper>
    );
};

export default ProgressBar;
