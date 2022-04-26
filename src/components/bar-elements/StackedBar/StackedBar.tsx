import React from 'react';

import BaseComponentProps from '@common/BaseComponentInterface';

import { classNames, parseBgClassNames, parseMarginTopClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface StackedBarProps extends BaseComponentProps {
    elements: [number, string][],
    gap: boolean
}

const StackedBar = ({
    elements,
    gap = true,
    marginTop
}: StackedBarProps) => {
    return(
        <BarWrapper 
            marginTop={ parseMarginTopClassNames(marginTop) }
            gap={ gap }
            overflowHidden={ true }
        >
            {elements.map(([widthPercentage, bgColor], idx) => (
                <div key={ idx } style={ { width: `${widthPercentage}%` } } className={ classNames(
                    parseBgClassNames(bgColor),
                    'h-full'
                ) }
                />
            ))}
        </BarWrapper>
    );
};

export default StackedBar;
