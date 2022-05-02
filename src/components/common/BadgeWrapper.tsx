import React from 'react';

import { BadgeProportionTypes } from '@common/common-types';
import { classNames } from '@utils/classname-utils';

export interface BadgeWrapperProps extends BadgeProportionTypes {
    textColor: string,
    bgColor: string,
    children: React.ReactNode
}

const BadgeWrapper = ({
    paddingX,
    paddingY,
    textSize,
    textColor,
    bgColor,
    children
}: BadgeWrapperProps) => {
    return(
        <span className={classNames(
            paddingX, paddingY, textSize, textColor, bgColor,
            'flex-shrink-0 inline-flex justify-center items-center rounded-full'
        )}
        >
            { children }
        </span>
    );
};

export default BadgeWrapper;
