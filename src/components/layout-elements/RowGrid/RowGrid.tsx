import React from 'react';

import { classNames, parseGapXClassNames, parseGapYClassNames } from '@utils/classname-utils';

export interface RowGridProps {
    numRows?: number,
    gapX?: string,
    gapY?: string,
    children: React.ReactNode
}

const RowGrid = ({
    numRows = 3,
    gapX = 'gap-x-1',
    gapY = 'gap-y-1',
    children
}: RowGridProps) => {
    return(
        <div className={ classNames(
            parseGapXClassNames(gapX),
            parseGapYClassNames(gapY),
            `grid-rows-${String(numRows)}`,
            'grid-flow-col',
            'grid'
        ) }>
            { children }
        </div>
    );
};

export default RowGrid;
