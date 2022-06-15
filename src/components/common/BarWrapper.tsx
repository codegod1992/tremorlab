import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames } from '@utils/classname-utils';

export interface BarWrapperProps extends BaseComponentProps {
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
                'h-2 w-full relative flex rounded-lg items-center',
            ) }
        >
            { children }
        </div>
    );  
};

export default BarWrapper;
