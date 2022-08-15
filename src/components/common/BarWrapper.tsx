import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface BarWrapperProps {
    bgColor?: string,
    gap?: boolean,
    overflowHidden?: boolean,
    justifyContent?: string,
    marginTop?: string,
    children: React.ReactNode
}

const BarWrapper = ({
    bgColor = 'bg-transparent',
    gap = false,
    overflowHidden = false,
    justifyContent = '',
    marginTop = '',
    children
}: BarWrapperProps) => {
    return(
        <div 
            className={ classNames(
                bgColor,
                gap ? 'space-x-1' : '',
                overflowHidden ? 'overflow-hidden' : '',
                justifyContent,
                marginTop,
                'relative h-2 w-full relative flex rounded-lg items-center',
            ) }
        >
            { children }
        </div>
    );  
};

export default BarWrapper;
