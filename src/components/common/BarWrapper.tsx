import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';

export interface BarWrapperProps {
    bgColor?: string,
    addClassNames?: string,
    children: React.ReactNode
}

const BarWrapper = ({
    bgColor = 'bg-transparent',
    addClassNames = '',
    children
}: BarWrapperProps) => {
    return(
        <div className={ classNames(
            parseBgClassNames(bgColor),
            addClassNames,
            'h-3 w-full relative flex rounded items-center',
        ) }
        >
            { children }
        </div>
    );  
};

export default BarWrapper;
