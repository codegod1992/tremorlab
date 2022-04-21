import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';

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
        <div className={ classNames(
            parseBgClassNames(secondaryColor),
            'h-3 flex rounded w-full overflow-hidden'
        ) }
        >
            <div 
                className={ classNames(
                    parseBgClassNames(primaryColor),
                    'flex-col text-center rounded justify-center'
                ) }
                style={ {'width': `${widthPercentage}%`} }
            />
        </div>
    );
};

export default ProgressBar;
