import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';

export interface BarWrapperProps {
    bgColor?: string,
    addClassNames?: string,
    widthRef: React.Ref<HTMLDivElement>,
    children: React.ReactNode
}

const BarWrapper = ({
    bgColor = 'bg-transparent',
    addClassNames = '',
    widthRef = React.useRef<HTMLDivElement>(null),
    children
}: BarWrapperProps) => {
    return(
        <div 
            className={ classNames(
                parseBgClassNames(bgColor),
                addClassNames,
                'h-3 w-full relative flex rounded items-center',
            ) }
            ref={ widthRef }
        >
            { children }
        </div>
    );  
};

export default BarWrapper;
