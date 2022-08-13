import React from 'react';

import { classNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';
import { BaseColors } from '@utils/objects';
import { colors } from './mappings';

export interface MarkerBarProps {
    percentageValue: number,
    color?: string,
    marginTop?: string,
}

const MarkerBar = ({
    percentageValue,
    color = BaseColors.Blue,
    marginTop
}: MarkerBarProps) => {
    return(
        <BarWrapper
            bgColor={ colors[color].secondaryBgColor }
            marginTop={ parseMarginTopClassNames(marginTop) }
        >
            <div className="bg-transparent" style={ {'width': `${percentageValue}%` } } />
            <div className={ classNames(
                colors[color].primaryBgColor,
                'h-4 w-1 rounded-lg ring-2 ring-white'
            ) }
            />
        </BarWrapper>
    );
};

export default MarkerBar;
