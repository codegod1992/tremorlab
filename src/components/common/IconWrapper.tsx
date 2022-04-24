import React from 'react';

import { classNames } from '@utils/classname-utils';

export interface IconWrapperProps {
    Icon: React.ElementType,
    iconSize: string,
    paddingX: string,
    paddingY: string,
    rounded: string,
    bgColor: string,
    textColor: string,
    border: string,
    borderColor: string,
    ring: string,
    ringColor: string,
    shadow: string,
}

const IconWrapper = (props: IconWrapperProps) => {
    return(
        <div 
            className={ classNames(
                props.paddingX,
                props.paddingY,
                props.rounded,
                props.bgColor,
                props.textColor,
                props.border,
                props.borderColor,
                props.ring,
                props.ringColor,
                props.shadow,
                'flex-shrink-0 inline-flex items-center'
            ) }
        >
            <props.Icon className={ classNames(
                props.iconSize
            ) }/>
        </div>
    );
};

export default IconWrapper;
