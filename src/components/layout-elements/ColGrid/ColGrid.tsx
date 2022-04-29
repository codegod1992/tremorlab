import React from 'react';

import { classNames, parseGapXClassNames, parseGapYClassNames } from '@utils/classname-utils';

export interface ColGridProps {
    numColumns?: number,
    gapX?: string,
    gapY?: string,
    children: React.ReactNode
}

const ColGrid = ({
    numColumns = 3,
    gapX = 'gap-x-1',
    gapY = 'gap-y-1',
    children
}: ColGridProps) => {
    return(
        <div className={ classNames(
            parseGapXClassNames(gapX),
            parseGapYClassNames(gapY),
            `grid-cols-${String(numColumns)}`,
            'grid'
        ) }>
            { children }
        </div>
    );
};

export default ColGrid;
