import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';

export interface BarWrapperProps {
    bgColor?: string,
    gap?: boolean,
    overflowHidden?: boolean,
    justifyContent?: string,
    children: React.ReactNode
}

const BarWrapper = ({
    bgColor = 'bg-transparent',
    gap = false,
    overflowHidden = false,
    justifyContent = '',
    children
}: BarWrapperProps) => {
    return(
        <div 
            className={ classNames(
                bgColor,
                gap ? 'space-x-0.5' : '',
                overflowHidden ? 'overflow-hidden' : '',
                justifyContent,
                'h-3 w-full relative flex rounded items-center',
            ) }
        >
            { children }
        </div>
    );  
};

export default BarWrapper;
