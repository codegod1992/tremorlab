import React from 'react';
import Tooltip from '@tippyjs/react'

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface ProgressBarProps extends BaseComponentProps {
    widthPercentage: number,
    primaryBarBgColor?: string,
    secondaryBarBgColor?: string
}

const ProgressBar = ({
    widthPercentage,
    primaryBarBgColor = 'bg-blue-500',
    secondaryBarBgColor = 'bg-blue-200',
    marginTop
}: ProgressBarProps) => {
    return(
        <BarWrapper bgColor={ secondaryBarBgColor } marginTop={ parseMarginTopClassNames(marginTop) }>
            {/* @Achi: External tooltip test */}
            {/* <Tooltip content={ widthPercentage } className="flex justify-end"> */}
                <div 
                    className={ classNames(
                        parseBgClassNames(primaryBarBgColor),
                        'h-full flex-col rounded-lg'
                    ) }
                    style={ {'width': `${widthPercentage}%`} }
                />
            {/* </Tooltip> */}
        </BarWrapper>
    );
};

export default ProgressBar;
