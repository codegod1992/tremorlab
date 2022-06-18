import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

export interface ProgressBarProps extends BaseComponentProps {
    widthPercentage: number,
    color?: string,
}

const ProgressBar = ({
    widthPercentage,
    color = BaseColors.Blue,
    marginTop
}: ProgressBarProps) => {
    return(
        <BarWrapper bgColor={ colors[color].secondaryBgColor } marginTop={ parseMarginTopClassNames(marginTop) }>
            <div 
                className={ classNames(
                    colors[color].primaryBgColor,
                    'h-full flex-col rounded-lg'
                ) }
                style={ {'width': `${widthPercentage}%`} }
            />
        </BarWrapper>
    );
};

export default ProgressBar;
