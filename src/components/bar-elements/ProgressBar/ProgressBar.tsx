import React from 'react';

import BaseComponentProps from '@utils/BaseComponentInterface';

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
            <div 
                className={ classNames(
                    parseBgClassNames(primaryBarBgColor),
                    'h-full flex-col text-center rounded justify-center'
                ) }
                style={ {'width': `${widthPercentage}%`} }
            />
        </BarWrapper>
    );
};

export default ProgressBar;
