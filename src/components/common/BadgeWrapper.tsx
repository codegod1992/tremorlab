import React from 'react';

import 'tippy.js/dist/tippy.css';
import Tooltip from '@tippyjs/react';

import { BadgeProportionTypes } from '@common/common-types';
import { classNames } from '@utils/classname-utils';

export interface BadgeWrapperProps extends BadgeProportionTypes {
    textColor: string,
    bgColor: string,
    tooltip?: string,
    children: React.ReactNode
}

const BadgeWrapper = ({
    paddingX,
    paddingY,
    textSize,
    textColor,
    bgColor,
    tooltip,
    children
}: BadgeWrapperProps) => {
    return(
        <Tooltip content={ tooltip } className={ tooltip ? '' : 'hidden' }>
            <div className={classNames(
                paddingX, paddingY, textSize, textColor, bgColor,
                'flex-shrink-0 inline-flex justify-center items-center rounded-full'
            )}
            >
                { children }
            </div>
        </Tooltip>
    );
};

export default BadgeWrapper;
