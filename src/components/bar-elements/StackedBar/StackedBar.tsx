import React from 'react';

import { classNames, parseBgClassNames } from '@utils/classname-utils';
import BarWrapper from '@common/BarWrapper';

export interface StackedBarProps {
    elements: [number, string][],
    gap: boolean
}

const StackedBar = ({
    elements,
    gap = true
}: StackedBarProps) => {
    return(
        <BarWrapper addClassNames={gap ? 'space-x-0.5' : ''}>
            {elements.map(([widthPercentage, bgColor], idx) => (
                <div key={ idx } style={ { width: `${widthPercentage}%` } } className={ classNames(
                    parseBgClassNames(bgColor),
                ) }
                />
            ))}
        </BarWrapper>
    );
};

export default StackedBar;
