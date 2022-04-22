import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface ProgressBarProps {
    widthPercentage: number,
    primaryColor?: string,
    secondaryColor?: string
}

const ProgressBar = ({
    widthPercentage,
    primaryColor = 'bg-blue-500',
    secondaryColor = 'bg-blue-200', 
}: ProgressBarProps) => {
    return(
        <BarWrapper bgColor={ secondaryColor }>
            <div 
                className={ classNames(
                    parseBgClassNames(primaryColor),
                    'flex-col text-center rounded justify-center'
                ) }
                style={ {'width': `${widthPercentage}%`} }
            />
        </BarWrapper>
    );
};

export default ProgressBar;
